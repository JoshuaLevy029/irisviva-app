import theme from '@/config/theme.config'
import React, { ReactNode, useState } from 'react'
import { KeyboardTypeOptions, TextInput, TextInputProps, TextProps, View, ViewStyle } from 'react-native'
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text'
import Typography from './Typography'
import { Column, Row } from './standard/Common'

export type InputProps = TextInputProps & Omit<MaskedTextInputProps, 'style' | 'onChangeText'> & {
  label?: string
  placeholder?: string
  value?: string | number
  keyboardType?: KeyboardTypeOptions
  containerStyle?: ViewStyle
  onChangeText?: (text: string) => void
  useRawValue?: boolean
  isMasked?: boolean
  name?: string
  hasError?: boolean
  endIcon?: ReactNode
  startIcon?: ReactNode
  CustomComponent?: React.ComponentType<any> | null
  customComponentProps?: any
  borderColor?: string
}

const Input = ({
  label,
  placeholder = '',
  value,
  keyboardType = 'default',
  containerStyle = {},
  onChangeText = () => {},
  useRawValue = true,
  isMasked = false,
  hasError = false,
  endIcon = null,
  startIcon = null,
  CustomComponent = null,
  borderColor,
  customComponentProps = {},
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const resolveBorderColor = (): string => {
    if (borderColor) return borderColor
    if (hasError) return theme.colors.error.main
    if (isFocused || value) return theme.colors.primary
    return theme.colors.gray.A700
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Column
      style={{
        backgroundColor: theme.colors.background,
        width: '100%',
        height: 60,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: resolveBorderColor(),
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        ...containerStyle,
      }}
    >
      {label && (
        <Typography
          fontSize='small'
          color={resolveBorderColor()}
          fontWeight={isFocused ? 'bold' : 'semibold'}
        >
          {label}
        </Typography>
      )}

      <Row
        style={{
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {startIcon && <View>{startIcon}</View>}

        {CustomComponent ? (
          <CustomComponent
            {...customComponentProps}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : isMasked ? (
          <MaskedTextInput
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            style={{
              flex: 1,
              height: 40,
              paddingRight: endIcon ? 10 : 0,
              paddingLeft: startIcon ? 10 : 0,
            }}
            onChangeText={(formatted, raw) => onChangeText(useRawValue ? raw : formatted)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            onChangeText={v => onChangeText(v)}
            style={{
              flex: 1,
              height: 40,
              paddingRight: endIcon ? 10 : 0,
              paddingLeft: startIcon ? 10 : 0,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        )}

        {endIcon && <View>{endIcon}</View>}
      </Row>
    </Column>
  )
}

export default Input

export const ErrorInput = ({ children, style = {}, ...props }: TextProps) => (
  <Typography
    fontSize='small'
    fontWeight='semibold'
    color={theme.colors.error.main}
  >
    {children}
  </Typography>
)
