import themeConfig from '@/config/theme.config'
import emojisCategories from '@/constants/emojis'
import emojis from '@/emojis'
import formatUtil from '@/utils/format.util'
import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native'
import Icon from './Icon'
import Input from './Input'
import { Column } from './standard/Common'

export type SelectEmojiProps = TextInputProps & {
  label?: string
  placeholder?: string
  value: any
  containerStyle?: ViewStyle
  onChange: (value: any) => void
  hasError?: boolean
  borderColor?: string
  helperText?: string | React.ReactNode
}

const SelectEmoji = ({
  label,
  placeholder = 'Select an option',
  value,
  containerStyle = {},
  onChange,
  hasError = false,
  borderColor = '',
  helperText = '',
}: SelectEmojiProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof emojisCategories>('food-drink')

  const resolveBorderColor = (): string => {
    if (borderColor) return borderColor
    if (hasError) return themeConfig.colors.error.main
    if (isFocused || value) return themeConfig.colors.primary
    return themeConfig.colors.gray.A700
  }

  const handleOnPress = () => {
    setModalVisible(true)
    setIsFocused(true)
  }

  const handleOffPress = () => {
    setModalVisible(false)
    setIsFocused(false)
    setSelectedCategory('food-drink')
  }

  const handleSelectOption = (option: any) => {
    onChange(option)
    handleOffPress()
  }

  useEffect(() => {
    setSelectedCategory('food-drink')
  }, [])

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
        <Input
          label={label}
          placeholder={''}
          value={''} // Display the label of the selected value
          editable={false} // Make the input not directly editable
          hasError={hasError}
          startIcon={<Icon name={value} size={20} color={themeConfig.colors.gray.A700} />}
          endIcon={modalVisible ? (
            <Icon name='IconSolarAltArrowUpLinear' size={20} color={themeConfig.colors.gray.A700} />
          ) : (
            <Icon name='IconSolarAltArrowDownLinear' size={20} color={themeConfig.colors.gray.A700} />
          )}
          containerStyle={{ pointerEvents: 'none' }} // Prevent direct touch on Input
          borderColor={resolveBorderColor()}
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
              <Column style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, width: '100%' }}>
                  {Object.keys(emojisCategories).map((_category, _index) => (
                    <TouchableOpacity key={`category-${_category}-${_index}`} onPress={() => setSelectedCategory(_category as keyof typeof emojisCategories)}>
                      <Column 
                        style={{
                          ...(selectedCategory === _category ? {
                            backgroundColor: formatUtil.alpha(themeConfig.colors.primary, 0.12),
                            borderRadius: 10,
                            padding: 5,
                            borderWidth: 1,
                            borderColor: themeConfig.colors.primary,
                          } : {}),
                        }}
                      >
                        <Icon 
                          name={emojisCategories[_category as keyof typeof emojisCategories].icon as any} 
                          size={20} 
                          color={selectedCategory === _category ? themeConfig.colors.main['A500'] : themeConfig.colors.gray.A700} 
                        />
                      </Column>
                    </TouchableOpacity>
                  ))}
                </View>

                <ScrollView>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    {Object.keys(emojis[selectedCategory as keyof typeof emojisCategories]).map((emoji, index) => (
                      <TouchableOpacity key={`emoji-${emoji}-${index}`} onPress={() => handleSelectOption(emoji)}>
                        <Icon name={emoji as any} size={25} color={themeConfig.colors.gray.A700} />
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </Column>
              {/* <Column style={styles.optionsContainer}>
                {Object.keys(emojis).map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionItem,
                    ]}
                    onPress={() => handleSelectOption(option)}
                  >
                    <Icon name={option as any} size={25} color={themeConfig.colors.gray.A700} />
                  </TouchableOpacity>
                ))}
              </Column> */}
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
  container: {
    backgroundColor: themeConfig.colors.background,
    borderRadius: 16,
    width: '100%', // Adjust width as needed
    height: Dimensions.get('screen').height * .8,
    overflow: 'hidden', // Ensure content within bounds
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionItem: {
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,

  },
  selectedOptionItem: {
    backgroundColor: themeConfig.colors.primary + '10', // Light primary background for selected item
  },
})

export default SelectEmoji