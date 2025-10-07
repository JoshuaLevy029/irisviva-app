
import Button, { IconButton } from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import PrivatePolicyAndTermsOfUse from '@/components/PrivatePolicyAndTermsOfUse';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import { PlansAnalyzesPercentage } from '@/enums/plans.enum';
import Circle from '@/svg/Circle';
import { Redirect, useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { DateTime } from 'luxon';
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import bg from '@/assets/images/icon-white.png';
import formatUtil from '@/utils/format.util';
import useAuth from '@/hooks/useAuth';

export default function ProfileScreen () {
  const router = useRouter()
  const { signOut, isAuthenticated, isLoading, getSession } = useSession()
  const [user, setUser] = React.useState<User | null>(null)
  const [openPolicy, setOpenPolicy] = React.useState<boolean>(false)

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return <Redirect href='/(signin)' />
  }

  useFocusEffect(React.useCallback(() => { 
    getSession().then((user) => setUser(user))
  }, [isLoading, isAuthenticated]))

  const handleOpenPolicy = () => setOpenPolicy(true)
  const handleClosePolicy = () => setOpenPolicy(false)

  return (
    <Container style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, paddingTop: 67 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 32 }}>
          <Typography style={{ color: '#000', fontSize: 24, marginBottom: 0, lineHeight: 24 }}>
              Perfil
          </Typography>

          <View style={{ position: 'relative' }}>
              <IconButton icon='IconSolarBellLinear' onPress={() => {}} color="#000" size={24} />
              <View style={{ position: 'absolute', height: 7, width: 7, right: 3, top: 3 }}>
                  <Circle width={7} height={7} fill='#AD0909' />
              </View>
          </View>
      </View>

      <TouchableOpacity style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 80, marginTop: 24 }} onPress={() => router.navigate('/(profiles)')} >
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 16 }}>
          {user && user.photo && (<Image source={{ uri: `data:image/png;base64,${user?.photo}` }} style={{ width: 71, height: 71, borderRadius: 100 }} />)}
          {user && !user.photo && (<Image source={require('@/assets/images/logo-1024.png')} style={{ width: 71, height: 71, borderRadius: 100 }} />)}

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Typography fontWeight='semibold' fontSize={16} color='primary'>
              {user?.name}
            </Typography>
            <Typography fontWeight='regular' fontSize={12} color={themeConfig.colors.gray['A600']}>Ver perfil</Typography>
          </View>
        </View>

        <Icon name='IconSolarAltArrowRightLinear' size={25} color={themeConfig.colors.gray['A600']} />
      </TouchableOpacity>

      <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, width: '100%', marginTop: 24 }}>
        <Typography fontWeight='semibold' fontSize={16} sx={{ marginBottom: 16 }}>
          Conta
        </Typography>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }} onPress={handleOpenPolicy}>
            <Icon name='IconSolarFileTextLinear' size={16} color={themeConfig.colors.gray['A600']} />
            <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0 }}>
              Política de Privacidade
            </Typography>
          </TouchableOpacity>

          <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => {}} color={themeConfig.colors.gray['A600']} size={16} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }} onPress={() => {}}>
            <Icon name='IconSolarSettingsLinear' size={16} color={themeConfig.colors.gray['A600']} />
            <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0 }}>
              Configurações
            </Typography>
          </TouchableOpacity>

          <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => {}} color={themeConfig.colors.gray['A600']} size={16} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }} onPress={() => signOut()}>
            <Icon name='IconSolarPowerLinear' size={16} color={themeConfig.colors.gray['A600']} />
            <Typography fontWeight='semibold' fontSize={14} sx={{ margin: 0, padding: 0 }}>
              Sair
            </Typography>
          </TouchableOpacity>

          <IconButton icon='IconSolarAltArrowRightLinear' onPress={() => signOut()} color={themeConfig.colors.gray['A600']} size={16} />
        </View>
      </View>

      <Typography fontWeight='semibold' fontSize={16} color='primary' align='left' sx={{ marginTop: 24, width: '100%' }}>
        Plano atual
      </Typography>

      <View style={{ width: '100%', marginTop: 10 }}>
        <ImageBackground source={bg} resizeMode='contain' style={{ width: '100%' }}>
          <LinearGradient 
            colors={[formatUtil.alpha(themeConfig.colors.main.A400, 0.5), formatUtil.alpha(themeConfig.colors.main.A200, 0.4)]} 
            style={{ 
              padding: 16, 
              borderRadius: 16, 
              width: '100%', 
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
                <Image source={require('@/assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                <Typography fontWeight='semibold' fontSize={16} color='primary'>
                  {user?.plan ?? ''}
                </Typography>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 4, marginTop: 10 }}>
                <Typography fontWeight='bold' fontSize={12} color={themeConfig.colors.gray['A900']}>
                  Análises realizadas (mensal)
                </Typography>
                <Typography fontWeight='semibold' fontSize={12} color={themeConfig.colors.gray['A800']}>
                  {user?.reports ?? 0}
                </Typography>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 4, marginTop: 5 }}>
                <Typography fontWeight='bold' fontSize={12} color={themeConfig.colors.gray['A900']}>
                  Limite de análises (mensal)
                </Typography>
                <Typography fontWeight='semibold' fontSize={12} color={themeConfig.colors.gray['A800']}>
                  {user?.max_reports ?? 0}
                </Typography>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 4, marginTop: 5 }}>
                <Typography fontWeight='bold' fontSize={12} color={themeConfig.colors.gray['A900']}>
                  Percentual de análise
                </Typography>
                <Typography fontWeight='semibold' fontSize={12} color={themeConfig.colors.gray['A800']}>
                  {user?.analyzes_percentage ?? 0}%
                </Typography>
              </View>

              <ProgressBar 
                progress={user?.reports ? user?.reports / user?.max_reports : 0} 
                color={themeConfig.colors.main.A700} 
                style={{ marginTop: 20, height: 15, borderRadius: 20, backgroundColor: themeConfig.colors.gray['A50'] }} 
                indeterminate={user?.reports === null}
              />

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 5 }}>
                <Typography fontWeight='bold' fontSize={12} color={themeConfig.colors.gray['A900']}>
                  Próxima renovação:
                </Typography>
                <Typography fontWeight='bold' fontSize={12} color={themeConfig.colors.gray['A800']}>
                  {user?.end_date ? DateTime.fromFormat(user?.end_date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy') : 'N/A'}
                </Typography>
              </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <Button
        size='small'
        title={user?.plan === 'Gratuito' ? 'Upgrade' : 'Trocar plano'}
        icon='Ai'
        iconPosition='start'
        variant='contained'
        color={themeConfig.colors.main.A600}
        disabled={false}
        fullWidth
        onPress={() => {
          router.push('/(plans)')
        }}
        sx={{ marginTop: 20 }}
      />

      <PrivatePolicyAndTermsOfUse open={openPolicy} onClose={handleClosePolicy} />
    </Container>
  );
}