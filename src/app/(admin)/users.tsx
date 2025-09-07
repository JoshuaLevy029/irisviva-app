
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useRouter } from 'expo-router';
import { View } from 'react-native';


export default function HomeScreen () {
  const router = useRouter();

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ padding: 16 }}>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Método IrisViva
        </Typography>

        
      </View>
    </Container>
  );
}