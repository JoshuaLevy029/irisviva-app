import React from 'react';
import _ from 'lodash';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Select from '@/components/Select';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import Input from '@/components/Input';
import useClass from '@/hooks/useClass';
import { Plan } from '@/entities/plan.entity';
import LoadingItem from '@/views/plans/LoadingItem';
import NoDataItem from '@/views/plans/NoDataItem';
import ErrorItem from '@/views/plans/ErrorItem';
import { useSession } from '@/context/auth';
import axiosUtil from '@/utils/axios.util';


export default function HomeScreen () {
  const { session, user } = useSession()
  const router = useRouter();
  const plans = useClass<{ items: Plan[] }>({ items: [] }, 'loading');
  const [search, setSearch] = React.useState('');
  
  const get = React.useCallback(_.debounce(() => {
    if (!session || !user) return

    plans.on('loading')

    axiosUtil.get({ url: '/plans', data: { search }, token: session, process: true })
    .then(res => plans.set({ items: res.data}, 'ready'))
    .catch(err => plans.set({ items: []}, 'error'))
  }, 500), [session, user, search])

  React.useEffect(() => {
    get()
  }, [get, search])

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 60, paddingHorizontal: 16 }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Planos
        </Typography>

        <Button 
          size='xsmall' 
          variant='contained'
          title='Novo Plano'
          onPress={() => {}}
        />
      </View>

      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <Input 
          placeholder='Buscar por nome do plano ou id'
          value={search} 
          onChangeText={v => setSearch(v)} 
          containerStyle={{ height: 40 }} 
          endIcon={<Icon name='IconSolarMagniferLinear' size={20} color={themeConfig.colors.gray.A700} />}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {plans.status === 'loading' && (
          <React.Fragment>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </React.Fragment>
        )}

        {plans.status === 'error' && (
          <ErrorItem />
        )}

        {plans.status === 'ready' && plans.items.length === 0 && (
          <NoDataItem />
        )}
      </ScrollView>
    </Container>
  );
}