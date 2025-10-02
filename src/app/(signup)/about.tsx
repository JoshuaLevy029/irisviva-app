import Back from "@/components/Back";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Input, { ErrorInput } from "@/components/Input";
import Typography from "@/components/Typography";
import axiosUtil from "@/utils/axios.util";
import WaveSign2 from "@/views/WaveSign2";
import { useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, View, Keyboard } from "react-native";
import * as yup from 'yup';

const validation = yup.object({
    bio: yup.string().required('Biografia é obrigatória'),
    website: yup.string().optional(),
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [data, setData] = React.useState<{ website: string, bio: string }>({ website: params.website ?? '', bio: params.bio ?? '' })
    const [error, setError] = React.useState({
        website: params && params.errors && params.errors.website ? params.errors.website : '',
        bio: params && params.errors && params.errors.bio ? params.errors.bio : '',
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

    const onChange = (key: string, value: any) => {
        setData(prev => ({ ...prev, [key]: value }))
        setError(prev => ({ ...prev, [key]: '' }))
    }

    const onContinue = () => {
        validation.validate(data, { abortEarly: false })
        .then(async (validate) => {
            router.push({
                pathname: '/(signup)/medias',
                params: {
                    ...route.params,
                    ...data,
                },
            })
        })
        .catch((err) => {
            if (err.errors && err.errors.length > 0) {
                console.log(err.errors, data)
                let errors: { website: string, bio: string } = { website: '', bio: '' }

                err.errors.forEach((error: string) => {
                    if (error.toLowerCase().includes('website')) errors.website = error
                    if (error.toLowerCase().includes('bio')) errors.bio = error
                })

                setError(errors)
            }
        })
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
                    Nos conte mais um pouco sobre você e seu trabalho
                </Typography>

                <Input
                    label='Bio'
                    onChangeText={(text) => onChange('bio', text)}
                    value={data.bio}
                    keyboardType='default'
                    hasError={error.bio !== ''}
                    multiline
                    containerStyle={{
                        marginBottom: error.bio !== '' ? 8 : 0,
                        height: 160,
                    }}
                    style={{
                        height: 140,
                    }}
                    placeholder="Nos dê uma breve descrição sobre você e seu trabalho"
                />

                {error.bio !== '' && <ErrorInput>{error.bio}</ErrorInput>}
                <Input
                    label='Website (opcional)'
                    onChangeText={(text) => onChange('website', text)}
                    value={data.website}
                    keyboardType='default'
                    hasError={error.website !== ''}
                    containerStyle={{
                        marginTop: 16
                    }}
                />
                <Typography fontSize='small' fontWeight='semibold' color='gray' sx={{ marginBottom: error.website !== '' ? 8 : 0, }}>
                    * Caso não tenha ou se preferir, deixe em branco
                </Typography>

                {error.website !== '' && <ErrorInput>{error.website}</ErrorInput>}
            </View>

            {!isKeyboardVisible && (
                <View style={{ width: '100%', paddingHorizontal: 16, paddingBottom: 34, paddingTop: 16 }}>
                    <Button
                        title='Continuar'
                        variant='contained'
                        disabled={data.bio === ''}
                        onPress={onContinue}
                    />
                </View>
            )}
        </KeyboardAvoidingView>
    </Container>
}