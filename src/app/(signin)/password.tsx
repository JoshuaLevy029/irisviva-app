import Back from "@/components/Back";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Input, { ErrorInput } from "@/components/Input";
import LoadingAction from "@/components/LoadingAction";
import Typography from "@/components/Typography";
import themeConfig from "@/config/theme.config";
import { useSession } from "@/context/auth";
import axiosUtil from "@/utils/axios.util";
import { useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import * as yup from 'yup';

const validation = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const { signIn } = useSession()

    const params = route.params ? (route.params as any) : {}

    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string>(params && params.errors && params.errors.password ? params.errors.password : '')
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const onChange = (value: string) => {
        setPassword(value)
        setError('')
    }

    const onContinue = () => {
        setIsLoading(true)

        signIn({ email: params.email, password })
        .then(res => {
            setIsLoading(false)

            if (res.success) {
                router.navigate({
                    pathname: '/(tabs)',
                    params: {}
                })
                return
            }

            setError(res.message ?? 'E-mail ou senha incorretos')
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            setError(err.message ?? 'E-mail ou senha incorretos')
        })
    }

    return <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back />
        </View>
        <View style={{ padding: 16 }}>
            <Typography fontSize='h3' fontWeight='bold' color='black' sx={{ marginBottom: 24, textAlign: 'left' }}>
                Insira sua senha
            </Typography>

            <Input
                label="Senha"
                onChangeText={onChange}
                value={password}
                keyboardType='default'
                secureTextEntry={!showPassword}
                hasError={error !== ''}
                containerStyle={{
                    marginBottom: 8,
                }}
                endIcon={<TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                    <Icon size={20} color={themeConfig.colors.primary} name={!showPassword ? 'IconSolarEyeLinear' : 'IconSolarEyeClosedLinear'} />
                </TouchableOpacity>}
            />
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

        {isLoading && <LoadingAction message='Entrando...' />}
    </Container>
}