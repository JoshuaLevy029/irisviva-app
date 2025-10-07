
import Back from '@/components/Back';
import { IconButton } from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import PrivatePolicyAndTermsOfUse from '@/components/PrivatePolicyAndTermsOfUse';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import Circle from '@/svg/Circle';
import { useFocusEffect } from '@react-navigation/native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native';


export default function ProfileScreen () {
    const dimensions = useWindowDimensions()
    const router = useRouter()
    const { signOut, isAuthenticated, isLoading, getSession } = useSession()
    const [user, setUser] = React.useState<User | null>(null)

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated && !isLoading) {
        return <Redirect href='/(signin)' />;
    }

    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => setUser(user))
    }, [isLoading, isAuthenticated]))

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, paddingTop: 77 }}>
            
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: 32 }}>
                <Back />
                <Typography style={{ color: '#000', fontSize: 24, marginBottom: 0, lineHeight: 24 }}>
                    Meu Perfil
                </Typography>
            </View>

            <TouchableOpacity style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 80, marginTop: 24 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 16 }}>
                    {user && user.photo && (<Image source={{ uri: `data:image/png;base64,${user?.photo}` }} style={{ width: 90, height: 90, borderRadius: 100 }} />)}
                    {user && !user.photo && (<Image source={require('@/assets/images/logo-1024.png')} style={{ width: 90, height: 90, borderRadius: 100 }} />)}

                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Typography fontWeight='bold' fontSize={14} color={themeConfig.colors.main['A700']}>Alterar foto</Typography>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, width: '100%', maxHeight: dimensions.height - 270, marginTop: 24 }}>
                <Typography fontWeight='semibold' fontSize={16} sx={{ marginBottom: 16 }}>
                    Conta
                </Typography>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 30 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/name')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    Nome
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    {user?.name}
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/name')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/email')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    E-mail
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    {user?.email}
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/email')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/contact')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    Contato
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    {user?.contact}
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/contact')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/age')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    Idade
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    {user?.age}
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/age')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/occupation')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    Profissão
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    {user?.occupation}
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/occupation')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/password')}>
                                <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                    Senha
                                </Typography>
                                <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                    **********
                                </Typography>
                            </TouchableOpacity>

                            <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/password')} color={themeConfig.colors.gray['A600']} size={16} />
                        </View>

                        {user?.role === 'professional' && (
                            <React.Fragment>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/bio')}>
                                        <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                            Bio
                                        </Typography>
                                        <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                            {user?.bio.substring(0, 25) ?? ''} {user?.bio && user?.bio.length > 50 && '...'}
                                        </Typography>
                                    </TouchableOpacity>

                                    <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/bio')} color={themeConfig.colors.gray['A600']} size={16} />
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/website')}>
                                        <Typography fontWeight='regular' fontSize={12} sx={{ margin: 0, padding: 0 }}>
                                            Website
                                        </Typography>
                                        <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0, color: 'black' }}>
                                            {user?.website  ? user?.website : 'Não informado'}
                                        </Typography>
                                    </TouchableOpacity>

                                    <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/website')} color={themeConfig.colors.gray['A600']} size={16} />
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1 }} onPress={() => router.navigate('/(profiles)/medias')}>
                                        <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0 }}>
                                            Mídias sociais
                                        </Typography>
                                    </TouchableOpacity>

                                    <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => router.navigate('/(profiles)/medias')} color={themeConfig.colors.gray['A600']} size={16} />
                                </View>
                            </React.Fragment>
                        )}
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}