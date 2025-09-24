
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
import { Redirect } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';


export default function ProfileScreen () {
  const { signOut, isAuthenticated, isLoading, getSession } = useSession()
  const [user, setUser] = React.useState<User | null>(null)
  const [openPolicy, setOpenPolicy] = React.useState<boolean>(false)

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated && !isLoading) {
    return <Redirect href='/(signin)' />;
  }

  useFocusEffect(React.useCallback(() => { 
    getSession().then((user) => setUser(user))
  }, [isLoading, isAuthenticated]))

  const handleOpenPolicy = () => setOpenPolicy(true)
  const handleClosePolicy = () => setOpenPolicy(false)
  
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, paddingTop: 77 }}>
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

      <TouchableOpacity style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 80, marginTop: 24 }}>
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

      <PrivatePolicyAndTermsOfUse open={openPolicy} onClose={handleClosePolicy} />
    </Container>
  );
}