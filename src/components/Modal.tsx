import themeConfig from '@/config/theme.config'
import { View, ViewProps } from 'react-native'
import { ModalProps, Modal as PaperModal } from 'react-native-paper'
import Typography, { TypographyProps } from './Typography'

export default function Modal({ children, contentContainerStyle = {}, ...props }: ModalProps) {
  return (
    <PaperModal {...props} contentContainerStyle={{ backgroundColor: themeConfig.colors.background, padding: 20, marginHorizontal: 20, borderRadius: 20, ...(contentContainerStyle as any) }}>
      {children}
    </PaperModal>
  )
}

export function ModalTitle({ children, style = {}, sx = {}, ...props }: TypographyProps) {
    return (
        <Typography {...props} fontSize='h3' color='primary' fontWeight='semibold' style={{ marginBottom: 20 ,...(style as any) }} sx={{ ...(sx as any) }}>
            {children}
        </Typography>
    )
}

export function ModalActions({ children, style = {}, ...props }: ViewProps) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20, ...(style as any) }} {...props}>
            {children}
        </View>
    )
}

export function ModalContent({ children, style = {}, ...props }: ViewProps) {
    return (
        <View style={{ ...(style as any) }} {...props}>
            {children}
        </View>
    )
}