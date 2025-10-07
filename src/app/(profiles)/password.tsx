
import Back from '@/components/Back';
import Button from '@/components/Button';
import { CheckListItem } from '@/components/Checklist';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Loading, { useLoading } from '@/components/Loading';
import Toast, { useToast } from '@/components/Toast';
import Typography from '@/components/Typography';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import axiosUtil from '@/utils/axios.util';
import validateUtil from '@/utils/validate.util';
import { useFocusEffect } from '@react-navigation/native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

const VALIDATION_CRITERIA = {
    hasUpperCase: 'Pelo menos uma letra maiúscula',
    hasLowerCase: 'Pelo menos uma letra minúculo',
    hasNumber: 'Pelo menos um número',
    hasSymbol: 'Pelo menos um símbolo',
    hasMinLength: 'No mínimo 8 caractéres',
}

export default function ProfileScreen () {
    const router = useRouter()
    const { isAuthenticated, session, isLoading, getSession } = useSession()
    const [user, setUser] = React.useState<User | null>(null)
    const [data, setData] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [showCurrentPassword, setShowCurrentPassword] = React.useState<boolean>(false)
    const [currentPassword, setCurrentPassword] = React.useState<string>('')
    const [passwordCriteria, setPasswordCriteria] = React.useState(validateUtil.passwordStrength(''))
    const [currentPasswordValidated, setCurrentPasswordValidated] = React.useState<boolean>(false)

    const { openToast, closeToast, ...toastProps } = useToast();
    const { openLoading, closeLoading, ...loadingProps } = useLoading();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated && !isLoading) {
        return <Redirect href='/(signin)' />;
    }

    React.useEffect(() => {
        setPasswordCriteria(validateUtil.passwordStrength(password))
    }, [password])

    React.useEffect(() => {
        setPassword('')
        setCurrentPassword('')
        setPasswordCriteria(validateUtil.passwordStrength(''))
    }, [])

    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => setUser(user))
    }, [isLoading, isAuthenticated]))

    const isCurrentPasswordValid = () => {
        if (!user?.id && !session) {
            return;
        }

        openLoading({
            open: true,
            message: 'Validando senha atual...',
        })

        axiosUtil.post({ url: '/auth/validate-password', data: { password: currentPassword }, token: session || '', process: true })
        .then(res => {
            closeLoading()
            setCurrentPasswordValidated(true)
        })
        .catch(err => {
            closeLoading()
            setCurrentPasswordValidated(false)
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
                    message: 'Ocorreu um erro ao tentar validar a senha atual. Por favor, tente novamente.',
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

    const isPasswordValid = () => Object.values(passwordCriteria).every(Boolean)

    const onSave = () => {
        if (password === '') {
            openToast({
                open: true,
                message: 'Não pode deixar a senha em branco',
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

        axiosUtil.put({ url: '/auth/me', data: { password }, token: session || '', process: true })
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
                    Alterar senha
                </Typography>
            </View>

            {!currentPasswordValidated && (
                <View>
                    <Typography fontSize={14} fontWeight='semibold' color='gray' sx={{ marginTop: 30, textAlign: 'left', width: '100%' }}>
                        Insira sua senha atual para realizar a alteração.
                    </Typography>
                    <Input
                        label='Senha atual'
                        onChangeText={(text) => setCurrentPassword(text)}
                        containerStyle={{
                            marginTop: 30,
                        }}
                        value={currentPassword}
                        keyboardType='default'
                        secureTextEntry={!showCurrentPassword}
                        endIcon={
                            <TouchableOpacity onPress={() => setShowCurrentPassword((prev) => !prev)}>
                                <Icon size={20} color={themeConfig.colors.primary} name={!showCurrentPassword ? 'IconSolarEyeLinear' : 'IconSolarEyeClosedLinear'} />
                            </TouchableOpacity>
                        }
                    />
                </View>
            )}

            {currentPasswordValidated && (
                <View>
                    <Typography fontSize={14} fontWeight='semibold' color='gray' sx={{ marginTop: 30, textAlign: 'left', width: '100%' }}>
                        Crie uma nova senha
                    </Typography>

                    <Input
                        label='Nova senha'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        keyboardType='default'
                        secureTextEntry={!showPassword}
                        containerStyle={{ marginBottom: 8, marginTop: 30 }}
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
            )}


            <View style={{ width: '100%', position: 'absolute', bottom: 34 }}>
                {!currentPasswordValidated && (
                    <Button
                        title='Validar senha atual'
                        variant='contained'
                        fullWidth
                        disabled={currentPassword === ''}
                        onPress={isCurrentPasswordValid}
                    />
                )}

                {currentPasswordValidated && (
                    <Button
                        title='Salvar'
                        variant='contained'
                        fullWidth
                        disabled={!isPasswordValid()}
                        onPress={onSave}
                    />
                )}
            </View>

            <Toast placement='bottom' {...toastProps} />
            <Loading {...loadingProps} />
        </Container>
    );
}