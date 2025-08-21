
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, View } from 'react-native';


export default function AnalysisScreen () {
  const router = useRouter()
  const route = useRoute()
  const params = route.params as { result: string }

  return (
    <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77 }}>
      <ScrollView>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Método IrisViva
        </Typography>

        <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 20 }}>
          Descubra o que seus olhos revelam sobre sua saúde com o poder da IA
        </Typography>

        <Typography>
            {params.result}
        </Typography>

        <Button
            title='Fazer Nova Análise'
            variant='contained'
            disabled={false}
            fullWidth
            onPress={() => {
                router.push('/(analysis)/analysis')
            }}
            sx={{ marginTop: 20, marginBottom: 40 }}
        />
      </ScrollView>
    </Container>
  );
}