
import Back from '@/components/Back';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Loading, { useLoading } from '@/components/Loading';
import Toast, { useToast } from '@/components/Toast';
import Typography from '@/components/Typography';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import axiosUtil from '@/utils/axios.util';
import { useFocusEffect } from '@react-navigation/native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';


export default function ProfileScreen () {
    const router = useRouter()
    const { isAuthenticated, session, isLoading, getSession } = useSession()
    const [user, setUser] = React.useState<User | null>(null)
    const [data, setData] = React.useState<string>('')

    const { openToast, closeToast, ...toastProps } = useToast();
    const { openLoading, closeLoading, ...loadingProps } = useLoading();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated && !isLoading) {
        return <Redirect href='/(signin)' />;
    }

    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => {
            setUser(user)
            setData(user?.contact ?? '')
        })
    }, [isLoading, isAuthenticated]))

    const onSave = () => {
        if (data === '') {
            openToast({
                open: true,
                message: 'Não pode deixar o contato em branco',
                color: themeConfig.colors.error.main,
                iconColor: 'white',
                icon: 'IconSolarDangerTriangleLinear',
                textProps: {
                    color: 'white',
                },
                opacity: .9,
                onClose: () => {
                    console.log('closeToast')
                    closeToast()
                }
            })
            return;
        }

        if (!user?.id && !session) {
            return;
        }

        openLoading({
            open: true,
            message: 'Atualizando...',
        })

        axiosUtil.put({ url: '/auth/me', data: { contact: data }, token: session || '', process: true })
        .then(res => {
            closeLoading()
            openToast({
                open: true,
                message: res.data.message,
                color: themeConfig.colors.success.main,
                iconColor: 'white',
                icon: 'IconSolarChatRoundCheckLinear',
                textProps: {
                    color: 'white',
                },
                opacity: .9,
                onClose: () => {
                    closeToast()
                    router.navigate({
                        pathname: user?.role === 'admin' ? '/(admin)/profile' : '/(tabs)/profile',
                        params: {}
                    })
                }
            })
        })
        .catch(err => {
            closeLoading()
            console.log(err.data.errors)

            if (err.data.message) {
                openToast({
                    open: true,
                    message: err.data.message,
                    color: themeConfig.colors.error.main,
                    iconColor: 'white',
                    icon: 'IconSolarDangerTriangleLinear',
                    textProps: {
                        color: 'white',
                    },
                    opacity: .9,
                    onClose: () => closeToast()
                })
            } else {
                openToast({
                    open: true,
                    message: 'Ocorreu um erro ao tentar atualizar. Por favor, tente novamente.',
                    color: themeConfig.colors.error.main,
                    iconColor: 'white',
                    icon: 'IconSolarDangerTriangleLinear',
                    textProps: {
                        color: 'white',
                    },
                    opacity: .9,
                    onClose: () => closeToast()
                })
            }
        })
    }

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, paddingTop: 77 }}>
            
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: 32 }}>
                <Back />
                <Typography style={{ color: '#000', fontSize: 24, marginBottom: 0, lineHeight: 24 }}>
                    Editar Contato
                </Typography>
            </View>

            <Input
                label='Contato'
                onChangeText={(text) => setData(text)}
                value={data}
                containerStyle={{
                    marginTop: 30,
                }}
                keyboardType='number-pad'
                mask='(99) 99999-9999'
                useRawValue={false}
                isMasked
            />

            <View style={{ width: '100%', position: 'absolute', bottom: 34 }}>
                <Button
                    title='Salvar'
                    variant='contained'
                    fullWidth
                    disabled={data === ''}
                    onPress={onSave}
                />
            </View>

            <Toast placement='bottom' {...toastProps} />
            <Loading {...loadingProps} />
        </Container>
    );
}