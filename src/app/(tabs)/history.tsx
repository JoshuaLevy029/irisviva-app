import _ from 'lodash';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { useSession } from '@/context/auth';
import { Report } from '@/entities/report.entity';
import useClass from '@/hooks/useClass';
import { FilterProps } from '@/types/filter';
import { Paginate } from '@/types/paginate';
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import axiosUtil from '@/utils/axios.util';
import Pagination from '@/components/Pagination';
import LoadingItem from '@/views/reports/LoadingItem';
import ErrorItem from '@/views/reports/ErrorItem';
import NoDataItem from '@/views/reports/NoDataItem';
import ReportItem from '@/views/reports/ReportItem';
import { useRouter } from 'expo-router';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/Icon';

export default function HistoryScreen () {
  const router = useRouter()
  const { session } = useSession()
  const reports = useClass<Paginate<Report>>({ items: [], current: 1, last: 1, per_page: 10, total: 0 }, 'loading');
  const [filters, setFilters] = React.useState<FilterProps<{  }>>({ page: 1, limit: 10, by: 'created_at', direction: 'DESC', search: '' });

  const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer();

  const get = React.useCallback(_.debounce(() => {
    if (!session) return

    reports.on('loading')
    axiosUtil.get({ url: '/analysis', data: { ...filters }, token: session, process: true })
    .then(res => {
      reports.set(res.data, 'ready')
      console.log(res.data)
    })
    .catch(err => reports.set({ items: [], current: 1, last: 1, per_page: 10, total: 0 }, 'error'))
  }, 500), [session, filters])

  React.useEffect(() => {
    get()
  }, [get, filters, session])

  const onOpen = React.useCallback((report?: Report) => () => {
    if (!session) return

    axiosUtil.get({ url: `/analysis/${report?.id}`, token: session, process: true })
    .then(res => {
      router.navigate({
        pathname: '/(analysis)/report',
        params: { result: JSON.stringify(res.data.report), name: res.data.name, age: res.data.age, occupation: res.data.occupation, gender: res.data.gender }
      })
    })
    .catch(err => {
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>{err.data.message || 'Não foi possível abrir o relatório'}</Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      })
    })
  }, [session])

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 60, paddingHorizontal: 16 }}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Typography style={{ color: '#000', fontSize: 24, marginBottom: 0, lineHeight: 24 }}>
              Relatórios
        </Typography>
      </View>

      <Pagination page={filters.page} last={reports.last} onPage={v => setFilters(prev => ({ ...prev, page: v }))} containerProps={{ style: { marginBottom: 16, marginTop: 10 } }} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={reports.status === 'loading'}
            onRefresh={get}
          />
        }
      >
        {reports.status === 'loading' && (
          <React.Fragment>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </React.Fragment>
        )}

        {reports.status === 'error' && (
          <ErrorItem />
        )}

        {reports.status === 'ready' && reports.items.length === 0 && (
          <NoDataItem />
        )}

        {reports.status === 'ready' && reports.items.length > 0 && reports.items.map(report => (
          <ReportItem key={`report-item-${report.id}`} report={report} onOpen={onOpen} />
        ))}
      </ScrollView>

      <Disclaimer {...disclaimerProps} />
    </Container>
  );
}