import Icon from '@/components/Icon'
import Typography from '@/components/Typography'
import themeConfig from '@/config/theme.config'
import { Icons } from '@/enums/icons.enum'
import { Status } from '@/types/status'
import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import CardLoader from './CardLoader'

interface StatsCardProps {
    title: string
    value: number
    icon: keyof typeof Icons
    iconColor: string
    color: string
    status: Status
}

export default ({ title, value, icon, iconColor, color, status }: StatsCardProps) => {
    const dimensions = useWindowDimensions();

    return (<View style={{ backgroundColor: 'white', borderRadius: 20, height: 70, padding: 16, boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        {status === 'loading' && (
            <CardLoader height={70} width={dimensions.width - 32} />
        )}
        {status !== 'loading' && (
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
                <View style={{ backgroundColor: color, width: 40, height: 40, borderRadius: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={icon} color={iconColor} size={24} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%', alignItems: 'center', flex: 1, gap: 4 }}>
                    <Typography fontSize='h6' fontWeight='bold'>
                        {title}
                    </Typography>
                    {status === 'ready' && (
                        <Typography fontSize='h2' color='gray'>
                            {value}
                        </Typography>
                    )}
                    {status === 'warning' && (
                        <Icon name='IconSolarDangerTriangleLinear' color={themeConfig.colors.warning.main} size={30} />
                    )}
                    {status === 'error' && (
                        <Icon name='IconSolarDangerTriangleLinear' color={themeConfig.colors.error.main} size={30} />
                    )}
                </View>
            </View>
        )}
    </View>);
};