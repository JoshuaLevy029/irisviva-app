import Back from "@/components/Back"
import Button from "@/components/Button"
import { CheckListItem } from "@/components/Checklist"
import Container from "@/components/Container"
import Icon from "@/components/Icon"
import Input from "@/components/Input"
import LoadingAction from "@/components/LoadingAction"
import Typography from "@/components/Typography"
import themeConfig from "@/config/theme.config"
import { useSession } from "@/context/auth"
import validateUtil from "@/utils/validate.util"
import WaveSign2 from "@/views/WaveSign2"
import { useRoute, useTheme } from "@react-navigation/native"
import { useRouter } from "expo-router"
import React from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"

const VALIDATION_CRITERIA = {
    hasUpperCase: 'Pelo menos uma letra maiúscula',
    hasLowerCase: 'Pelo menos uma letra minúculo',
    hasNumber: 'Pelo menos um número',
    hasSymbol: 'Pelo menos um símbolo',
    hasMinLength: 'No mínimo 8 caractéres',
}

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const { signUp } = useSession()

    const params = route.params ? (route.params as any) : {}

    const [password, setPassword] = React.useState<string>('')
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [passwordCriteria, setPasswordCriteria] = React.useState(validateUtil.passwordStrength(''))
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const onChange = (value: string) => {
        setPassword(value)
        setPasswordCriteria(validateUtil.passwordStrength(value))
    }

    const isPasswordValid = () => {
        return Object.values(passwordCriteria).every(Boolean)
    }

    const onContinue = async () => {
        if (isPasswordValid()) {
            setIsLoading(true)

            try {
                const signup = await signUp({
                    email: params.email,
                    name: params.name,
                    age: Number(params.age),
                    occupation: params.occupation,
                    contact: params.contact,
                    role: params.role,
                    password,
                })

                if (signup) {
                    router.navigate({
                        pathname: '/(tabs)',
                    })
                } else {
                    console.log('Erro ao criar conta')
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign2 />

        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back color='white' />
        </View>

        <View style={{ padding: 16 }}>
            <Typography fontSize='h3' fontWeight='semibold' color='primary' sx={{ marginBottom: 16, fontSize: 24, textAlign: 'left' }}>
                Crie uma senha
            </Typography>

            <Input
                label='Senha'
                onChangeText={onChange}
                value={password}
                keyboardType='default'
                secureTextEntry={!showPassword}
                containerStyle={{ marginBottom: 8 }}
                endIcon={
                    <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                        <Icon size={20} color={themeConfig.colors.primary} name={!showPassword ? 'IconSolarEyeLinear' : 'IconSolarEyeClosedLinear'} />
                    </TouchableOpacity>
                }
            />

            <ScrollView style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}>
                {Object.entries(VALIDATION_CRITERIA).map(([key, title]) => (
                    <CheckListItem
                        key={key}
                        title={title}
                        checked={passwordCriteria[key as keyof typeof passwordCriteria]}
                        style={{ marginBottom: 8 }}
                    />
                ))}
            </ScrollView>
        </View>

        <View style={{ width: '100%', paddingHorizontal: 16, position: 'absolute', bottom: 34 }}>
            <Button
                title='Continuar'
                variant='contained'
                disabled={!isPasswordValid()}
                onPress={onContinue}
            />
        </View>

        {isLoading && <LoadingAction message="Estamos criando sua conta..." />}
    </Container>
}