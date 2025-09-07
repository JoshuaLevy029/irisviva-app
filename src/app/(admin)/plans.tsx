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
import { Modal, ScrollView, useWindowDimensions, View } from 'react-native';
import Input, { ErrorInput } from '@/components/Input';
import useClass from '@/hooks/useClass';
import { Plan } from '@/entities/plan.entity';
import LoadingItem from '@/views/plans/LoadingItem';
import NoDataItem from '@/views/plans/NoDataItem';
import ErrorItem from '@/views/plans/ErrorItem';
import { useSession } from '@/context/auth';
import axiosUtil from '@/utils/axios.util';
import { ActivityIndicator } from 'react-native-paper';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import formUtil from '@/utils/form.util';
import PlanItem from '@/views/plans/PlanItem';

type Store = {
  id: number
  name: string
  analyzes: number
  price_month: number
  price_year: number
  recommendation_priority: 0 | 1 | 2 | 3 | 4 | 5
}

type StoreErrors = {
  name: string
  analyzes: string
  price_month: string
  price_year: string
  recommendation_priority: string
}

const initialState: Store = {
  id: 0,
  name: '',
  analyzes: 3,
  price_month: 0,
  price_year: 0,
  recommendation_priority: 0,
}

const initialStateErrors: StoreErrors = {
  name: '',
  analyzes: '',
  price_month: '',
  price_year: '',
  recommendation_priority: '',
}

