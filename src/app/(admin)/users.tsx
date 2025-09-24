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
import { Modal, RefreshControl, ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Input, { ErrorInput } from '@/components/Input';
import useClass from '@/hooks/useClass';
import LoadingItem from '@/views/users/LoadingItem';
import NoDataItem from '@/views/users/NoDataItem';
import ErrorItem from '@/views/users/ErrorItem';
import { useSession } from '@/context/auth';
import axiosUtil from '@/utils/axios.util';
import { ActivityIndicator } from 'react-native-paper';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import formUtil from '@/utils/form.util';
import UserItem from '@/views/users/UserItem';
import { User } from '@/entities/user.entity';
import { Paginate } from '@/types/paginate';
import { FilterProps } from '@/types/filter';
import Pagination from '@/components/Pagination';

type Store = {
  id: number
  name: string
  email: string
  age: number
  occupation: string
  contact: string
  role: 'user' | 'professional'
}

type StoreErrors = {
  name: string
  email: string
  age: string
  occupation: string
  contact: string
  role: string
}

const initialState: Store = {
  id: 0,
  name: '',
  role: 'user',
  email: '',
  age: 0,
  occupation: '',
  contact: '',
}

const initialStateErrors: StoreErrors = {
  name: '',
  email: '',
  age: '',
  occupation: '',
  contact: '',
  role: '',
}

export default function UserScreen () {
  const router = useRouter();
  const dimensions = useWindowDimensions()
  const { session, user } = useSession()
  const users = useClass<Paginate<User>>({ items: [], current: 1, last: 1, per_page: 10, total: 0 }, 'loading');
  const [filters, setFilters] = React.useState<FilterProps<{ role?: 'user' | 'professional' }>>({ page: 1, limit: 10, by: 'id', direction: 'ASC', search: '' });
  const [store, setStore] = React.useState<Store>(initialState);
  const [errors, setErrors] = React.useState<StoreErrors>(initialStateErrors);
  const [open, setOpen] = React.useState<''|'store'>('');
  const [loading, setLoading] = React.useState<''|'store'|'delete'|'status'|'open'|'type'>('');

  const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

  const onChange = (name: string, setStore: React.Dispatch<React.SetStateAction<Store>>) => (value: any) => {
    setStore((prev: Store) => ({ ...prev, [name]: value }))
    setErrors((prev: StoreErrors) => ({ ...prev, [name]: null }))
  }

  const get = React.useCallback(_.debounce(() => {
    if (!session || !user) return

    users.on('loading')
    axiosUtil.get({ url: '/users', data: { ...filters }, token: session, process: true })
    .then(res => {
      users.set(res.data, 'ready')
    })
    .catch(err => users.set({ items: [], current: 1, last: 1, per_page: 10, total: 0 }, 'error'))
  }, 500), [session, user, filters])

  React.useEffect(() => {
    get()
  }, [get, filters])

  const onStore = React.useCallback((user?: User) => () => {
    setStore({
      ...initialState,
      id: user ? user.id : 0,
      name: user ? user.name : '',
      email: user ? user.email : '',
      age: user ? user.age : 0,
      occupation: user ? user.occupation : '',
      contact: user ? user.contact : '',
      role: user ? user.role : 'user' as any,
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
      url: `/users${store.id ? `/${store.id}` : ''}`,
      data: {
        name: store.name ?? '',
        email: store.email ?? '',
        age: Number(store.age) ?? 0,
        occupation: store.occupation ?? '',
        contact: store.contact ?? '',
        role: store.role as any,
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
          email: '',
          age: '',
          occupation: '',
          contact: '',
          role: '',
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
          title: 'Erro ao salvar usuário',
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
          title: 'Erro ao salvar usuário',
          content: 'Ocorreu um erro ao salvar o usuário. Por favor, tente novamente.',
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

  const onDelete = React.useCallback((user: User) => () => {
    openDisclaimer({
      open: true,
      title: 'Confirmar de ação',
      content: `Tem certeza que deseja deletar o usuário (${user.name})?`,
      closeText: 'Fechar',
      onClose: () => closeDisclaimer(),
      actions: [
        {
          text: 'Confirmar',
          color: 'error',
          onAction: () => {
            setLoading('delete')
            axiosUtil.delete({ url: `/users/${user.id}`, token: session || '', process: true })
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
              openDisclaimer({
                open: true,
                title: '',
                content: (
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                    <Typography fontWeight='semibold' fontSize='h4' color='primary'>{err.data.message || 'Ocorreu um erro ao deletar o usuário. Por favor, tente novamente.'}</Typography>
                  </View>
                ),
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: [],
              })
            })
          }
        }
      ],
    })
  }, [session])

  const onStatus = React.useCallback((user: User) => () => {
    setLoading('status')

    axiosUtil.patch({ url: `/users/${user.id}`, token: session || '', process: true })
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
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary'>{err.data.message || 'Ocorreu um erro ao atualizar o status. Por favor, tente novamente.'}</Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      })
    })
  }, [session, user])

  const onVerified = React.useCallback((user: User) => () => {
    setLoading('status')

    axiosUtil.patch({ url: `/users/${user.id}/verified`, token: session || '', process: true })
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
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary'>{err.data.message || 'Ocorreu um erro ao atualizar a verificação. Por favor, tente novamente.'}</Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      })
    })
  }, [session, user])

  const onType = React.useCallback((user: User, type: 'user' | 'professional' | 'admin') => () => {
    setLoading('type')

    axiosUtil.patch({ url: `/users/${user.id}/type`, token: session || '', process: true, data: { type } })
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
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary'>{err.data.message || 'Ocorreu um erro ao atualizar o status. Por favor, tente novamente.'}</Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      })
    })
  }, [session, user])

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 60, paddingHorizontal: 16, paddingBottom: 100 }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Usuários
        </Typography>

        <Button 
          size='xsmall' 
          variant='contained'
          title='Novo Usuário'
          onPress={onStore(undefined)}
        />
      </View>

      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <Input 
          placeholder='Buscar pelo nome, email ou contato'
          value={filters.search} 
          onChangeText={v => setFilters((prev: FilterProps<{ role?: 'user' | 'professional' }>) => ({ ...prev, search: v }))} 
          containerStyle={{ height: 40 }} 
          endIcon={<Icon name='IconSolarMagniferLinear' size={20} color={themeConfig.colors.gray.A700} />}
        />
      </View>

      <Pagination page={filters.page} last={users.last} onPage={v => setFilters(prev => ({ ...prev, page: v }))} containerProps={{ style: { marginBottom: 8 } }} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={users.status === 'loading'}
            onRefresh={get}
          />
        }
      >
        {users.status === 'loading' && (
          <React.Fragment>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </React.Fragment>
        )}

        {users.status === 'error' && (
          <ErrorItem />
        )}

        {users.status === 'ready' && users.items.length === 0 && (
          <NoDataItem />
        )}

        {users.status === 'ready' && users.items.length > 0 && users.items.map(user => (
          <UserItem key={`user-item-${user.id}`} user={user} onEdit={onStore} onStatus={onStatus} onDelete={onDelete} onVerified={onVerified} onType={onType} />
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
              {store.id ? 'Editar Usuário' : 'Novo Usuário'}
            </Typography>

            <View style={{ marginBottom: 10 }}>
              <Input label='Nome' value={store.name} onChangeText={onChange('name', setStore)} hasError={Boolean(errors.name)} />
              {errors.name && <ErrorInput>{errors.name}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input label='Email' value={store.email} onChangeText={onChange('email', setStore)} hasError={Boolean(errors.email)} />
              {errors.email && <ErrorInput>{errors.email}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input label='Profissão/ocupação' value={store.occupation} onChangeText={onChange('occupation', setStore)} hasError={Boolean(errors.occupation)} />
              {errors.occupation && <ErrorInput>{errors.occupation}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Input label='Idade' value={`${store.age}`} onChangeText={onChange('age', setStore)} hasError={Boolean(errors.age)} keyboardType='number-pad' />
              {errors.age && <ErrorInput>{errors.age}</ErrorInput>}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Select 
                label='Prioridade de recomendação (terapeuta)' 
                placeholder='Selecione uma opção'
                value={store.role.toString()} 
                options={[
                  { label: 'Usuário', value: 'user' },
                  { label: 'Profissional', value: 'professional' },
                ]} 
                optionComponent={({ label, value }) => <Typography fontWeight='semibold' color='primary'>{label}</Typography>} 
                render={selected => [
                  { label: 'Usuário', value: 'user' },
                  { label: 'Profissional', value: 'professional' },
                ].find(item => item.value === selected)?.label || ''} 
                onChange={v => onChange('role', setStore)(v.value as string)} 
                hasError={Boolean(errors.role)}
              />
              {errors.role && <ErrorInput>{errors.role}</ErrorInput>}
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
                {loading === 'store' && 'Salvando usuário...'}
                {loading === 'delete' && 'Deletando usuário...'}
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