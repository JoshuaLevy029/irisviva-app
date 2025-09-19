import _ from 'lodash';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Modal, { ModalContent } from '@/components/Modal';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import CameraFlip from '@/svg/CameraFlip';
import axiosUtil from '@/utils/axios.util';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import { Http } from '@/utils/http.util';
import formatUtil from '@/utils/format.util';
import useClass from '@/hooks/useClass';
import { Plan } from '@/entities/plan.entity';
import Carousel from 'react-native-snap-carousel';
import { PaymentSheetError, StripeProvider, useStripe } from '@stripe/stripe-react-native';
import useAuth from '@/hooks/useAuth';

const RecommendationPriority = {
    1: 'baixa',
    2: 'média',
    3: 'alta',
    4: 'muito alta',
    5: 'máxima',
}

export default function PlansScreen () {
    const dimensions = useWindowDimensions();
    const router = useRouter();
    const route = useRoute();
    const params = route.params ? (route.params as any) : {};
    const isCarousel = React.useRef(null);
    const { isAuthenticated, isLoading, session, getSession } = useSession();
    const [user, setUser] = React.useState<User | null>(null);
    const plans = useClass<{ items: Plan[] }>({ items: [] }, 'loading');
    const [selectedPeriod, setSelectedPeriod] = React.useState<'month' | 'year'>('year');
    const [publishableKey, setPublishableKey] = React.useState<string>('');
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Redirect href='/(signin)' />;
    }

    const getPublishableKey = React.useCallback(() => {
        if (!session) return

        axiosUtil.get({ url: '/setting/stripe/publishable-key', token: session || '', process: true })
        .then(res => setPublishableKey(res.data.key))
        .catch(err => router.back())
    }, [session])

    const get = React.useCallback(_.debounce(() => {
        if (!session) return

        plans.on('loading')

        axiosUtil.get({ url: '/plans/available', token: session, process: true })
        .then(res => plans.set({ items: res.data}, 'ready'))
        .catch(err => plans.set({ items: []}, 'error'))
    }, 500), [session])

    useFocusEffect(React.useCallback(() => { 
        getSession().then((user) => setUser(user))
        getPublishableKey()
        get()
     }, [isAuthenticated]))

    const setup = async (paymentIntentClientSecret: string) => {
        const { error } = await initPaymentSheet({
            merchantDisplayName: 'Iris Viva',
            paymentIntentClientSecret: paymentIntentClientSecret,
        })

        if (error) {
            console.log(error)
            openDisclaimer({
                open: true,
                title: '',
                content: (
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                    <Typography fontWeight='semibold' fontSize='h4' color='primary'>Não foi possível inicializar o pagamento. Por favor, tente novamente.</Typography>
                  </View>
                ),
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: [],
            })
            return false;
        }
        
        return true;
    }

    const present = (id: number) => async() => {
        const intent = await axiosUtil.post({ url: '/checkout/create-intent', data: { plan_id: id, period: selectedPeriod }, token: session || '', process: false });

        if (Http.failed(intent.status)) {
            openDisclaimer({
                open: true,
                title: '',
                content: (
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                    <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                        Não foi possível finalizar o pagamento. Por favor, tente novamente.
                    </Typography>
                  </View>
                ),
                closeText: 'Fechar',
                onClose: () => closeDisclaimer(),
                actions: [],
            })

            return;
        }

        const ready = await setup(intent.data.paymentIntentKey);

        if (!ready) {
            return;
        }

        const { error } = await presentPaymentSheet();

        if (error) {
            if (error.code === PaymentSheetError.Failed) {
                const deleteFailed = await axiosUtil.delete({ url: '/checkout/delete-intent', data: { subscription_id: intent.data.subscriptionId }, token: session || '', process: false });

                if (Http.failed(deleteFailed.status)) {
                    console.log(deleteFailed.data)
                }

                openDisclaimer({
                    open: true,
                    title: '',
                    content: (
                      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                            Não foi possível finalizar o pagamento. Por favor, tente novamente.
                        </Typography>
                      </View>
                    ),
                    closeText: 'Fechar',
                    onClose: () => closeDisclaimer(),
                    actions: [],
                });

                return;
            } else if (error.code === PaymentSheetError.Canceled) {
                const deleteFailed = await axiosUtil.delete({ url: '/checkout/delete-intent', data: { subscription_id: intent.data.subscriptionId }, token: session || '', process: false });

                if (Http.failed(deleteFailed.status)) {
                    console.log(deleteFailed.data)
                }

                openDisclaimer({
                    open: true,
                    title: '',
                    content: (
                      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                            Não foi possível finalizar o pagamento. Por favor, tente novamente.
                        </Typography>
                      </View>
                    ),
                    closeText: 'Fechar',
                    onClose: () => closeDisclaimer(),
                    actions: [],
                });

                return;
            }
        } else {
            const subscription = await axiosUtil.post({ 
                url: '/checkout/subscription', 
                data: { 
                    plan_id: id, 
                    subscription_id: intent.data.subscriptionId, 
                    period: selectedPeriod, 
                    reference_key: intent.data.referenceKey,
                    stripe_invoice_id: intent.data.invoiceId,
                    stripe_intent_id: intent.data.paymentIntentKey
                }, 
                token: session || '', 
                process: false 
            });

            if (Http.failed(subscription.status)) {
                openDisclaimer({
                    open: true,
                    title: '',
                    content: (
                      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
                        <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                            Não foi possível criar a assinatura. Por favor, tente novamente.
                        </Typography>
                      </View>
                    ),
                    closeText: 'Fechar',
                    onClose: () => closeDisclaimer(),
                    actions: [],
                });

                return;
            }

            router.replace('/(tabs)')
            return;
        }
    }
    
    return (
        <React.Fragment>
            <StripeProvider publishableKey={publishableKey} urlScheme='irisviva' merchantIdentifier='merchant.com.joshlevy029.iris-viva'>
                <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77, marginBottom: 32 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
                            Planos
                        </Typography>

                        <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 20 }}>
                            Escolha o plano que melhor atende às suas necessidades
                        </Typography>
                        
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginHorizontal: 16, borderRadius: 30, boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', borderWidth: 1, borderColor: themeConfig.colors.gray.A200 }}>
                            <TouchableOpacity onPress={() => setSelectedPeriod('month')} style={{ width: '50%', padding: 10, backgroundColor: selectedPeriod === 'month' ? themeConfig.colors.primary : 'transparent', borderRadius: 30 }}>
                                <Typography align='center' fontWeight='semibold' color={selectedPeriod === 'month' ? 'white' : themeConfig.colors.gray.A700} style={{  }}>Mensal</Typography>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedPeriod('year')} style={{ width: '50%', padding: 10, backgroundColor: selectedPeriod === 'year' ? themeConfig.colors.primary : 'transparent', borderRadius: 30 }}>
                                <Typography align='center' fontWeight='semibold' color={selectedPeriod === 'year' ? 'white' : themeConfig.colors.gray.A700} style={{  }}>Anual</Typography>
                            </TouchableOpacity>
                        </View>

                        {plans.status === 'loading' && (
                            <View style={{ width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size={75} color={themeConfig.colors.primary} />
                            </View>
                        )}

                        {plans.status === 'ready' && plans.items.length > 0 && (
                            <React.Fragment>
                                {/* <Carousel
                                    vertical={false}
                                    layout='stack'
                                    layoutCardOffset={40}
                                    ref={isCarousel}
                                    data={plans.items}
                                    renderItem={({ item }) => (
                                        <View 
                                            key={`plan-${item.id}`} 
                                            style={{ 
                                                width: '100%', 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'center', 
                                                alignItems: 'center', 
                                                backgroundColor: '#fff',
                                                padding: 16,
                                                borderRadius: 20,
                                                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                                                marginVertical: 20,
                                            }}
                                        >
                                            <View 
                                                style={{ 
                                                    display: 'flex', 
                                                    flexDirection: 'row', 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center', 
                                                    borderWidth: 2, 
                                                    borderColor: themeConfig.colors.warning.A500,
                                                    borderRadius: 100,
                                                    padding: 5,
                                                    marginBottom: 10,
                                                }}
                                            >
                                                <Icon name='IconSolarStarLinear' size={30} color={themeConfig.colors.warning.A500} />
                                            </View>
                                            <Typography fontWeight='semibold' fontSize='h5' color='primary' align='center' sx={{ marginBottom: 20 }}>{item.name}</Typography>

                                            <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                {item.analyzes} análises por mês
                                            </Typography>

                                            <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                {item.analyzes_percentage}% de análise da íris
                                            </Typography>

                                            <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                Compartilhamento dos resultados
                                            </Typography>

                                            <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                Histórico de análises
                                            </Typography>

                                            {user && user.role === 'professional' && item.recommendation_priority > 0 && (
                                                <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                Prioridade de recomendação: {RecommendationPriority[Number(item.recommendation_priority) as keyof typeof RecommendationPriority]}
                                                </Typography>
                                            )}

                                            {selectedPeriod === 'year' && (
                                                <Typography fontWeight='semibold' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                    {item.name === 'Premium' ? '+2' : '+1'} mês grátis
                                                </Typography>
                                            )}

                                            <Typography fontWeight='semibold' fontSize='h4' color={themeConfig.colors.main.A900} align='center' sx={{ marginTop: 20, marginBottom: 30 }}>
                                                {formatUtil.money(selectedPeriod === 'month' ? item.price_month : (item.price_year / 12))}/mês
                                            </Typography>


                                            <Button 
                                                title='Selecionar plano' 
                                                onPress={present(item.id)} 
                                                variant='contained'
                                                fullWidth
                                                size='medium'
                                                color={themeConfig.colors.primary}
                                            />
                                        </View>
                                    )}
                                    sliderWidth={dimensions.width - 32}
                                    itemWidth={dimensions.width - 64}
                                    inactiveSlideShift={0}
                                    useScrollView={true}
                                    scrollEnabled={true}
                                    contentContainerCustomStyle={{ alignItems: 'center' }}
                                /> */}
                                {plans.items.map((item) => (
                                    <View 
                                        key={`plan-${item.id}`} 
                                        style={{ 
                                            width: dimensions.width - 64, 
                                            display: 'flex', 
                                            flexDirection: 'column', 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            backgroundColor: '#fff',
                                            padding: 16,
                                            borderRadius: 20,
                                            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                                            marginBottom: 10,
                                            marginHorizontal: 16,
                                        }}
                                    >
                                        <View 
                                            style={{ 
                                                display: 'flex', 
                                                flexDirection: 'row', 
                                                justifyContent: 'center', 
                                                alignItems: 'center', 
                                                borderWidth: 2, 
                                                borderColor: themeConfig.colors.warning.A500,
                                                borderRadius: 100,
                                                padding: 5,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <Icon name='IconSolarStarLinear' size={30} color={themeConfig.colors.warning.A500} />
                                        </View>
                                        <Typography fontWeight='semibold' fontSize='h5' color='primary' align='center' sx={{ marginBottom: 20 }}>{item.name}</Typography>

                                        <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                            {item.analyzes} análises por mês
                                        </Typography>

                                        <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                            {item.analyzes_percentage}% de análise da íris
                                        </Typography>

                                        <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                            Compartilhamento dos resultados
                                        </Typography>

                                        <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                            Histórico de análises
                                        </Typography>

                                        {user && user.role === 'professional' && item.recommendation_priority > 0 && (
                                            <Typography fontWeight='regular' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                            Prioridade de recomendação: {RecommendationPriority[Number(item.recommendation_priority) as keyof typeof RecommendationPriority]}
                                            </Typography>
                                        )}

                                        {/* {selectedPeriod === 'year' && (
                                            <Typography fontWeight='semibold' fontSize='smallmedium' style={{ marginBottom: 5 }}>
                                                {item.name === 'Premium' ? '+2' : '+1'} mês grátis
                                            </Typography>
                                        )} */}

                                        <Typography fontWeight='semibold' fontSize='h4' color={themeConfig.colors.main.A900} align='center' sx={{ marginTop: 20, marginBottom: 30 }}>
                                            {formatUtil.money(selectedPeriod === 'month' ? item.price_month : (item.price_year / 12))}/mês
                                        </Typography>


                                        {user?.plan === item.name ? (
                                            <Button 
                                                title='Plano atual' 
                                                onPress={() => {}} 
                                                variant='contained'
                                                fullWidth
                                                size='medium'
                                                color={themeConfig.colors.gray.A600}
                                                disabled
                                            />
                                        ) : (
                                            <Button 
                                                title={user?.plan === 'Gratuito' ? 'Selecionar plano' : 'Fazer upgrade'} 
                                                onPress={present(item.id)} 
                                                variant='contained'
                                                fullWidth
                                                size='medium'
                                                color={themeConfig.colors.primary}
                                            />
                                        )}
                                    </View>
                                ))}
                            </React.Fragment>
                        )}
                    </ScrollView>

                    <Button 
                        title={params.justCreated ? 'Continuar como gratuito' : 'Voltar'} 
                        onPress={() => {
                            if (params.justCreated) {
                                router.push('/(tabs)')
                            } else {
                                router.back()
                            }
                        }} 
                        icon='IconSolarAltArrowLeftLinear' 
                        size='medium' 
                        color={themeConfig.colors.primary} 
                    />
                </Container>
            </StripeProvider>

            <Disclaimer {...disclaimerProps} />
        </React.Fragment>
    );
}