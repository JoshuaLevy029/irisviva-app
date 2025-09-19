import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import Typography from '@/components/Typography';
import { IconButton } from '@/components/Button';
import { Report } from '@/entities/report.entity';
import { DateTime } from 'luxon';
import themeConfig from '@/config/theme.config';

interface ReportItemProps {
    report: Report
    onOpen: (report?: Report) => () => void
}

export default ({ report, onOpen }: ReportItemProps) => {
    const dimensions = useWindowDimensions();

    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                minHeight: 50,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                width: dimensions.width - 32,
                marginBottom: 10,
                position: 'relative',
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 , padding: 16}}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Typography fontWeight='semibold' color='black'>
                                {report.name} ({report.age} anos)
                            </Typography>
                        </View>
                        <Typography fontWeight='medium' color='gray' fontSize={12}>
                            {report.occupation}
                        </Typography>
                        <Typography fontWeight='medium' color='gray' fontSize={12}>
                            Plano: {report.plan}
                        </Typography>
                        <Typography fontWeight='medium' color='gray' fontSize={12}>
                            Realizado em: {DateTime.fromISO(report.created_at).toFormat('dd/MM/yyyy HH:mm')}
                        </Typography>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 5 }}>
                        <IconButton icon='IconSolarClipboardListLinear' onPress={onOpen(report)} size={20} />
                    </View>
                </View>
            </View>
        </View>
    );
}