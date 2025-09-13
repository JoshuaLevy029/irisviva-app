
import Button from '@/components/Button'
import Container from '@/components/Container'
import Icon from '@/components/Icon'
import Input, { ErrorInput } from '@/components/Input'
import Typography from '@/components/Typography'
import AnimatedScrollView from '@/components/animatedScrollView'
import themeConfig from '@/config/theme.config'
import { Redirect, useRouter } from 'expo-router'
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
import formatUtil from '@/utils/format.util'


export default function PhotosScreen () {
    const { getSession, isAuthenticated, isLoading, session } = useSession()

    if (isLoading) {
        return null
    }

    if (!isAuthenticated) {
        return <Redirect href='/(signin)' />
    }

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

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer()
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
                            📸 Dicas para enviar suas fotos
                        </Typography>
                        <Typography fontSize='h6' color='primary' sx={{ marginBottom: 24, paddingHorizontal: 20, textAlign: 'center' }}>
                            Para que a análise seja clara e segura, siga estas orientações ao tirar suas fotos
                        </Typography>

                        <View style={{ gap: 10, width: '100%', maxWidth: '100%', paddingRight: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, maxWidth: '100%' }}>
                                <Icon name='IconNotoV1LightBulb' size={20} />
                                <Typography fontWeight='semibold' color={themeConfig.colors.gray.A600}>
                                    Iluminação: escolha um ambiente bem iluminado (luz natural é ideal). Evite sombras no rosto e nos olhos.
                                </Typography>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, maxWidth: '100%' }}>
                                <Icon name='IconNotoV1Girl' size={20} />
                                <Typography fontWeight='semibold' color={themeConfig.colors.gray.A600}>
                                    Foto do rosto: enquadre o rosto inteiro, de frente, sem óculos ou boné.
                                </Typography>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, maxWidth: '100%' }}>
                                <Icon name='IconNotoV1Eye' size={20} />
                                <Typography fontWeight='semibold' color={themeConfig.colors.gray.A600}>
                                    Foto da íris (olho direito e esquerdo): aproxime a câmera para focar apenas o olho. Use o zoom se necessário, mas mantenha a imagem nítida.
                                </Typography>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, maxWidth: '100%' }}>
                                <Icon name='IconNotoV1Pen' size={20} />
                                <Typography fontWeight='semibold' color={themeConfig.colors.gray.A600}>
                                    Assinatura (quando solicitada): escreva seu nome em papel branco, em letra cursiva, e fotografe de cima, em boa luz.
                                </Typography>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, maxWidth: '100%' }}>
                                <Icon name='IconNotoV1ManAstronaut' size={20} />
                                <Typography fontWeight='semibold' color={themeConfig.colors.gray.A600}>
                                    Evite filtros ou retoques: envie as fotos no formato natural, sem edições.
                                </Typography>
                            </View>
                        </View>

                        <View style={{ width: '100%', backgroundColor: formatUtil.hexToRgba(themeConfig.colors.warning['A300'], 0.3), padding: 15, borderRadius: 10, marginTop: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                <Icon name='IconSolarDangerTriangleLinear' size={20} color={themeConfig.colors.warning['A600']} />
                                <Typography fontWeight='bold' fontSize='h5' sx={{ color: themeConfig.colors.warning['A600'], flex: 1 }}>
                                Dica Importante
                                </Typography>
                            </View>

                            <Typography fontWeight='regular' sx={{ textAlign: 'justify', color: themeConfig.colors.warning['A600'], fontSize: 16 }}>
                                Quanto mais nítida e bem iluminada a foto, mais precisa será sua análise e suas recomendações de prevenção.
                            </Typography>
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
                                title='Próximo'
                                variant='contained'
                                disabled={false}
                                onPress={() => router.push({
                                    pathname: '/(analysis)/photos',
                                    params: {
                                        ...params,
                                    },
                                })}
                                sx={{
                                    flex: 1,
                                }}
                                size='medium'
                            />
                        </View>
                    </View>
                </ScrollView>
            </Container>

            <Disclaimer {...disclaimerProps} />
        </React.Fragment>
    );
}