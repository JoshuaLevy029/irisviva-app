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
import { View } from "react-native";
import * as yup from 'yup';

const validation = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    age: yup.number().min(1, 'Idade é obrigatória').required('Idade é obrigatória'),
    occupation: yup.string().required('Ocupação ou profissão é obrigatória'),
    contact: yup
    .mixed()
    .required('Contato é obrigatório')
    .test('is-valid-contact', 'Contato inválido', (value) => {
        if (!value) return false
        if (typeof value === 'string') return value.length > 0

        //brazilian phone number
        if (!/^\(\d{2}\)\s?\d{5}-\d{4}$/.test(`${value}`)) return false

        return true
    })
})

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const [data, setData] = React.useState<{ name: string, age: number | null, occupation: string, contact: string }>({ name: '', age: null, occupation: '', contact: '' })
    const [error, setError] = React.useState({
        name: params && params.errors && params.errors.name ? params.errors.name : '',
        age: params && params.errors && params.errors.age ? params.errors.age : '',
        occupation: params && params.errors && params.errors.occupation ? params.errors.occupation : '',
        contact: params && params.errors && params.errors.contact ? params.errors.contact : '',
    })

    const onChange = (key: string, value: any) => {
        setData(prev => ({ ...prev, [key]: value }))
        setError(prev => ({ ...prev, [key]: '' }))
    }

    const onContinue = () => {
        validation.validate(data, { abortEarly: false })
        .then(async (validate) => {
            router.push({
                pathname: '/(signup)/password',
                params: {
                    ...route.params,
                    ...data,
                },
            })
        })
        .catch((err) => {
            if (err.errors && err.errors.length > 0) {
                console.log(err.errors, data)
                let errors: { name: string, age: string, occupation: string, contact: string } = { name: '', age: '', occupation: '', contact: '' }

                err.errors.forEach((error: string) => {
                    if (error.toLowerCase().includes('nome')) errors.name = error
                    if (error.toLowerCase().includes('idade')) errors.age = error
                    if (error.toLowerCase().includes('ocupação')) errors.occupation = error
                    if (error.toLowerCase().includes('contato')) errors.contact = error
                })

                setError(errors)
            }
        })
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign2 />

        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back color='white' />
        </View>

        <View style={{ padding: 16 }}>
            <Typography fontSize='h3' fontWeight='semibold' color='primary' sx={{ marginBottom: 5, fontSize: 24, textAlign: 'center' }}>
                Vamos criar uma conta
            </Typography>

            <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginBottom: 24, paddingHorizontal: 20, textAlign: 'center' }}>
                Nos conte mais um pouco sobre você
            </Typography>

            <Input
                label='Como podemos te chamar?'
                onChangeText={(text) => onChange('name', text)}
                value={data.name}
                keyboardType='default'
                hasError={error.name !== ''}
                containerStyle={{
                    marginBottom: error.name !== '' ? 8 : 0,
                }}
            />
            {error.name !== '' && <ErrorInput>{error.name}</ErrorInput>}

            <Input
                label='Qual sua idade?'
                onChangeText={(text) => onChange('age', Number(`${text}`) ?? null)}
                value={data.age ? data.age.toString() : ''}
                keyboardType='number-pad'
                hasError={error.age !== ''}
                containerStyle={{
                    marginBottom: error.age !== '' ? 8 : 0,
                    marginTop: 16
                }}
            />
            {error.age !== '' && <ErrorInput>{error.age}</ErrorInput>}

            <Input
                label='Qual sua ocupação ou profissão?'
                onChangeText={(text) => onChange('occupation', text)}
                value={data.occupation}
                keyboardType='default'
                hasError={error.occupation !== ''}
                containerStyle={{
                    marginBottom: error.occupation !== '' ? 8 : 0,
                    marginTop: 16
                }}
            />
            {error.occupation !== '' && <ErrorInput>{error.occupation}</ErrorInput>}

            <Input
                label='Qual seu celular?'
                onChangeText={(text) => onChange('contact', text)}
                value={data.contact}
                keyboardType='number-pad'
                mask='(99) 99999-9999'
                useRawValue={false}
                isMasked
                hasError={error.contact !== ''}
                containerStyle={{
                    marginBottom: error.contact !== '' ? 8 : 0,
                    marginTop: 16
                }}
            />
            {error.contact !== '' && <ErrorInput>{error.contact}</ErrorInput>}
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