import Button from "@/components/Button"
import Container from "@/components/Container"
import Input, { ErrorInput } from "@/components/Input"
import Typography from "@/components/Typography"
import axiosUtil from "@/utils/axios.util"
import { useRoute, useTheme } from "@react-navigation/native"
import { useRouter } from "expo-router"
import React from "react"
import { Image, Modal, TouchableOpacity, View } from "react-native"
import * as yup from 'yup'
import Logo from '@/assets/images/logo.png'
import WaveSign from "@/views/WaveSign"
import Back from "@/components/Back"
import Disclaimer, { useDisclaimer } from "@/components/Disclaimer"
import { ActivityIndicator } from "react-native-paper"
import themeConfig from "@/config/theme.config"
import Icon from "@/components/Icon"

const validation = yup.object({
  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup.string().required('Confirmar senha é obrigatório'),
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [password, setPassword] = React.useState<string>('')
    const [errors, setErrors] = React.useState<{ password: string, password_confirmation: string }>({
        password: params && params.errors && params.errors.password ? params.errors.password : '',
        password_confirmation: params && params.errors && params.errors.password_confirmation ? params.errors.password_confirmation : '',
    })
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const [isLoading, setIsLoading] = React.useState(false)

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

    const onChange = (field: string) => (value: string) => {
        if (field === 'password') {
            setPassword(value)
        } else {
            setConfirmPassword(value)
        }
        setErrors(prev => ({ ...prev, [field]: '' }))
    }

    const onContinue = () => {
        setIsLoading(true)

        validation.validate({ password, confirmPassword }, { abortEarly: false })
        .then(async (validate) => {
            axiosUtil.post({ url: '/auth/reset-password', data: { email: params.email, code: params.code, password, password_confirmation: confirmPassword } })
            .then((res) => {
                setIsLoading(false)
                openDisclaimer({
                    open: true,
                    title: '',
                    content: (
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
                            <Typography fontWeight='semibold' fontSize='h4' color='primary'>{res.data.message}</Typography>
                        </View>
                    ),
                    closeText: 'Ir para login',
                    onClose: () => {
                        closeDisclaimer()
                        router.navigate({
                            pathname: '/(signin)/password',
                            params: {
                                email: params.email,
                            },
                        })
                    },
                    actions: [],
                    sx: {
                        zIndex: 9999,
                    }
                })
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
                console.log(err.data.errors)

                if (err.data.errors && ((Array.isArray(err.data.errors) && err.data.errors.length > 0) || (typeof err.data.errors === 'object' && Object.keys(err.data.errors).length > 0))) {
                    let _errors: any = {
                        name: '',
                        confirmPassword: '',
                    }

                    Object.keys(err.data.errors).forEach((key: string) => {
                        console.log(key, err.data.errors[key][0])
                        _errors[key as keyof any] = err.data.errors[key][0]
                    })

                    setErrors(_errors)
                } else if (err.data.message) {
                    openDisclaimer({
                        open: true,
                        title: 'Erro ao resetar senha',
                        content: err.data.message,
                        closeText: 'Fechar',
                        onClose: () => {
                            closeDisclaimer()
                        },
                        actions: [],
                    })
                } else {
                    openDisclaimer({
                        open: true,
                        title: 'Erro ao resetar senha',
                        content: 'Ocorreu um erro ao resetar a senha. Por favor, tente novamente.',
                        closeText: 'Fechar',
                        onClose: () => {
                            closeDisclaimer()
                        },
                        actions: [],
                    })
                }
            })
        })
        .catch((err) => {
            if (err.errors && err.errors.length > 0) {
                setErrors(prev => ({ ...prev, password: err.errors[0] }))
            }
        })
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign />

        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back color='white' />
        </View>

        <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginTop: 10, marginBottom: 12, textAlign: 'center' }}>
            Insira sua nova senha
        </Typography>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
            <Input
                label="Nova senha"
                onChangeText={onChange('password')}
                value={password}
                keyboardType='default'
                secureTextEntry={!showPassword}
                hasError={errors.password !== ''}
                containerStyle={{
                    marginBottom: 8,
                }}
                endIcon={<TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                    <Icon size={20} color={themeConfig.colors.primary} name={!showPassword ? 'IconSolarEyeLinear' : 'IconSolarEyeClosedLinear'} />
                </TouchableOpacity>}
            />
            {errors.password !== '' && <ErrorInput>{errors.password}</ErrorInput>}
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
            <Input
                label="Confirmar nova senha"
                onChangeText={onChange('password_confirmation')}
                value={confirmPassword}
                keyboardType='default'
                secureTextEntry={!showPassword}
                hasError={errors.password_confirmation !== ''}
                containerStyle={{ marginBottom: 8 }}
                endIcon={<TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                    <Icon size={20} color={themeConfig.colors.primary} name={!showPassword ? 'IconSolarEyeLinear' : 'IconSolarEyeClosedLinear'} />
                </TouchableOpacity>}
            />
            {errors.password_confirmation !== '' && <ErrorInput>{errors.password_confirmation}</ErrorInput>}
        </View>

        <View style={{ width: '100%', paddingHorizontal: 32, position: 'absolute', bottom: 34 }}>
            <Button
                title='Continuar'
                variant='contained'
                disabled={!password || !confirmPassword || isLoading}
                onPress={onContinue}
            />
        </View>

        <Modal visible={isLoading} onDismiss={() => setIsLoading(false)} transparent={true} statusBarTranslucent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 16, marginHorizontal: 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <ActivityIndicator size={75} color={themeConfig.colors.main['A700']} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary'>
                            Validando código de recuperação de senha...
                        </Typography>
                    </View>
                </View>
            </View>
        </Modal>

        <Disclaimer {...disclaimerProps} />
    </Container>
}