export default function HomeScreen () {
  const router = useRouter();
  const dimensions = useWindowDimensions()
  const { session, user } = useSession()
  const plans = useClass<{ items: Plan[] }>({ items: [] }, 'loading');
  const [search, setSearch] = React.useState('');
  const [store, setStore] = React.useState<Store>(initialState);
  const [errors, setErrors] = React.useState<StoreErrors>(initialStateErrors);
  const [open, setOpen] = React.useState<''|'store'>('');
  const [loading, setLoading] = React.useState<''|'store'|'delete'|'status'|'open'>('');

  const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

  const onChange = (name: string, setStore: React.Dispatch<React.SetStateAction<Store>>) => (value: any) => {
    setStore((prev: Store) => ({ ...prev, [name]: value }))
    setErrors((prev: StoreErrors) => ({ ...prev, [name]: null }))
  }

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

  const onStore = React.useCallback((plan?: Plan) => () => {
    setStore({
      ...initialState,
      id: plan ? plan.id : 0,
      name: plan ? plan.name : '',
      analyzes: plan ? plan.analyzes : 3,
      price_month: plan ? plan.price_month * 100 : 0,
      price_year: plan ? plan.price_year * 100 : 0,
      recommendation_priority: plan ? plan.recommendation_priority : 0,
    })
    setErrors(initialStateErrors)
    setOpen('store')
  }, [])

  const onDismiss = React.useCallback(() => {
    setOpen('')
    setStore(initialState)
    setErrors(initialStateErrors)
  }, [])

  const onSave = React.useCallback(() => {
    setLoading('store')

    axiosUtil.raw({
      method: store.id ? 'PUT' : 'POST',
      url: `/plans${store.id ? `/${store.id}` : ''}`,
      data: {
        name: store.name ?? '',
        analyzes: Number(store.analyzes) ?? 3,
        price_month: (Number(store.price_month) ?? 0) / 100,
        price_year: (Number(store.price_year) ?? 0) / 100,
        recommendation_priority: Number(store.recommendation_priority) ?? 0,
      },
      token: session || '',
      process: true,
    })
    .then(res => {
      onDismiss()
      setLoading('')
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary'>{res.data.message}</Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
        sx: {
          zIndex: 9999,
        }
      })
      get()
    })
    .catch(err => {
      setLoading('')
      console.log(err.data.errors)

      if (err.data.errors && ((Array.isArray(err.data.errors) && err.data.errors.length > 0) || (typeof err.data.errors === 'object' && Object.keys(err.data.errors).length > 0))) {
        let _errors: StoreErrors = {
          name: '',
          analyzes: '',
          price_month: '',
          price_year: '',
          recommendation_priority: '',
        }

        Object.keys(err.data.errors).forEach((key: string) => {
          console.log(key, err.data.errors[key][0])
          _errors[key as keyof StoreErrors] = err.data.errors[key][0]
        })

        setErrors(_errors)
      } else if (err.data.message) {
        setOpen('')
        openDisclaimer({
          open: true,
          title: 'Erro ao salvar plano',
          content: err.data.message,
          closeText: 'Fechar',
          onClose: () => {
            closeDisclaimer()
            setOpen('store')
          },
          actions: [],
        })
      } else {
        setOpen('')
        openDisclaimer({
          open: true,
          title: 'Erro ao salvar plano',
          content: 'Ocorreu um erro ao salvar o plano. Por favor, tente novamente.',
          closeText: 'Fechar',
          onClose: () => {
            closeDisclaimer()
            setOpen('store')
          },
          actions: [],
        })
      }
    })
  }, [store, errors, session, user])

  const onDelete = React.useCallback((plan: Plan) => () => {
    setLoading('delete')
  }, [])

  const onStatus = React.useCallback((plan: Plan) => () => {
    setLoading('status')
  }, [])

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
          onPress={onStore(undefined)}
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

        {plans.status === 'ready' && plans.items.length > 0 && plans.items.map(plan => (
          <PlanItem key={`plan-item-${plan.id}`} plan={plan} onEdit={onStore} onStatus={onStatus} onDelete={onDelete} />
        ))}
      </ScrollView>

      <Modal 
        visible={open === 'store'} 
        onDismiss={onDismiss}
        transparent={true}
        statusBarTranslucent={true}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 16, marginHorizontal: 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
            <Typography fontWeight='semibold' color='primary' sx={{ textAlign: 'center', fontSize: 18, marginBottom: 10 }}>
              {store.id ? 'Editar Plano' : 'Novo Plano'}
            </Typography>

            <View style={{ marginBottom: 10 }}>
              <Input label='Título do plano' value={store.name} onChangeText={onChange('name', setStore)} hasError={Boolean(errors.name)} />
              {errors.name && <ErrorInput>{errors.name}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input label='Limite de análises por mês' value={`${store.analyzes}`} onChangeText={onChange('analyzes', setStore)} hasError={Boolean(errors.analyzes)} keyboardType='number-pad' />
              {errors.analyzes && <ErrorInput>{errors.analyzes}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input 
                label='Preço mensal' 
                value={`${store.price_month}`} 
                onChangeText={onChange('price_month', setStore)} 
                hasError={Boolean(errors.price_month)} 
                keyboardType='numeric' 
                type='currency'
                isMasked
                options={{
                  prefix: 'R$ ',
                  decimalSeparator: ',',
                  groupSeparator: '.',
                  precision: 2,
                }}
              />
              {errors.price_month && <ErrorInput>{errors.price_month}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input 
                label='Preço anual' 
                value={`${store.price_year}`} 
                onChangeText={onChange('price_year', setStore)} 
                hasError={Boolean(errors.price_year)} 
                keyboardType='numeric' 
                type='currency'
                isMasked
                options={{
                  prefix: 'R$ ',
                  decimalSeparator: ',',
                  groupSeparator: '.',
                  precision: 2,
                }}
              />
              {errors.price_year && <ErrorInput>{errors.price_year}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Select 
                label='Prioridade de recomendação (terapeuta)' 
                placeholder='Selecione uma opção'
                value={store.recommendation_priority.toString()} 
                options={[
                  { label: 'Nenhuma prioridade', value: '0' },
                  { label: 'Prioridade baixa', value: '1' },
                  { label: 'Prioridade média', value: '2' },
                  { label: 'Prioridade alta', value: '3' },
                  { label: 'Prioridade muito alta', value: '4' },
                  { label: 'Prioridade máxima', value: '5' }]} 
                optionComponent={({ label, value }) => <Typography fontWeight='semibold' color='primary'>{label}</Typography>} 
                render={selected => [
                  { label: 'Nenhuma prioridade', value: '0' },
                  { label: 'Prioridade baixa', value: '1' },
                  { label: 'Prioridade média', value: '2' },
                  { label: 'Prioridade alta', value: '3' },
                  { label: 'Prioridade muito alta', value: '4' },
                  { label: 'Prioridade máxima', value: '5' },
                ].find(item => item.value === selected)?.label || ''} 
                onChange={v => onChange('recommendation_priority', setStore)(v.value)} 
                hasError={Boolean(errors.recommendation_priority)}
              />
              {errors.recommendation_priority && <ErrorInput>{errors.recommendation_priority}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Button title='Salvar' variant='contained' size='small' onPress={onSave} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Button title='Cancelar' variant='outlined' color='error' size='small' onPress={onDismiss} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={loading !== ''} onDismiss={() => setLoading('')} transparent={true} statusBarTranslucent={true}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 16, marginHorizontal: 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <ActivityIndicator size={75} color={themeConfig.colors.main['A700']} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary'>
                {loading === 'store' && 'Salvando plano...'}
                {loading === 'delete' && 'Deletando plano...'}
                {loading === 'status' && 'Atualizando status...'}
                {loading === 'open' && 'Abrindo modal...'}
              </Typography>
            </View>
          </View>
        </View>
      </Modal>

      <Disclaimer {...disclaimerProps} />
    </Container>
  );
}