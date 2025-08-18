import themeConfig from "@/config/theme.config"
import formatUtil from "@/utils/format.util"
import { useTheme } from "@react-navigation/native"
import React from "react"
import { Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"
import Icon, { IconProps } from "./Icon"

export interface ButtonProps extends TouchableOpacityProps {
    title?: React.ReactNode | string
    titleProps?: TextProps
    sx?: ViewStyle
    variant?: 'contained' | 'outlined' | 'text'
    size?: 'small' | 'medium' | 'large'
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' | string
    textColor?: string
    fullWidth?: boolean
    children?: React.ReactNode
}

export default (props: ButtonProps) => {
    const { 
        title,
        titleProps,
        sx = {},
        style = {},
        variant = 'text',
        color = 'primary',
        size = 'medium',
        fullWidth = false,
        onPress,
        disabled = false,
        textColor: rawTextColor,
        children,
        ...buttonResProps
    } = props
    const { style: textStyle = {}, ...restTitleProps } = titleProps ?? {} as TextProps
    const disableOpacity = .5

    const bgColor = React.useMemo(() => {
        if (variant === 'text') {
            return 'transparent'
        } else if (variant === 'contained') {
            let _bgcolor = themeConfig.colors.primary

            if (color === 'primary') {
                _bgcolor = themeConfig.colors.primary
            } else if (color === 'secondary' || color === 'error' || color === 'success' || color === 'warning' || color === 'info') {
                _bgcolor = themeConfig.colors[color]['main']
            } else if (color) {
                _bgcolor = color
            }

            if (disabled) {
                _bgcolor = formatUtil.alpha(_bgcolor, disableOpacity)
            }

            return _bgcolor
        } else if (variant === 'outlined') {
            if (disabled) {
                return formatUtil.alpha('#eeeeee', disableOpacity)
            }

            return 'transparent'
        }

        return 'transparent'
    }, [variant, color, style, sx, disabled])

    const textColor = React.useMemo(() => {
        let _textColor = themeConfig.colors.main.main

        if (rawTextColor) {
            _textColor = rawTextColor
            return _textColor
        } else if (variant === 'text') {
            if (color === 'primary') {
                _textColor = themeConfig.colors.primary
            } else if (color === 'secondary' || color === 'error' || color === 'success' || color === 'warning' || color === 'info') {
                _textColor = themeConfig.colors[color]['main']
            } else if (color) {
                _textColor = color
            }
        } else if (variant === 'outlined') {
            if (color === 'primary') {
                _textColor = themeConfig.colors.primary
            } else if (color === 'secondary' || color === 'error' || color === 'success' || color === 'warning' || color === 'info') {
                _textColor = themeConfig.colors[color]['main']
            } else if (color) {
                _textColor = color
            }
        } else if (variant === 'contained') {
            _textColor = themeConfig.colors.text
        }

        /* if (disabled) {
            _textColor = formatUtil.alpha(_textColor, disableOpacity)
        } */

        return _textColor
    }, [bgColor, variant, color, style, sx,  disabled, rawTextColor])

    const buildStyleView = React.useMemo(() => {
        let styles: ViewStyle = {
            borderRadius: 31,
            paddingHorizontal: size === 'small' ? 12 : (size === 'medium' ? 24 : 26),
            paddingVertical: size === 'small' ? 6 : (size === 'medium' ? 12 : 14),
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: bgColor,
            cursor: 'pointer',
        }

        if (fullWidth) {
            styles.width = '100%'
        }

        if (variant === 'text') {
            styles.borderRadius = 0
            styles.borderColor = 'none'
            styles.borderWidth = 0
            styles.padding = 0
            styles.height = 'auto'
        } else if (variant === 'outlined') {
            let _bgcolor = themeConfig.colors.primary

            if (color === 'primary') {
                _bgcolor = themeConfig.colors.primary
            } else if (color === 'secondary' || color === 'error' || color === 'success' || color === 'warning' || color === 'info') {
                _bgcolor = themeConfig.colors[color]['main']
            } else if (color) {
                _bgcolor = color
            }

            if (disabled) {
                _bgcolor = formatUtil.alpha(_bgcolor, disableOpacity)
            }

            styles.borderColor = _bgcolor
            styles.borderWidth = 1
        } else if (variant === 'contained') {
            let _bgcolor = themeConfig.colors.primary

            if (color === 'primary') {
                _bgcolor = themeConfig.colors.primary
            } else if (color === 'secondary' || color === 'error' || color === 'success' || color === 'warning' || color === 'info') {
                _bgcolor = themeConfig.colors[color]['main']
            } else if (color) {
                _bgcolor = color
            }

            if (disabled) {
                _bgcolor = formatUtil.alpha(_bgcolor, disableOpacity)
            }

            styles.borderColor = _bgcolor
            styles.borderWidth = 1
        }

        return { 
            ...styles, 
            ...(typeof style === 'object' && style !== null ? style : {}), 
            ...(typeof sx === 'object' && sx !== null ? sx : {}) 
        } as TouchableOpacityProps['style']
    }, [variant, color, style, sx, disabled, fullWidth, bgColor])

    const buildStyleText = React.useMemo(() => {
        let styles: TextStyle = {
            color: textColor,
            fontSize: size === 'small' ? 12 : (size === 'medium' ? 14 : 16),
            fontWeight: 600,
            textAlign: 'center',
            lineHeight: size === 'small' ? 14 : (size === 'medium' ? 16 : 18),
            fontFamily: 'Quicksand_700Bold',
        }

        return {
            ...styles,
            ...(typeof textStyle === 'object' && textStyle !== null ? textStyle : {}), 
        }
    }, [variant, color, disabled, bgColor, textStyle])
    
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buildStyleView}
            disabled={disabled}
            {...buttonResProps}
        >
            {title && typeof title === 'string' && (
                <Text style={buildStyleText} {...restTitleProps}>
                    {title}
                </Text>
            )}
            {title && typeof title !== 'string' && (title)}
            {children}
        </TouchableOpacity>
    )
}

