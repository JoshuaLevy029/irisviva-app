import theme from '@/config/theme.config'
import React, { useState } from 'react'
import {
    Modal,
    StyleSheet,
    TextInputProps,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from 'react-native'
import Icon from './Icon'
import Input, { InputProps } from './Input'
import { Column } from './standard/Common'

export type SelectProps = TextInputProps & {
  label?: string
  placeholder?: string
  value: any
  options: any[]
  optionComponent: (item: any) => React.ReactNode
  render: (selected: any) => string
  containerStyle?: ViewStyle
  onChange: (value: any) => void
  hasError?: boolean
  borderColor?: string
  helperText?: string | React.ReactNode
  inputProps?: InputProps
}

const Select = ({
  label,
  placeholder = 'Select an option',
  value,
  options,
  optionComponent,
  render,
  containerStyle = {},
  onChange,
  hasError = false,
  borderColor = '',
  helperText = '',
  inputProps = {},
}: SelectProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { containerStyle: inputContainerStyle = {}, ...restInputProps } = inputProps

  const resolveBorderColor = (): string => {
    if (borderColor) return borderColor
    if (hasError) return theme.colors.error.main
    if (isFocused || value) return theme.colors.primary
    return theme.colors.gray.A700
  }

  const selectedLabel = render(value) || ''

  const handleOnPress = () => {
    setModalVisible(true)
    setIsFocused(true)
  }

  const handleOffPress = () => {
    setModalVisible(false)
    setIsFocused(false)
  }

  const handleSelectOption = (option: any) => {
    onChange(option)
    handleOffPress()
  }

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
        <Input
          label={label}
          placeholder={placeholder}
          value={selectedLabel} // Display the label of the selected value
          editable={false} // Make the input not directly editable
          hasError={hasError}
          endIcon={modalVisible ? (
            <Icon name='IconSolarAltArrowUpLinear' size={20} color={theme.colors.gray.A700} />
          ) : (
            <Icon name='IconSolarAltArrowDownLinear' size={20} color={theme.colors.gray.A700} />
          )}
          containerStyle={{ pointerEvents: 'none', ...inputContainerStyle }} // Prevent direct touch on Input
          borderColor={resolveBorderColor()}
          {...restInputProps}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade" // Or "slide"
      >
        <TouchableWithoutFeedback onPress={handleOffPress}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <Column style={styles.optionsContainer}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionItem,
                    ]}
                    onPress={() => handleSelectOption(option)}
                  >
                    {optionComponent(option)}
                  </TouchableOpacity>
                ))}
              </Column>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  optionsContainer: {
    backgroundColor: theme.colors.background,
    borderRadius: 16,
    width: '80%', // Adjust width as needed
    maxHeight: '70%', // Limit height for scrollability
    overflow: 'hidden', // Ensure content within bounds
    paddingVertical: 10,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray.A100,
  },
  selectedOptionItem: {
    backgroundColor: theme.colors.primary + '10', // Light primary background for selected item
  },
})

export default Select