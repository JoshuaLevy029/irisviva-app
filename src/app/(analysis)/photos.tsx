
import Button from '@/components/Button'
import Container from '@/components/Container'
import Icon from '@/components/Icon'
import Input, { ErrorInput } from '@/components/Input'
import Typography from '@/components/Typography'
import AnimatedScrollView from '@/components/animatedScrollView'
import themeConfig from '@/config/theme.config'
import { Redirect, useFocusEffect, useRouter } from 'expo-router'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Alert, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Modal, { ModalContent } from '@/components/Modal'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import CameraFlip from '@/svg/CameraFlip'
import axiosUtil from '@/utils/axios.util'
import { useSession } from '@/context/auth'
import { User } from '@/entities/user.entity'
import { useRoute } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer'
import { Http } from '@/utils/http.util'


export default function PhotosScreen () {
    const { getSession, isAuthenticated, isLoading, session } = useSession()
    const [user, setUser] = React.useState<User | null>(null)

    if (isLoading) {
        return null
    }

    if (!isAuthenticated) {
        return <Redirect href='/(signin)' />
    }
    
    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => setUser(user))
    }, [isLoading, isAuthenticated]))

    const dimensions = useWindowDimensions()
    const router = useRouter()
    const route = useRoute()
    const params = route.params as {
        name: string
        age: number
        occupation: string
        gender: string
        gender_definition: string
    }

    const [photos, setPhotos] = React.useState<{
        front: { uri: string, name: string, type: string } | null
        leftside: { uri: string, name: string, type: string } | null
        rightside: { uri: string, name: string, type: string } | null
        signature: { uri: string, name: string, type: string } | null
    }>({
        front: null,
        leftside: null,
        rightside: null,
        signature: null,
    })
    const [photosUri, setPhotosUri] = React.useState({
        front: '',
        leftside: '',
        rightside: '',
        signature: '',
    })
    const [currentMode, setCurrentMode] = React.useState<'front' | 'leftside' | 'rightside' | 'signature' | ''>('')
    
    const [facing, setFacing] = React.useState<CameraType>('front')
    const [permission, requestPermission] = useCameraPermissions()
    const [modalVisible, setModalVisible] = React.useState(false)
    const [processing, setProcessing] = React.useState(false)
    const cameraRef = React.useRef<CameraView>(null)

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer()

    if (!permission) {
        return <View />
    }

    const toggleCameraFacing = () => {
        setFacing((current) => (current === 'back' ? 'front' : 'back'))
    }

    const onCloseCamera = () => {
        setModalVisible(false)
        setCurrentMode('')
    }

    const takePicture = async () => {
        if (cameraRef.current && currentMode) {
            try {
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 1,
                    base64: false,
                    exif: false,
                })
                
                if (photo) {
                    setPhotos((prev) => ({
                        ...prev,
                        [currentMode]: {
                            uri: photo.uri,
                            name: `${currentMode}${photo.format}`,
                            type: `image/${photo.format.replace('.', '')}`,
                        },
                    }))
                    setPhotosUri((prev) => ({
                        ...prev,
                        [currentMode]: photo.uri,
                    }))
                    setModalVisible(false)
                    setCurrentMode('')
                }
            } catch (error) {
                console.error('Error taking picture:', error)
                Alert.alert('Erro', 'Não foi possível tirar a foto. Tente novamente.')
            }
        }
    }

    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'livePhotos'],
            allowsEditing: true,
            quality: 1,
            base64: false,
        })

        if (!result.canceled && result.assets.length > 0) {
            setPhotos((prev) => ({
                ...prev,
                [currentMode]: {
                    uri: result.assets[0].uri,
                    name: `${currentMode}.${result.assets[0].fileName?.split('.').pop()}`,
                    type: result.assets[0].mimeType,
                },
            }))
            setPhotosUri((prev) => ({
                ...prev,
                [currentMode]: result.assets[0].uri,
            }))
            setModalVisible(false)
            setCurrentMode('')
        } else {
            console.log('canceled')
        }
    }

    const onUploadImage = async (side: 'front' | 'leftside' | 'rightside' | 'signature') => {
        if (!permission.granted) {
            await requestPermission()
        }

        setCurrentMode(side)
        setModalVisible(true)
    }

    const onNext = async () => {
        setProcessing(true)
        const formData = new FormData()

        formData.append('front', photos.front as any)
        formData.append('leftside', photos.leftside as any)
        formData.append('rightside', photos.rightside as any)
        if (photos.signature) {
            formData.append('signature', photos.signature as any)
        }
        formData.append('name', params.name)
        formData.append('age', params.age.toString())
        formData.append('occupation', params.occupation)
        formData.append('gender', params.gender)
        formData.append('gender_definition', params.gender_definition || '')

        const response = await axiosUtil.post({
            url: '/analysis',
            data: formData,
            token: session as string,
            process: false,
            headers: {
                'Content-Type': 'multipart/form-data',
            } as any,
        })

        setProcessing(false)

        if (Http.failed(response.status)) {
            if (Http.is('Unauthorized', response.status)) {
                router.replace('/(signin)')
            }

            openDisclaimer({
                open: true,
                title: 'Aviso',
                content: 'Ocorreu um erro ao gerar o relatório. Tente novamente.',
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: []
            })
            return
        }

        if (response.data.status === 'WARNING_WRONG_PHOTO') {
            openDisclaimer({
                open: true,
                title: 'Erro na Análise',
                content: 'A IA não conseguiu processar suas imagens desta vez. Por favor, tente novamente com fotos de melhor qualidade.',
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: []
            })
            return
        }

        router.push({
            pathname: '/(analysis)/report',
            params: {
                result: JSON.stringify(response.data.result),
            }
        })
    }

    return (
        <React.Fragment>
            <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77, marginBottom: 32 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
                        Método IrisViva
                    </Typography>

                    <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 20 }}>
                        Descubra o que seus olhos revelam sobre sua saúde com o poder da IA
                    </Typography>

                    <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, width: '100%' }}>
                        <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginBottom: 10, paddingHorizontal: 20, textAlign: 'center' }}>
                            Upload das fotos
                        </Typography>
                        <Typography fontSize='h6' color='primary' sx={{ marginBottom: 24, paddingHorizontal: 20, textAlign: 'center' }}>
                            Para uma análise precisa, precisamos de 3 fotos nítidas e bem iluminadas
                        </Typography>

                        <View>
                            <Button
                                title='1. Foto do rosto inteiro (de frente)'
                                titleProps={{
                                    style: {
                                        fontSize: 14,
                                    }
                                }}
                                sx={{
                                    borderWidth: 1.5,
                                    borderStyle: 'dashed',
                                    borderColor: themeConfig.colors.gray['A200'],
                                    borderRadius: 16,
                                    padding: 16,
                                    width: '100%',
                                    marginBottom: 10
                                }}
                                onPress={() => onUploadImage('front')}
                            />

                            {photosUri.front && (
                                <Image source={{ uri: photosUri.front }} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 16, marginBottom: 10 }} />
                            )}

                            <Button
                                title='2. Foto do olho esquerdo'
                                titleProps={{
                                    style: {
                                        fontSize: 14,
                                    }
                                }}
                                sx={{
                                    borderWidth: 1.5,
                                    borderStyle: 'dashed',
                                    borderColor: themeConfig.colors.gray['A200'],
                                    borderRadius: 16,
                                    padding: 16,
                                    width: '100%',
                                    marginBottom: 10
                                }}
                                onPress={() => onUploadImage('leftside')}
                            />

                            {photosUri.leftside && (
                                <Image source={{ uri: photosUri.leftside }} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 16, marginBottom: 10 }} />
                            )}

                            <Button
                                title='3. Foto do olho direito'
                                titleProps={{
                                    style: {
                                        fontSize: 14,
                                    }
                                }}
                                sx={{
                                    borderWidth: 1.5,
                                    borderStyle: 'dashed',
                                    borderColor: themeConfig.colors.gray['A200'],
                                    borderRadius: 16,
                                    padding: 16,
                                    width: '100%',
                                    marginBottom: 10
                                }}
                                onPress={() => onUploadImage('rightside')}
                            />

                            {photosUri.rightside && (
                                <Image source={{ uri: photosUri.rightside }} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 16, marginBottom: 10 }} />
                            )}

                            {user?.plan === 'Premium' && (
                                <React.Fragment>
                                    <Button
                                        title='4. Foto da assinatura'
                                        titleProps={{
                                            style: {
                                                fontSize: 14,
                                            }
                                        }}
                                        sx={{
                                            borderWidth: 1.5,
                                            borderStyle: 'dashed',
                                            borderColor: themeConfig.colors.gray['A200'],
                                            borderRadius: 16,
                                            padding: 16,
                                            width: '100%',
                                            marginBottom: 10
                                        }}
                                        onPress={() => onUploadImage('signature')}
                                    />

                                    {photosUri.signature && (
                                        <Image source={{ uri: photosUri.signature }} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 16, marginBottom: 10 }} />
                                    )}
                                </React.Fragment>
                            )}
                        </View>

                        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 10 }}>
                            <Button
                                title='Voltar'
                                variant='contained'
                                disabled={false}
                                onPress={() => router.back()}
                                color={themeConfig.colors.gray['A200']}
                                textColor={themeConfig.colors.gray['A700']}
                                sx={{
                                    flex: 1,
                                }}
                                size='medium'
                            />

                            <Button
                                title='Gerar relatório'
                                variant='contained'
                                disabled={!photos.front || !photos.leftside || !photos.rightside}
                                onPress={onNext}
                                sx={{
                                    flex: 1,
                                }}
                                size='medium'
                            />
                        </View>
                    </View>
                </ScrollView>
            </Container>
            <Modal visible={modalVisible} contentContainerStyle={{ marginHorizontal: 0, borderRadius: 0, padding: 0, minHeight: dimensions.height, width: '100%' }}>
                <ModalContent style={{ width: '100%', height: '100%' }}>
                    <CameraView ref={cameraRef} style={{ flex: 1 }} facing={facing} onCameraReady={() => console.log('camera ready')}>
                        <View style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
                            <TouchableOpacity 
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={onCloseCamera}
                            >
                                <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>×</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent', margin: 30, alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            {/* Camera flip button */}
                            <TouchableOpacity 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: themeConfig.colors.primary,
                                    width: 60,
                                    height: 60,
                                    padding: 10,
                                    borderRadius: 100,
                                }} 
                                onPress={pickImageAsync}
                            >
                                <Icon name='IconSolarGalleryWideLinear' size={30} color='white' />
                            </TouchableOpacity>

                            {/* Capture button */}
                            <TouchableOpacity 
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    backgroundColor: 'white',
                                    borderWidth: 6,
                                    borderColor: themeConfig.colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} 
                                onPress={takePicture}
                            >
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: themeConfig.colors.primary,
                                }} />
                            </TouchableOpacity>

                            {/* Camera flip button */}
                            <TouchableOpacity 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: themeConfig.colors.primary,
                                    width: 60,
                                    height: 60,
                                    padding: 10,
                                    borderRadius: 100,
                                }} 
                                onPress={toggleCameraFacing}
                            >
                                <Icon name='IconSolarCameraRotateLinear' size={30} color='white' />
                            </TouchableOpacity>
                        </View>
                    </CameraView>
                </ModalContent>
            </Modal>

            <Modal visible={processing} contentContainerStyle={{ marginHorizontal: 0, borderRadius: 0, padding: 0, minHeight: dimensions.height, width: '100%' }}>
                <ModalContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: 20 }}>
                    <ActivityIndicator size={75} color={themeConfig.colors.main['A600']} />
                    <Typography fontSize='h2' fontWeight='semibold' color='primary' sx={{ marginTop: 30, textAlign: 'center' }}>
                        Analisando sua íris com a IA...
                    </Typography>

                    <Typography fontSize='h5' fontWeight='semibold' color='primary' sx={{ marginTop: 10, textAlign: 'center' }}>
                        A inteligência artificial está examinando sua foto para criar um relatório exclusivo. Isso pode levar alguns instantes, por favor aguarde na tela.
                    </Typography>
                </ModalContent>
            </Modal>

            <Disclaimer {...disclaimerProps} />
        </React.Fragment>
    );
}