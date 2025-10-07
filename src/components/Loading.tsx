import React from "react"
import Typography, { TypographyProps } from "./Typography"
import themeConfig from "@/config/theme.config"
import { Modal, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"

export interface LoadingProps {
    open: boolean
    message: string | React.ReactNode,
    indicatorSize?: number
    indicatorColor?: string
    textProps?: Omit<TypographyProps, 'children'>
    onClose?: () => void
}

export default function Loading (props: LoadingProps) {
    const { open, message, indicatorSize = 75, indicatorColor = themeConfig.colors.main['A900'], textProps = { fontWeight: 'semibold', fontSize: 'h4', color: themeConfig.colors.main['A700'] } } = props;

    const onClose = () => {
        if (props.onClose) {
            props.onClose()
        }
    }

    
    return (
        <Modal visible={open} onDismiss={onClose} transparent={true} statusBarTranslucent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.15)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 16, marginHorizontal: 10, alignSelf: 'stretch' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                        <ActivityIndicator size={indicatorSize} color={indicatorColor} />
                        {message && typeof message === 'string' && (
                            <Typography fontWeight='semibold' fontSize='h4' color={themeConfig.colors.main['A700']} {...textProps}>
                                {message}
                            </Typography>
                        )}
                        {message && typeof message !== 'string' && message}
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export type useLoadingProps = LoadingProps & { openLoading: (props: LoadingProps) => void; closeLoading: () => void; }

export const useLoading = (): useLoadingProps => {
    const [open, setOpen] = React.useState<boolean>(false)
    const [message, setMessage] = React.useState<string | React.ReactNode>('')
    const [indicatorSize, setIndicatorSize] = React.useState<number>(75)
    const [indicatorColor, setIndicatorColor] = React.useState<string>(themeConfig.colors.main['A900'])
    const [textProps, setTextProps] = React.useState<Omit<TypographyProps, 'children'>>(() => ({ fontWeight: 'semibold', fontSize: 'h4', color: themeConfig.colors.main['A700'] }))
    const [onClose, setOnClose] = React.useState<() => void>(() => {})

    const openLoading = React.useCallback((props: LoadingProps) => {
        setOpen(true)
        setMessage(props.message)
        setIndicatorSize(props.indicatorSize ?? 75)
        setIndicatorColor(props.indicatorColor ?? themeConfig.colors.main['A900'])
        setTextProps(props.textProps ?? { fontWeight: 'semibold', fontSize: 'h4', color: themeConfig.colors.main['A700'] })
        setOnClose(() => props.onClose ?? (() => {}))
    }, [])

    const closeLoading = React.useCallback(() => {
        setOpen(false)
        setMessage('')
        setIndicatorSize(75)
        setIndicatorColor(themeConfig.colors.main['A900'])
        setTextProps({ fontWeight: 'semibold', fontSize: 'h4', color: themeConfig.colors.main['A700'] })
        setOnClose(() => {})
    }, [])

    return {
        open,
        message,
        indicatorSize,
        indicatorColor,
        textProps,
        onClose,
        openLoading,
        closeLoading,
    }
}