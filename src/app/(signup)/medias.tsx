import Back from "@/components/Back";
import Button, { IconButton } from "@/components/Button";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Input, { ErrorInput } from "@/components/Input";
import Select from "@/components/Select";
import Typography from "@/components/Typography";
import themeConfig from "@/config/theme.config";
import { User } from "@/entities/user.entity";
import { SocialMedia, SocialMediaIcon } from "@/enums/socialMedia.enum";
import axiosUtil from "@/utils/axios.util";
import WaveSign2 from "@/views/WaveSign2";
import { useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, View, Keyboard, Modal, useWindowDimensions, ScrollView } from "react-native";
import * as yup from 'yup';

const validation = yup.object({
    social_media: yup.array().of(yup.object({
        type: yup.string().required('Tipo é obrigatório'),
        data: yup.string().required('Data é obrigatória'),
    })).required('Mídias sociais é obrigatório'),
})

export default function Page () {
    const dimensions = useWindowDimensions()
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [dialogMedia, setDialogMedia] = React.useState<boolean>(false)
    const [data, setData] = React.useState<{ social_media: User['social_media'] }>({ social_media: JSON.parse(params.social_media ?? '[]') ?? [] })
    const [error, setError] = React.useState({
        social_media: params && params.errors && params.errors.social_media ? params.errors.social_media : '',
    })
    const [isKeyboardVisible, setIsKeyboardVisible] = React.useState(false)

    // Keyboard visibility listener
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardVisible(true)
        })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardVisible(false)
        })

        return () => {
            keyboardDidShowListener?.remove()
            keyboardDidHideListener?.remove()
        }
    }, [])

    const onContinue = () => {
        validation.validate(data, { abortEarly: false })
        .then(async (validate) => {
            router.push({
                pathname: '/(signup)/password',
                params: {
                    ...route.params,
                    social_media: JSON.stringify(data.social_media),
                },
            })
        })
        .catch((err) => {
            if (err.errors && err.errors.length > 0) {
                console.log(err.errors, data)
                let errors: { social_media: string } = { social_media: '' }

                err.errors.forEach((error: string) => {
                    if (error.toLowerCase().includes('social_media')) errors.social_media = error
                })

                setError(errors)
            }
        })
    }

    const onAddMedia = () => setDialogMedia(true)
    const onDismissMedia = () => setDialogMedia(false)

    const onSelectMedia = (media: User['social_media'][number]['type']) => {
        setError(prev => ({ ...prev, social_media: '' }))
        setData(prev => ({ ...prev, social_media: [...prev.social_media, { type: media, data: '' }] }))
        onDismissMedia()
    }
    const onChangeMedia = (index: number, data: string) => {
        setData(prev => ({ ...prev, social_media: prev.social_media.map((media, i) => i === index ? { ...media, data } : media) }))
    }
    const onRemoveMedia = (index: number) => {
        setData(prev => ({ ...prev, social_media: prev.social_media.filter((_, i) => i !== index) }))
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1, width: '100%' }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <WaveSign2 />

            <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
                <Back color='white' />
            </View>

            <View style={{ padding: 16, flex: 1, justifyContent: 'center' }}>
                <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginBottom: 24, paddingHorizontal: 20, textAlign: 'center' }}>
                    Por último, nos diga como você gostaria de ser contatado
                </Typography>

                <Button title='Adicionar mídia' icon='IconSolarAddSquareLinear' sx={{ gap: 10 }} onPress={onAddMedia} />


                <ScrollView showsVerticalScrollIndicator={false}>
                    {data.social_media.map((media, index) => (
                        <View key={`${media.type}-${index}`} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                            <View style={{ width: 20 }}>
                                <Icon name={SocialMediaIcon[media.type as keyof typeof SocialMediaIcon]} size={20} />
                            </View>
                            
                            <View style={{ width: dimensions.width - 100 }}>
                                <Input 
                                    placeholder="usuário, nome, etc..." 
                                    value={media.data} 
                                    onChangeText={(v) => onChangeMedia(index, v)} 
                                    containerStyle={{ paddingVertical: 0, height: 40, paddingHorizontal: 8 }} 
                                />
                            </View>
                            
                            <View style={{ width: 20 }}>
                                <IconButton icon='IconSolarTrashBinMinimalisticLinear' onPress={() => onRemoveMedia(index)} color={themeConfig.colors.error.main} size={20} />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {!isKeyboardVisible && (
                <View style={{ width: '100%', paddingHorizontal: 16, paddingBottom: 34, paddingTop: 16 }}>
                    <Button
                        title='Continuar'
                        variant='contained'
                        disabled={data.social_media.length === 0}
                        onPress={onContinue}
                    />
                </View>
            )}
        </KeyboardAvoidingView>

        <Modal visible={dialogMedia} onDismiss={onDismissMedia} transparent={true} statusBarTranslucent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 16, marginHorizontal: 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
                    <View style={{ marginBottom: 10 }}>
                        <Select 
                            label='Mídia Social' 
                            placeholder='Selecione uma opção'
                            value={''} 
                            options={[
                                { label: 'Selecione uma opção', value: '' },
                                ...Object.keys(SocialMedia).map(key => ({ label: SocialMedia[key as keyof typeof SocialMedia], value: key }))
                            ]} 
                            optionComponent={({ label, value }) => <Typography fontWeight='semibold' color='primary'>{label}</Typography>} 
                            render={selected => [
                            { label: 'Selecione uma opção', value: '' },
                            ...Object.keys(SocialMedia).map(key => ({ label: SocialMedia[key as keyof typeof SocialMedia], value: key })),
                            ].find(item => item.value === selected)?.label || ''} 
                            onChange={v => onSelectMedia(v.value as keyof typeof SocialMedia)} 
                        />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button title='Cancelar' variant='outlined' color='error' size='small' onPress={onDismissMedia} />
                    </View>
                </View>
            </View>
        </Modal>
    </Container>
}