import Back from "@/components/Back";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Input, { ErrorInput } from "@/components/Input";
import Typography from "@/components/Typography";
import axiosUtil from "@/utils/axios.util";
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

    return <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ position: 'absolute', top: 34, left: 0 }}>
            <Back />
        </View>

        <View style={{ padding: 16, width: '100%' }}>
            <Typography fontSize='h3' fontWeight='semibold' color='black' sx={{ marginBottom: 16, fontSize: 24, textAlign: 'left', color: theme.colors.primary }}>
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