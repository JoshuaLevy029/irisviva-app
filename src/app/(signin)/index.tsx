import Button from "@/components/Button"
import Container from "@/components/Container"
import Input, { ErrorInput } from "@/components/Input"
import Typography from "@/components/Typography"
import axiosUtil from "@/utils/axios.util"
import { useRoute, useTheme } from "@react-navigation/native"
import { useRouter } from "expo-router"
import React from "react"
import { Image, View } from "react-native"
import * as yup from 'yup'
import Logo from '@/assets/images/logo.png'
import WaveSign from "@/views/WaveSign"

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

    const onChange = (value: string) => {
        setEmail(value)
        setError('')
    }

    const onContinue = () => {
        validation.validate({ email }, { abortEarly: false })
        .then(async (validate) => {
            axiosUtil.post({ url: '/auth/verify-email', data: { email } })
            .then((res) => {
                if (res.data.exists) {
                    router.navigate({
                        pathname: '/(signin)/password',
                        params: {
                            email,
                        },
                    })
                    return
                }

                router.navigate({
                    pathname: '/(signup)',
                    params: {
                        email,
                    },
                })
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            if (err.errors && err.errors.length > 0) {
                setError(err.errors[0])
            }
        })
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign />

        <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginTop: 10, marginBottom: 12, textAlign: 'center' }}>
            Insira seu e-mail para continuar
        </Typography>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
            <Input label='E-mail' value={email} onChangeText={onChange} hasError={!!error} keyboardType="email-address" containerStyle={{ marginBottom: 8 }} />
            {error !== '' && <ErrorInput>{error}</ErrorInput>}
        </View>

        <View style={{ width: '100%', paddingHorizontal: 32, position: 'absolute', bottom: 34 }}>
            <Button
                title='Continuar'
                variant='contained'
                disabled={false}
                onPress={onContinue}
            />
        </View>
    </Container>
}