export interface ButtonTextProps extends TextProps {
    children?: React.ReactNode | string
    sx?: TextStyle
    size?: 'small' | 'medium' | 'large'
}

export const ButtonText = (props: ButtonTextProps) => {
    const { children, style = {}, sx = {}, size, ...textProps } = props

    return (
        <Text
            style={[
                {
                    color: themeConfig.colors.text,
                    fontSize: size === 'small' ? 12 : (size === 'medium' ? 14 : 16),
                    fontWeight: "600",
                    textAlign: 'center',
                    lineHeight: size === 'small' ? 14 : (size === 'medium' ? 16 : 18),
                    fontFamily: 'Quicksand_700Bold',
                },
                typeof style === 'object' && style !== null ? style : {},
                typeof sx === 'object' && sx !== null ? sx : {},
            ]}
            {...textProps}
        >
            {children}
        </Text>
    )
}

export interface IconButtonProps {
    onPress: () => void
    style?: ViewStyle
    icon: IconProps['name']
    disabled?: boolean
    color?: string
    size?: number
}

export const IconButton = ({ icon, disabled = false, style, onPress, size = 32, ...rest }: IconButtonProps) => {
    const theme = useTheme()
    const color = rest.color ?? themeConfig.colors.primary
    const defineColor = disabled ? formatUtil.rgbaToHex(formatUtil.hexToRgba(themeConfig.colors.gray['A600'], .5)) : color
    const { backgroundColor, ...restStyle } = style ?? { backgroundColor: 'transparent' }

    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{
            backgroundColor: backgroundColor,
            width: size,
            height: size,
            borderRadius: 999,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            ...restStyle
        }}
    >
        <Icon name={icon} size={size} color={defineColor} />
    </TouchableOpacity>
}