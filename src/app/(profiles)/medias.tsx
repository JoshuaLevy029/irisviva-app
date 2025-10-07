import Back from "@/components/Back";
import Button, { IconButton } from "@/components/Button";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Input, { ErrorInput } from "@/components/Input";
import Loading, { useLoading } from "@/components/Loading";
import Select from "@/components/Select";
import Toast, { useToast } from "@/components/Toast";
import Typography from "@/components/Typography";
import themeConfig from "@/config/theme.config";
import { useSession } from "@/context/auth";
import { User } from "@/entities/user.entity";
import { SocialMedia, SocialMediaIcon } from "@/enums/socialMedia.enum";
import axiosUtil from "@/utils/axios.util";
import WaveSign2 from "@/views/WaveSign2";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, View, Keyboard, Modal, useWindowDimensions, ScrollView } from "react-native";
import * as yup from 'yup';

export default function Page () {
    const dimensions = useWindowDimensions()
    const router = useRouter()
    const { isAuthenticated, session, isLoading, getSession } = useSession()
    const [user, setUser] = React.useState<User | null>(null)

    const [dialogMedia, setDialogMedia] = React.useState<boolean>(false)
    const [data, setData] = React.useState<{ social_media: User['social_media'] }>({ social_media: [] })
    const [isKeyboardVisible, setIsKeyboardVisible] = React.useState(false)

    const { openToast, closeToast, ...toastProps } = useToast();
    const { openLoading, closeLoading, ...loadingProps } = useLoading();

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

    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => {
            setUser(user)
            setData({ social_media: user?.social_media ?? [] })
        })
    }, [isLoading, isAuthenticated]))

    const onSave = () => {
        if (!user?.id && !session) {
            return;
        }

        openLoading({
            open: true,
            message: 'Atualizando...',
        })

        axiosUtil.put({ url: '/auth/me', data: { social_media: data.social_media }, token: session || '', process: true })
        .then(res => {
            closeLoading()
            openToast({
                open: true,
                message: res.data.message,
                color: themeConfig.colors.success.main,
                iconColor: 'white',
                icon: 'IconSolarChatRoundCheckLinear',
                textProps: {
                    color: 'white',
                },
                opacity: .9,
                onClose: () => {
                    closeToast()
                    router.navigate({
                        pathname: user?.role === 'admin' ? '/(admin)/profile' : '/(tabs)/profile',
                        params: {}
                    })
                }
            })
        })
        .catch(err => {
            closeLoading()
            console.log(err.data.errors)

            if (err.data.message) {
                openToast({
                    open: true,
                    message: err.data.message,
                    color: themeConfig.colors.error.main,
                    iconColor: 'white',
                    icon: 'IconSolarDangerTriangleLinear',
                    textProps: {
                        color: 'white',
                    },
                    opacity: .9,
                    onClose: () => closeToast()
                })
            } else {
                openToast({
                    open: true,
                    message: 'Ocorreu um erro ao tentar atualizar. Por favor, tente novamente.',
                    color: themeConfig.colors.error.main,
                    iconColor: 'white',
                    icon: 'IconSolarDangerTriangleLinear',
                    textProps: {
                        color: 'white',
                    },
                    opacity: .9,
                    onClose: () => closeToast()
                })
            }
        })
    }

    const onAddMedia = () => setDialogMedia(true)
    const onDismissMedia = () => setDialogMedia(false)

    const onSelectMedia = (media: User['social_media'][number]['type']) => {
        setData(prev => ({ ...prev, social_media: [...prev.social_media, { type: media, data: '' }] }))
        onDismissMedia()
    }
    const onChangeMedia = (index: number, data: string) => {
        setData(prev => ({ ...prev, social_media: prev.social_media.map((media, i) => i === index ? { ...media, data } : media) }))
    }
    const onRemoveMedia = (index: number) => {
        setData(prev => ({ ...prev, social_media: prev.social_media.filter((_, i) => i !== index) }))
    }

    return <Container style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, paddingTop: 77 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: 32 }}>
            <Back />
            <Typography style={{ color: '#000', fontSize: 24, marginBottom: 0, lineHeight: 24 }}>
                Editar Mídias Sociais
            </Typography>
        </View>

        <Button title='Adicionar mídia' icon='IconSolarAddSquareLinear' sx={{ gap: 10, marginTop: 20 }} onPress={onAddMedia} />

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

        <View style={{ width: '100%', position: 'absolute', bottom: 34 }}>
            <Button
                title='Salvar'
                variant='contained'
                fullWidth
                disabled={false}
                onPress={onSave}
            />
        </View>

        <Toast placement='bottom' {...toastProps} />
        <Loading {...loadingProps} />

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