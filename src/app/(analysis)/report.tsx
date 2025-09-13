
import Button from '@/components/Button';
import Container from '@/components/Container';
import Disclaimer, { useDisclaimer } from '@/components/Disclaimer';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import formatUtil from '@/utils/format.util';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, View, Share } from 'react-native';
import * as FileSystem from 'expo-file-system';

interface Result {
  titulo: string
  dados_paciente: {
    nome: string
    idade: string
    profissao: string
    plano: string
    percentual_analise: string
  },
  resumo_analise: string,
  detalhamento_tecnico: [
    {
      zona: string
      sinal: string
      impacto: string
      explicacao_para_leigo: string
    },
    {
      zona: string
      sinal: string
      impacto: string
      explicacao_para_leigo: string
    },
    {
      zona: string
      sinal: string
      impacto: string
      explicacao_para_leigo: string
    },
    {
      zona: string
      sinal: string
      impacto: string
      explicacao_para_leigo: string
    },
    {
      zona: string
      sinal: string
      impacto: string
      explicacao_para_leigo: string
    }
  ],
  mapa_iris: string,
  hipoteses_emocionais: string[],
  encaminhamentos_sugeridos: string[],
  forcas_x_fragilidades_emocionais: {
    forcas: string[],
    fragilidades: string[],
  },
  analise_grafopsicologica: string | null,
  historico_comparativo: string | null,
  aviso: string
}

