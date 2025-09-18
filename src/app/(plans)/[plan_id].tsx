import _ from 'lodash';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Modal, { ModalContent } from '@/components/Modal';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import CameraFlip from '@/svg/CameraFlip';
import axiosUtil from '@/utils/axios.util';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import { Http } from '@/utils/http.util';
import formatUtil from '@/utils/format.util';
import useClass from '@/hooks/useClass';
import { Plan } from '@/entities/plan.entity';
import Carousel from 'react-native-snap-carousel';


export default function PlansScreen () {
    const params = useLocalSearchParams<{ plan_id: string, period: 'month' | 'year' }>()
    const dimensions = useWindowDimensions();
    const router = useRouter();
    const route = useRoute();
    const { isAuthenticated, session, user: sessionUser } = useSession();
    const [user, setUser] = React.useState<User|null>(null);
    const plan = useClass<{ item: Plan }>({ item: {}  as Plan}, 'loading');

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

    if (!isAuthenticated || !sessionUser) {
        return <Redirect href='/(signin)' />;
    }

    const get = React.useCallback(_.debounce(() => {
        if (!session || !user) return

        plan.on('loading')

        axiosUtil.get({ url: `/plans/available/${params.plan_id}`, token: session, process: true })
        .then(res => plan.set({ item: res.data}, 'ready'))
        .catch(err => plan.set({ item: {} as Plan}, 'error'))
    }, 500), [session, user])

    React.useEffect(() => {
        setUser(JSON.parse(sessionUser));
    }, [sessionUser]);

    React.useEffect(() => {
        if (!params.plan_id || !params.period) {
            router.back()
        }

        get()
    }, [get, user, session, params])
    
    return (
        <React.Fragment>
            <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 30, marginBottom: 32 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A900'], marginBottom: 10 }}>
                        Carrinho
                    </Typography>

                    <View style={{ width: dimensions.width - 32, padding: 16, borderRadius: 15, boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', marginBottom: 20 }}>
                        <Typography fontWeight='semibold' fontSize='h5' align='left' sx={{ color: themeConfig.colors.main['A900'], marginBottom: 10 }}>
                            Plano: {plan.item?.name} {params.period === 'month' ? 'Mensal' : 'Anual'}
                        </Typography>
                    </View>
                </ScrollView>

                <Button title='Voltar' onPress={() => router.back()} icon='IconSolarAltArrowLeftLinear' size='medium' color={themeConfig.colors.primary} />
            </Container>

            <Disclaimer {...disclaimerProps} />
        </React.Fragment>
    );
}