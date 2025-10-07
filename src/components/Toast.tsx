import { TouchableOpacity, View } from "react-native"
import Icon, { IconProps } from "./Icon"
import Typography, { TypographyProps } from "./Typography"
import themeConfig from "@/config/theme.config"
import React from "react"

export interface ToastProps {
    open: boolean
    message: string
    color?: string
    icon?: IconProps['name']
    iconSize?: number
    iconColor?: string
    onClose?: () => void
    placement?: 'top' | 'bottom'
    margin?: number
    textProps?: Omit<TypographyProps, 'children'>
    duration?: number
    opacity?: number
}

export default function Toast (props: ToastProps) {
    const { open, message, color = themeConfig.colors.main.main, icon, iconSize = 24, iconColor = 'white', placement = 'bottom', margin = 34, textProps = { color: 'white' }, duration = 5000, opacity = 1 } = props;
    const { style: textStyle = {}, sx: textSx = {}, ...restTextStyle } = textProps as TypographyProps;

    const onClose = () => {
        if (props.onClose) {
            props.onClose()
        }
    }

    React.useEffect(() => {
        if (open) {
            const timeout = setTimeout(() => {
                onClose()
            }, duration)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [open])

    return (
        <TouchableOpacity 
            onPress={onClose} 
            style={{ width: '100%', position: 'absolute', ...(placement === 'top' ? { top: margin } : { bottom: margin }), display: open ? 'flex' : 'none', maxWidth: '100%', opacity: opacity }}
            disabled={!open}
        >
            <View
                style={{ 
                    width: '100%', 
                    backgroundColor: color, 
                    padding: 16, 
                    borderRadius: 16, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    gap: 10,
                    maxWidth: '100%',
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, maxWidth: '100%' }}>
                    {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
                    <Typography 
                        fontWeight='semibold' 
                        fontSize={14} 
                        color='white' 
                        style={{ ...(textStyle as any), paddingRight: 32 }} 
                        sx={{ ...(textSx as any) }} 
                        {...restTextStyle}
                    >
                        {message}
                    </Typography>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export type useToastProps = ToastProps & { openToast: (props: ToastProps) => void; closeToast: () => void; }

export const useToast = (): useToastProps => {
    const [open, setOpen] = React.useState(false)
    const [message, setMessage] = React.useState<ToastProps['message']>('')
    const [color, setColor] = React.useState<ToastProps['color']>(themeConfig.colors.main.main)
    const [icon, setIcon] = React.useState<ToastProps['icon']>('IconSolarCheckCircleLinear')
    const [iconSize, setIconSize] = React.useState<ToastProps['iconSize']>(24)
    const [iconColor, setIconColor] = React.useState<ToastProps['iconColor']>('white')
    const [onClose, setOnClose] = React.useState<ToastProps['onClose']>(() => {})
    const [placement, setPlacement] = React.useState<ToastProps['placement']>('bottom')
    const [margin, setMargin] = React.useState<ToastProps['margin']>(16)
    const [textProps, setTextProps] = React.useState<ToastProps['textProps']>({ color: 'white' })
    const [duration, setDuration] = React.useState<ToastProps['duration']>(5000)
    const [opacity, setOpacity] = React.useState<ToastProps['opacity']>(1)

    const openToast = React.useCallback((props: ToastProps) => {
        setOpen(true)
        setMessage(props.message)
        setColor(props.color ?? themeConfig.colors.main.main)
        setIcon(props.icon ?? 'IconSolarCheckCircleLinear')
        setIconSize(props.iconSize ?? 24)
        setIconColor(props.iconColor ?? 'white')
        setOnClose(() => props.onClose ?? (() => {}))
        setPlacement(props.placement ?? 'bottom')
        setMargin(props.margin ?? 16)
        setTextProps(props.textProps ?? { color: 'white' })
        setDuration(props.duration ?? 5000)
        setOpacity(props.opacity ?? 1)
    }, [])

    const closeToast = React.useCallback(() => {
        setOpen(false)
        setMessage('')
        setColor(themeConfig.colors.main.main)
        setIcon('IconSolarCheckCircleLinear')
        setIconSize(24)
        setIconColor('white')
        setOnClose(() => {})
        setPlacement('bottom')
        setMargin(16)
        setTextProps({ color: 'white' })
        setDuration(5000)
        setOpacity(1)
    }, [])

    return {
        open,
        message,
        color,
        icon,
        iconSize,
        iconColor,
        onClose,
        placement,
        margin,
        textProps,
        duration,
        opacity,
        openToast,
        closeToast,
    }
}