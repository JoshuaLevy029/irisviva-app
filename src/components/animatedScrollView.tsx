import themeConfig from "@/config/theme.config"
import { PropsWithChildren } from "react"
import { StatusBar, View } from "react-native"
import Animated, { useAnimatedRef } from "react-native-reanimated"

type Props = PropsWithChildren<{}>

export default (props: Props) => {
    const { children } = props

    const scrollRef = useAnimatedRef<Animated.ScrollView>()

    return (
        <View style={{ backgroundColor: themeConfig.colors.background, flex: 1 }}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} scrollIndicatorInsets={{ bottom: 0 }} contentContainerStyle={{ paddingBottom: 0 }}>
                <View style={{ flex: 1, paddingTop: (StatusBar.currentHeight || 32) + 10, paddingBottom: 32, paddingHorizontal: 8, overflow: 'hidden' }}>
                    {children}
                </View>
            </Animated.ScrollView>
        </View>
    )
}