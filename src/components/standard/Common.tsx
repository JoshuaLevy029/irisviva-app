import { useTheme } from '@react-navigation/native';
import { StyleProp, View, ViewStyle } from 'react-native';

interface CommmomProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Row = ({ children, style }: CommmomProps) => {
  return <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...(style as ViewStyle) }}>{children}</View>;
};

export const Column = ({ children, style }: CommmomProps) => {
  return <View style={{ display: 'flex', justifyContent: 'center', ...(style as ViewStyle) }}>{children}</View>;
};

export const Divider = ({ children, style }: CommmomProps) => {
  const theme = useTheme();
  return <View style={{ borderBottomColor: theme.colors.primary, borderBottomWidth: 1, opacity: 0.5, ...(style as ViewStyle) }} />;
};
