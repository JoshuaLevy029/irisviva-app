import themeConfig from '@/config/theme.config'
import { Text, View, ViewProps, ViewStyle } from 'react-native'
import Icon from './Icon'

interface CheckListItemProps extends ViewProps {
    title: string
    checked: boolean
}

export const CheckListItem = ({ checked, title, style = {}, ...props }: CheckListItemProps) => {
    return (
        <View
            style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5, ...(style as ViewStyle) }}
            {...props}
        >
            <Icon size={20} name={checked ? 'IconSolarCheckCircleLinear' : 'IconSolarCloseCircleLinear'} color={checked ? themeConfig.colors.success.main : themeConfig.colors.gray.A400} />
            <Text
                style={{
                    fontFamily: 'Quicksand_600SemiBold',
                    fontSize: 13,
                    lineHeight: 13,
                    fontWeight: '600',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: checked ? themeConfig.colors.success.main : themeConfig.colors.gray.A400,
                }}
            >
                {title}
            </Text>
        </View>
    )
}
