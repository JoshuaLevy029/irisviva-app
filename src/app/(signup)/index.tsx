import Back from "@/components/Back";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Input, { ErrorInput } from "@/components/Input";
import Typography from "@/components/Typography";
import axiosUtil from "@/utils/axios.util";
import WaveSign from "@/views/WaveSign";
import { useRoute, useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import * as yup from 'yup';

export default function Page () {
    const theme = useTheme()
    const router = useRouter()
    const route = useRoute()

    const params = route.params ? (route.params as any) : {}

    const onContinue = (type: 'user' | 'professional') => () => {
        router.push({
            pathname: '/(signup)/information',
            params: {
                ...route.params,
                role: type,
            },
        })
    }

    return <Container style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <WaveSign />

        <View style={{ width: '100%', paddingHorizontal: 0, position: 'absolute', top: 34 }}>
            <Back color='white' />
        </View>

        <View style={{ paddingHorizontal: 32, width: '100%' }}>
            <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginTop: 10, marginBottom: 24, paddingHorizontal: 32, textAlign: 'center' }}>
                Nos conte o tipo de conta que você quer criar
            </Typography>

            <View style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Button
                    title='Usuário'
                    variant='outlined'
                    disabled={false}
                    fullWidth
                    onPress={onContinue('user')}
                    size='large'
                />

                <Button
                    title='Terapeuta'
                    variant='outlined'
                    disabled={false}
                    fullWidth
                    onPress={onContinue('professional')}
                    size='large'
                />
            </View>
        </View>
    </Container>
}