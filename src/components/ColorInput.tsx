import { default as theme, default as themeConfig } from '@/config/theme.config';
import React, { ReactNode, useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Button from './Button';
import Input from './Input'; // Assuming Input.tsx is in the same directory or accessible via alias
import { Column, Row } from './standard/Common';
import Typography from './Typography';

const { width } = Dimensions.get('window')
const pickerSize = width * 0.8 // Make the picker responsive to screen width

export type ColorInputProps = {
  label?: string
  placeholder?: string
  value: string | null // The currently selected hex color code (e.g., "#FF0000")
  onValueChange: (hexColor: string) => void
  containerStyle?: ViewStyle
  hasError?: boolean
  startIcon?: ReactNode
}

const ColorInput = ({
  label,
  placeholder = 'Select a color',
  value,
  onValueChange,
  containerStyle = {},
  hasError = false,
  startIcon,
}: ColorInputProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedColor, setSelectedColor] = useState(value || themeConfig.colors.primary)

  const handleCancel = () => {
    setModalVisible(false)
  }

  const onSelectColor = (newColor: string) => {
    //console.log(newColor)
    setSelectedColor(newColor)
  }

  const handleConfirmColor = () => {
    setModalVisible(false)
    onValueChange(selectedColor)
  }

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.7}>
        <Input
          label={label}
          placeholder={placeholder}
          value={value || placeholder} // Display the hex value or placeholder
          editable={false}
          hasError={hasError}
          startIcon={startIcon}
          endIcon={
            <View
              style={[
                styles.colorSwatch,
                { backgroundColor: value || theme.colors.gray.A200 }, // Show selected color or a default gray
                { borderColor: value || theme.colors.gray.A300 }
              ]}
            />
          }
          containerStyle={{ pointerEvents: 'none' }}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel} // Close on back press/swipe
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <Column style={styles.colorPickerModalContent}>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography fontWeight='semibold' fontSize='medium' sx={{ backgroundColor: `${selectedColor}`, ...styles.colorDisplay }}>
                    {selectedColor}
                  </Typography>
                  <Typography fontWeight='semibold' fontSize='medium' sx={{ backgroundColor: `${value}`, ...styles.colorDisplay }}>
                    {value}
                  </Typography>
                </View>
                <View style={styles.picker}>
                  <ColorPicker
                    color={selectedColor}
                    onColorChange={onSelectColor}
                    thumbSize={30}
                    sliderSize={30}
                    gapSize={20}
                    swatches={false}
                    row={false}
                  />
                </View>

                <Row style={{ justifyContent: 'space-between', gap: 10 }}>
                  <Button variant='outlined' title='Cancel' onPress={handleCancel} />
                  <Button variant='contained' title='Confirm' onPress={handleConfirmColor} />
                </Row>
              </Column>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  colorSwatch: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray.A300,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  colorPickerModalContent: {
    backgroundColor: theme.colors.background,
    borderRadius: 16,
    width: '90%', // Use a percentage of screen width
    maxWidth: 400, // Optional: maximum width for larger screens
    padding: 20,
    alignItems: 'center',
  },
  pickerTitle: {
    marginBottom: 20,
  },
  picker: {
    width: pickerSize, // Use calculated size
    height: pickerSize, // Use calculated size
    marginBottom: 20,
  },
  colorDisplayRow: {
    marginBottom: 20,
  },
  colorDisplay: {
    flex: 1,
    height: 30,
    borderRadius: 10,
    verticalAlign: 'middle',
    textAlign: 'center',
    lineHeight: 15,
  }
})

export default ColorInput