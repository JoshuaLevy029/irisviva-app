import Button from "@/components/Button";
import Container from "@/components/Container";
import Input, { ErrorInput } from "@/components/Input";
import Typography from "@/components/Typography";
import axiosUtil from "@/utils/axios.util";
import { useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Modal, View } from "react-native";
import * as yup from 'yup';
import Logo from '@/assets/images/logo.png';
import WaveSign from "@/views/WaveSign";
import Back from "@/components/Back";
import Disclaimer, { useDisclaimer } from "@/components/Disclaimer";
import themeConfig from "@/config/theme.config";
import { ActivityIndicator } from "react-native-paper";
import { OtpInput } from "react-native-otp-entry";
import Icon from "@/components/Icon";

const validation = yup.object({
  code: yup.string().required('Código é obrigatório'),
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [code, setCode] = React.useState('')
    const [error, setError] = React.useState(params && params.errors && params.errors.code ? params.errors.code : '')
    const [isLoading, setIsLoading] = React.useState(false)

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

    const [startTime, setStartTime] = React.useState(60)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStartTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const onChange = (value: string) => {
        setCode(value.toUpperCase())
        setError('')
    }

    const onResendCode = () => {
        setIsLoading(true)
        axiosUtil.post({ url: '/auth/resend-code', data: { email: params.email } })
        .then((res) => {
            setIsLoading(false)
            setStartTime(60)
            openDisclaimer({
                open: true,
                title: '',
                content: (
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary'>{res.data.message}</Typography>
                    </View>
                ),
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: [],
                sx: {
                    zIndex: 9999,
                }
            })
        })
        .catch((err) => {
            setIsLoading(false)
            setStartTime(60)
            setError(err.data.message || 'Ocorreu um erro ao reenviar o código de recuperação de senha. Por favor, tente novamente.')
        })
    }

    const onContinue = () => {
        setIsLoading(true)
        validation.validate({ code }, { abortEarly: false })
        .then(async (validate) => {
            axiosUtil.post({ url: '/auth/validate-code', data: { code, email: params.email } })
            .then((res) => {
                router.navigate({
                    pathname: '/(signin)/reset-password',
                    params: {
                        email: params.email,
                        code,
                    },
                })
            })
            .catch((err) => {
                setError(err.data.message || 'Ocorreu um erro ao validar o código de recuperação de senha. Por favor, tente novamente.')
            })
            .finally(() => {
                setIsLoading(false)
            })
        })
        .catch((err) => {
            setIsLoading(false)
            if (err.errors && err.errors.length > 0) {
                setError(err.errors[0])
            }
        })
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign />

        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back color='white' />
        </View>

        <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginTop: 10, marginBottom: 12, textAlign: 'center' }}>
            Digite o código de recuperação de senha
        </Typography>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
            <OtpInput 
                numberOfDigits={6}
                onTextChange={onChange} 
                focusColor={themeConfig.colors.primary}
                theme={{
                    pinCodeContainerStyle: {
                        width: 40,
                        height: 60,
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: themeConfig.colors.primary,
                        marginHorizontal: 4,
                        backgroundColor: themeConfig.colors.background,
                    }
                }}
                type="alphanumeric"
                secureTextEntry={false}
            />
            {error !== '' && <ErrorInput>{error}</ErrorInput>}
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32, marginTop: 16 }}>
            {/* Button wih time out of 60 seconds */}
            <Button 
                title={startTime > 0 ? `Aguarde ${startTime} segundos para reenviar` : 'Reenviar código'}
                {...(startTime <= 0 && { icon: 'IconSolarRefreshBold', iconSize: 16 })}
                onPress={onResendCode}
                color={startTime > 0 ? 'gray' : 'primary'}
                disabled={startTime > 0}
                variant='text'
                size='small'
            />
        </View>

        <View style={{ width: '100%', paddingHorizontal: 32, position: 'absolute', bottom: 34 }}>
            <Button
                title='Validar código'
                variant='contained'
                disabled={!code || isLoading}
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