export default function AnalysisScreen () {
  const router = useRouter()
  const route = useRoute()
  const params = route.params as { result: string }
  const result = JSON.parse(params.result) as Result

  const { openDisclaimer, closeDisclaimer, ...disclaimerProps } = useDisclaimer()

  const onShare = async () => {
    try {
      const response = await Share.share({
        message: `
          Olá ${result.dados_paciente.nome}! Aqui está o que seus olhos nos contam

          ${result.resumo_analise}

          Detalhamento Técnico:
          ${result.detalhamento_tecnico.map((item) => `
            Sinais: ${item.sinal}
            Impacto: ${item.impacto}
            Explicação: ${item.explicacao_para_leigo}
          `).join('\n')}

          Hipóteses Emocionais:
          ${result.hipoteses_emocionais.map((item) => `
            - ${item}
          `).join('\n')}

          Encaminhamentos Sugeridos:
          ${result.encaminhamentos_sugeridos.map((item) => `
            - ${item}
          `).join('\n')}
        `,
      })

      if (response.action === Share.sharedAction) {
        
      } else if (response.action === Share.dismissedAction) {

      }
    } catch (error) {
      openDisclaimer({
        open: true,
        title: '',
        content: 'Não foi possível compartilhar o relatório. Por favor, tente novamente.',
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: []
      })
    }
  }  

  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77 }}>
            <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 30 }}>
              {result.titulo}
            </Typography>

            <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name='IconSolarUserHeartLinear' size={25} color={themeConfig.colors.main['A700']} />
                <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                  Olá {result.dados_paciente.nome}! Aqui está o que seus olhos nos contam
                </Typography>
              </View>

              <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'] }}>
                {result.resumo_analise}
              </Typography>
            </View>

            <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name='IconSolarHeartPulseLinear' size={25} color={themeConfig.colors.main['A700']} />
                <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                  Detalhamento Técnico
                </Typography>
              </View>

              {result.detalhamento_tecnico.map((item, index) => (
                <View key={`detalhamento-tecnico-${index}`} style={{ width: '100%', ...(index < result.detalhamento_tecnico.length - 1 && { marginBottom: 10 }) }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Icon name='IconSolarArrowRightLinear' size={15} color={themeConfig.colors.main['A800']} />
                    <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.main['A800'], flex: 1, maxWidth: '100%' }}>
                      {item.zona}
                    </Typography>
                  </View>

                  <View style={{ paddingLeft: 20 }}>
                    <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'], marginBottom: 5 }}>
                      Sinais: {item.sinal}
                    </Typography>

                    <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'], marginBottom: 5 }}>
                      Impacto: {item.impacto}
                    </Typography>

                    <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'] }}>
                      Explicação: {item.explicacao_para_leigo}
                    </Typography>
                  </View>

                </View>
              ))}
            </View>

            <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name='IconSolarMeditationRoundLinear' size={25} color={themeConfig.colors.main['A700']} />
                <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                  Hipóteses Emocionais
                </Typography>
              </View>

              {result.hipoteses_emocionais.map((item, index) => (
                <View key={`hipoteses-emocionais-${index}`} style={{ width: '100%', ...(index < result.hipoteses_emocionais.length - 1 && { marginBottom: 10 }) }}>
                  <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'] }}>
                    {item}
                  </Typography>
                </View>
              ))}
            </View>

            <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name='IconSolarHealthLinear' size={25} color={themeConfig.colors.main['A700']} />
                <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                  Encaminhamentos Sugeridos
                </Typography>
              </View>

              {result.encaminhamentos_sugeridos.map((item, index) => (
                <View key={`encaminhamentos-sugeridos-${index}`} style={{ width: '100%', ...(index < result.encaminhamentos_sugeridos.length - 1 && { marginBottom: 5 }) }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Icon name='IconSolarArrowRightLinear' size={15} color={themeConfig.colors.main['A800']} />
                    <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.gray['A600'], flex: 1, maxWidth: '100%' }}>
                      {item}
                    </Typography>
                  </View>
                </View>
              ))}
            </View>

            {result.forcas_x_fragilidades_emocionais && result.forcas_x_fragilidades_emocionais.forcas.length > 0 && result.forcas_x_fragilidades_emocionais.fragilidades.length > 0 && (
              <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Icon name='IconSolarEyeScanLinear' size={25} color={themeConfig.colors.main['A700']} />
                  <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                    Forças e Fragilidades Emocionais
                  </Typography>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Icon name='IconSolarSmileCircleLinear' size={20} color={themeConfig.colors.main['A800']} />
                  <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.main['A800'], flex: 1, maxWidth: '100%' }}>
                    Forças
                  </Typography>
                </View>
                {result.forcas_x_fragilidades_emocionais.forcas.map((item, index) => (
                  <View key={`forcas-${index}`} style={{ width: '100%', ...(index < result.forcas_x_fragilidades_emocionais.forcas.length - 1 && { marginBottom: 5 }) }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                      <Icon name='IconSolarArrowRightLinear' size={10} color={themeConfig.colors.main['A800']} />
                      <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.gray['A600'], flex: 1, maxWidth: '100%' }}>
                        {item}
                      </Typography>
                    </View>
                  </View>
                ))}

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10 }}>
                  <Icon name='IconSolarConfoundedCircleLinear' size={20} color={themeConfig.colors.main['A800']} />
                  <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.main['A800'], flex: 1, maxWidth: '100%' }}>
                    Fragilidades
                  </Typography>
                </View>
                {result.forcas_x_fragilidades_emocionais.fragilidades.map((item, index) => (
                  <View key={`fragilidades-${index}`} style={{ width: '100%', ...(index < result.forcas_x_fragilidades_emocionais.fragilidades.length - 1 && { marginBottom: 5 }) }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                      <Icon name='IconSolarArrowRightLinear' size={10} color={themeConfig.colors.main['A800']} />
                      <Typography fontWeight='semibold' fontSize='h4' sx={{ color: themeConfig.colors.gray['A600'], flex: 1, maxWidth: '100%' }}>
                        {item}
                      </Typography>
                    </View>
                  </View>
                ))}
              </View>
            )}

            <View style={{ width: '100%', backgroundColor: formatUtil.hexToRgba(themeConfig.colors.warning['A300'], 0.3), padding: 15, borderRadius: 10, marginBottom: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name='IconSolarDangerTriangleLinear' size={25} color={themeConfig.colors.warning['A600']} />
                <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.warning['A600'], flex: 1 }}>
                  Aviso Importante
                </Typography>
              </View>

              <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.warning['A600'] }}>
                Este relatório integra o Método ÍRIS VIVA e tem caráter educativo e preventivo, não substituindo avaliação médica, psicológica ou exames laboratoriais. As observações foram feitas a partir das fotos enviadas, que podem limitar a visualização de sinais finos. Em caso de sintomas ou dúvidas, procure profissionais de saúde. Prevenção sempre em primeiro lugar
              </Typography>
            </View>

            <Button
              title='Compartilhar Relatório'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={onShare}
              sx={{ marginBottom: 10 }}
            />

            <Button
              title='Fazer Nova Análise'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={() => {
                  router.push('/(analysis)/analysis')
              }}
              sx={{ marginBottom: 10 }}
            />

            <Button
              title='Página Inicial'
              variant='outlined'
              disabled={false}
              fullWidth
              onPress={() => {
                  router.push('/(tabs)')
              }}
              sx={{ marginBottom: 40 }}
            />

        </Container>
      </ScrollView>

      <Disclaimer {...disclaimerProps} />
    </React.Fragment>
  );
}