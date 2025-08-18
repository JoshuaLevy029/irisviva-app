import themeConfig from '@/config/theme.config'
import React from 'react'
import { Text, TextProps, TextStyle } from "react-native"

export interface TypographyProps extends TextProps {
    fontWeight?: 'light' | 'medium' | 'semibold' | 'bold' | 'normal' | string
    fontSize?: 'xsmall' | 'small' | 'smallmedium' | 'medium' | 'h7' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | number
    color?: 'black' | 'white' | string
    align?: 'left' | 'center' | 'right' | 'justify'
    sx?: TextStyle
}

const sizes: Record<NonNullable<TypographyProps['fontSize']>, TextStyle> = {
    xsmall: {
        fontSize: 8,
    },
    small: {
        fontSize: 12,
    },
    smallmedium: {
        fontSize: 14,
    },
    medium: {
        fontSize: 16,
    },
    h7: {
        fontSize: 12,
    },
    h6: {
        fontSize: 14,
    },
    h5: {
        fontSize: 16,
    },
    h4: {
        fontSize: 18,
    },
    h3: {
        fontSize: 20,
    },
    h2: {
        fontSize: 24,
    },
    h1: {
        fontSize: 32,
    },
}

const weights: Record<NonNullable<TypographyProps['fontWeight']>, TextStyle> = {
    bold: {
        fontWeight: '700',
        fontFamily: 'Quicksand_700Bold',
    },
    semibold: {
        fontWeight: '600',
        fontFamily: 'Quicksand_600SemiBold',
    },
    medium: {
        fontWeight: '500',
        fontFamily: 'Quicksand_500Medium',
    },
    light: {
        fontWeight: '400',
        fontFamily: 'Quicksand_400Light',
    },
    normal: {
        fontWeight: '400',
        fontFamily: 'Quicksand_400Regular',
    },
}

const colors: Record<'black' | 'white' | 'gray' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info', TextStyle> = {
    black: {
        color: '#000',
    },
    gray: {
        color: '#485069',
    },
    white: {
        color: '#FFF',
    },
    primary: {
        color: themeConfig.colors.primary,
    },
    secondary: {
        color: themeConfig.colors.secondary.main,
    },
    success: {
        color: themeConfig.colors.success.main,
    },
    error: {
        color: themeConfig.colors.error.main,
    },
    warning: {
        color: themeConfig.colors.warning.main,
    },
    info: {
        color: themeConfig.colors.info.main,
    }
}

const Typography: React.FC<TypographyProps> = ({ color = 'black', fontWeight = 'medium', fontSize = 'smallmedium', style = {}, sx = {}, ...props }) => {
  const customColorStyle = colors[color as keyof typeof colors] || { color: color }

  return (
    <Text
      style={{
        ...(fontWeight ? weights[fontWeight] || { fontWeight: fontWeight } : {}),
        ...(fontSize ? (typeof fontSize === 'string' ? (sizes[fontSize] ?? sizes['smallmedium']) : { fontSize }) : {}),
        ...(props.align ? { textAlign: props.align } : {}),
        ...customColorStyle,
        ...(style as TextStyle),
        ...(sx as TextStyle),
      }}
      {...props}
    />
  )
}

export default Typography