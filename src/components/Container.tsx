import theme from "@/config/theme.config";
import { Dimensions, View, ViewProps, ViewStyle } from "react-native";

interface ContainerProps extends ViewProps {
    tabScreen?: boolean;
}

const Container = ({ tabScreen = false, children, style = {}, ...props }: ContainerProps) => {
    const height = Dimensions.get('screen').height;

    return <View
        style={{
            flex: 1,
            paddingVertical: 0,
            paddingHorizontal: 0,
            paddingBottom: 30,
            backgroundColor: theme.colors.background,
            minHeight: Math.round(height),
            ...style as ViewStyle,
        }}
        {...props}
    >
        {children}
    </View>
}

export default Container;