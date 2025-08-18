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

    return <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ padding: 16 }}>
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
                <Image source={Logo} style={{ width: 120, height: 120 }} />
            </View>

            <Typography fontSize='h3' fontWeight='bold' color='black' sx={{ marginBottom: 24, textAlign: 'left' }}>
                Insira seu e-mail para continuar
            </Typography>

            <Input label='E-mail' value={email} onChangeText={onChange} hasError={!!error} keyboardType="email-address" containerStyle={{ marginBottom: 8 }} />
            {error !== '' && <ErrorInput>{error}</ErrorInput>}
        </View>

        <View style={{ width: '100%', paddingHorizontal: 16, position: 'absolute', bottom: 34 }}>
            <Button
                title='Continuar'
                variant='contained'
                disabled={false}
                onPress={onContinue}
            />
        </View>
    </Container>
}