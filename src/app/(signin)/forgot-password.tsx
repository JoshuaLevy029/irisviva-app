import Button from "@/components/Button"
import Container from "@/components/Container"
import Input, { ErrorInput } from "@/components/Input"
import Typography from "@/components/Typography"
import axiosUtil from "@/utils/axios.util"
import { useRoute, useTheme } from "@react-navigation/native"
import { useRouter } from "expo-router"
import React from "react"
import { Image, Modal, View } from "react-native"
import * as yup from 'yup'
import Logo from '@/assets/images/logo.png'
import WaveSign from "@/views/WaveSign"
import Back from "@/components/Back"
import Disclaimer, { useDisclaimer } from "@/components/Disclaimer"
import Icon from "@/components/Icon"
import themeConfig from "@/config/theme.config"
import { ActivityIndicator } from "react-native-paper"

const validation = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(params && params.errors && params.errors.email ? params.errors.email : '')
    const [isLoading, setIsLoading] = React.useState(false)

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

    const onChange = (value: string) => {
        setEmail(value)
        setError('')
    }

    const onContinue = () => {
        setIsLoading(true)
        validation.validate({ email }, { abortEarly: false })
        .then(async (validate) => {
            axiosUtil.post({ url: '/auth/forgot-password', data: { email } })
            .then((res) => {
                router.navigate({
                    pathname: '/(signin)/validate-code',
                    params: {
                        email,
                    },
                })
            })
            .catch((err) => {
                setError(err.data.message || 'Ocorreu um erro ao enviar o código de recuperação de senha. Por favor, tente novamente.')
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
            Insira seu e-mail e enviaremos um código de recuperação de senha
        </Typography>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
            <Input label='E-mail' value={email} onChangeText={onChange} hasError={!!error} keyboardType="email-address" containerStyle={{ marginBottom: 8 }} />
            {error !== '' && <ErrorInput>{error}</ErrorInput>}
        </View>

        <View style={{ width: '100%', paddingHorizontal: 32, position: 'absolute', bottom: 34 }}>
            <Button
                title='Enviar código'
                variant='contained'
                disabled={!email || isLoading}
                onPress={onContinue}
            />
        </View>

        <Modal visible={isLoading} onDismiss={() => setIsLoading(false)} transparent={true} statusBarTranslucent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 16, marginHorizontal: 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <ActivityIndicator size={75} color={themeConfig.colors.main['A700']} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary'>
                            Enviando código de recuperação de senha...
                        </Typography>
                    </View>
                </View>
            </View>
        </Modal>

        <Disclaimer {...disclaimerProps} />
    </Container>
}