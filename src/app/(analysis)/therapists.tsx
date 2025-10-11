import _ from 'lodash';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import useClass from '@/hooks/useClass';
import axiosUtil from '@/utils/axios.util';
import { useRouter } from 'expo-router';
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import LoadingItem from '@/views/therapists/LoadingItem';
import NoDataItem from '@/views/therapists/NoDataItem';
import ErrorItem from '@/views/therapists/ErrorItem';
import TherapistItem from '@/views/therapists/UserItem';
import Button from '@/components/Button';


export default function TherapistsScreen () {
    const router = useRouter()
    const { session } = useSession()
    const therapists = useClass<{ therapists: User[], total: number }>({ therapists: [], total: 0 }, 'loading');

    const get = React.useCallback(_.debounce(() => {
        if (!session) return

        therapists.on('loading')
        axiosUtil.get({ url: '/therapists/recommendations', data: { limit: 0 }, token: session, process: true })
        .then(res => {
            therapists.set(res.data, 'ready')
        })
        .catch(err => therapists.set({ therapists: [], total: 0 }, 'error'))
    }, 500), [session])

    React.useEffect(() => {
        get()
    }, [get])

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 60, paddingHorizontal: 16, paddingBottom: 100 }}>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Button title='Voltar' icon='IconSolarAltArrowLeftLinear' onPress={() => router.back()} sx={{ marginBottom: 10, paddingHorizontal: 0, paddingVertical: 0 }} />
            </View>
            
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Typography fontWeight='semibold' fontSize='h3' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
                    Terapeutas Recomendados
                </Typography>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={therapists.status === 'loading'}
                    onRefresh={get}
                  />
                }
            >
                {therapists.status === 'loading' && (
                    <React.Fragment>
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                    </React.Fragment>
                    )}

                    {therapists.status === 'error' && (
                    <ErrorItem />
                    )}

                    {therapists.status === 'ready' && therapists.therapists.length === 0 && (
                    <NoDataItem />
                    )}

                    {therapists.status === 'ready' && therapists.therapists.length > 0 && therapists.therapists.map(therapist => (
                        <TherapistItem key={`therapist-item-${therapist.id}`} user={therapist} />
                    ))}
            </ScrollView>
        </Container>
    );
}