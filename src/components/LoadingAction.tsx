import formatUtil from '@/utils/format.util'
import { useTheme } from "@react-navigation/native"
import { memo } from "react"
import { Text, useWindowDimensions, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"

export default memo(({ message }: { message: string }) => {
    const theme = useTheme()
    const height = useWindowDimensions().height
    const width = useWindowDimensions().width

    return <View style={{ 
        flex: 1, 
        backgroundColor: formatUtil.alpha('#FFFFFF', 0.5), 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: Math.round(width), 
        height: Math.round(height), 
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    }}>
        <ActivityIndicator size={75} color={theme.colors.primary} />
        <Text style={{ fontSize: 20, fontFamily: 'Quicksand_600SemiBold', marginTop: 30, color: theme.colors.primary }}>
            {message}
        </Text>
    </View>
})