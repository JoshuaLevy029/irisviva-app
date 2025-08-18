import { useRouter } from 'expo-router';
import { StyleProp, TouchableOpacity, TouchableOpacityProperties, TouchableOpacityProps } from 'react-native';
import Icon from './Icon';
import themeConfig from '@/config/theme.config';

interface BackProps {
  style?: StyleProp<TouchableOpacityProps['style']>;
  onPress?: () => void;
}

export default ({ style, onPress }: BackProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ ...(style as {}) }}
      onPress={!!onPress ? onPress : () => router.back()}
    >
      <Icon size={32} name='IconSolarAltArrowLeftLinear' color={themeConfig.colors.main.main} />
    </TouchableOpacity>
  );
};
