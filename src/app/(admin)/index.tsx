import React from 'react';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import themeConfig from '@/config/theme.config';
import useClass from '@/hooks/useClass';
import { useRouter } from 'expo-router';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import CardLoader from '@/views/home/CardLoader';
import Icon from '@/components/Icon';
import StatsCard from '@/views/home/StatsCard';
import axiosUtil from '@/utils/axios.util';
import { useSession } from '@/context/auth';
import { IconButton } from '@/components/Button';

const AdminScreen = () => {
  const dimensions = useWindowDimensions()
  const router = useRouter();
  const { session } = useSession();
  const stats = useClass<{ stats: { users: number, professionals: number, plans: number } }>({ stats: { users: 0, professionals: 0, plans: 0 } }, 'loading');

  const getStats = async () => {
    stats.on('loading')

    axiosUtil.get({ url: '/home/admin', token: session || '' })
    .then((response) => stats.set({ stats: response.data }, 'ready'))
    .catch((error) => stats.set({ stats: { users: 0, professionals: 0, plans: 0 } }, 'error'))
  }
  React.useEffect(() => {
    if (session) {
      getStats()
    }
  }, [session])

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 60 }}>
      <IconButton icon='IconSolarRestartLinear' color={themeConfig.colors.primary} size={20} onPress={getStats} style={{ position: 'absolute', top: 30, right: 30 }} />
      <View style={{ flex: 1, width: '100%', paddingHorizontal: 16, gap: 8 }}>
        <StatsCard title='Usuários' value={stats.stats.users} icon='IconSolarUsersGroupTwoRoundedLinear' iconColor='#fff' color={themeConfig.colors.main['A600']} status={stats.status} />
        <StatsCard title='Terapeutas' value={stats.stats.professionals} icon='IconSolarStethoscopeLinear' iconColor='#fff' color={themeConfig.colors.error.main} status={stats.status} />
        <StatsCard title='Planos' value={stats.stats.plans} icon='IconSolarDocumentsLinear' iconColor='#fff' color={themeConfig.colors.warning['A500']} status={stats.status} />
      </View>
    </Container>
  );
};

export default AdminScreen;