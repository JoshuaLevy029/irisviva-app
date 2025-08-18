
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { View } from 'react-native';


export default function HomeScreen () {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ padding: 16 }}>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Método IrisViva
        </Typography>

        <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 40 }}>
          Descubra o que seus olhos revelam sobre sua saúde com o poder da IA
        </Typography>

        <View>
          <Typography fontWeight='bold' fontSize='h4' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A700'], marginBottom: 10 }}>
            Bem-vindo(a) à Análise Real da Íris!
          </Typography>

          <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 40, }}>
            Este aplicativo agora usa a avançada inteligência artificial do Gemini para analisar a foto da sua íris. O objetivo é oferecer um relatório verdadeiramente personalizado para seu autoconhecimento.
          </Typography>

          <View
            style={{
              backgroundColor: themeConfig.colors.warning['A100'],
              padding: 16,
              borderLeftColor: themeConfig.colors.warning['A400'],
              borderLeftWidth: 4,
              borderRadius: 10,
            }}
          >
            <Typography fontWeight='bold' sx={{ color: themeConfig.colors.warning['A700'], marginBottom: 5 }}>
              Atenção:
            </Typography>
            <Typography fontWeight='regular' sx={{ color: themeConfig.colors.warning['A700'] }}>
              Este relatório é uma ferramenta de pré-diagnóstico e não substitui uma consulta ou avaliação médica profissional. A iridologia não diagnostica doenças específicas.
            </Typography>
          </View>

          <Button
              title='Iniciar Análise'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={() => {}}
              sx={{ marginTop: 20 }}
          />
        </View>
      </View>
    </Container>
  );
}