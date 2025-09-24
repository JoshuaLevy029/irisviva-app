
import Button, { IconButton } from '@/components/Button';
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
import { Alert, ScrollView, View, Share, Animated } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Clipboard from 'expo-clipboard';
import { DateTime } from 'luxon';

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

  // State for "To Top" button
  const [showScrollToTop, setShowScrollToTop] = React.useState(false)
  const scrollViewRef = React.useRef<ScrollView>(null)

  // Handle scroll events to show/hide "To Top" button
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y
    setShowScrollToTop(offsetY > 200) // Show button after scrolling 200px
  }

  // Scroll to top function
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true })
  }

  const onShare = async () => {
    try {
      let message = '';

      message += `_*${result.titulo}*_\n`;
      message += `*Olá ${result.dados_paciente.nome}! Aqui está o que seus olhos nos contam*`;
      message += `\n\n${result.resumo_analise}`;
      message += `\n\n*Detalhamento Técnico:*`;
      message += `\n${result.detalhamento_tecnico.map((item) => `\t*${item.zona}*\n\t\t*Sinais:* ${item.sinal}\n\t\t*Impacto:* ${item.impacto}\n\t\t*Explicação:* ${item.explicacao_para_leigo}`).join('\n')}`;
      message += `\n\n*Hipóteses Emocionais:*`;
      message += `\n${result.hipoteses_emocionais.map((item) => `\t- ${item}`).join('\n')}`;
      message += `\n\n*Encaminhamentos Sugeridos:*`;
      message += `\n${result.encaminhamentos_sugeridos.map((item) => `\t- ${item}`).join('\n')}`;
      
      if (result.forcas_x_fragilidades_emocionais.forcas.length > 0 && result.forcas_x_fragilidades_emocionais.fragilidades.length > 0) {
        message += `\n\n*Forças e Fragilidades Emocionais:*`;
        if (result.forcas_x_fragilidades_emocionais.forcas.length > 0) {
          message += `\n*Forças:*`;
          message += `\n${result.forcas_x_fragilidades_emocionais.forcas.map((item) => `\t- ${item}`).join('\n')}`;
        }
        
        if (result.forcas_x_fragilidades_emocionais.fragilidades.length > 0) {
          message += `\n\n*Fragilidades:*`;
          message += `\n${result.forcas_x_fragilidades_emocionais.fragilidades.map((item) => `\t- ${item}`).join('\n')}`;
        }
      }

      message += `\n\n*Análise Grafopsicológica:* `;
      message += `${result.analise_grafopsicologica ? result.analise_grafopsicologica : 'Não há análise grafopsicológica'}`;
      message += `\n\n_*${result.aviso}*_`;

      const copied = await Clipboard.setStringAsync(message);

      if (copied) {
        openDisclaimer({
          open: true,
          title: '',
          content: (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                Relatório copiado para a área de transferência
              </Typography>
            </View>
          ),
          closeText: 'Fechar',
          onClose: () => closeDisclaimer(),
          actions: [],
          sx: {
            zIndex: 9999,
          }
        });
      } else {
        openDisclaimer({
          open: true,
          title: '',
          content: (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                  Não foi possível copiar o relatório para a área de transferência. Por favor, tente novamente.
              </Typography>
            </View>
          ),
          closeText: 'Fechar',
          onClose: () => closeDisclaimer(),
          actions: [],
        });
      }

      /* const response = await Share.share({
        message: message,
        title: 'Relatório IrisViva',
      })

      if (response.action === Share.sharedAction) {
        openDisclaimer({
          open: true,
          title: '',
          content: (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                Relatório compartilhado com sucesso
              </Typography>
            </View>
          ),
          closeText: 'Fechar',
          onClose: () => closeDisclaimer(),
          actions: [],
          sx: {
            zIndex: 9999,
          }
        });
      } else if (response.action === Share.dismissedAction) {
      } */
    } catch (error: any) {
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                Não foi possível compartilhar o relatório. Por favor, tente novamente.
            </Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      });
    }
  }

  const onSave = async () => {
    const fileName = `IrisViva-${DateTime.now().toFormat('yyyy_MM_dd_HH_mm_ss')}.txt`;

    let textToSave = '';

    textToSave += `_*${result.titulo}*_\n`;
    textToSave += `*Olá ${result.dados_paciente.nome}! Aqui está o que seus olhos nos contam*`;
    textToSave += `\n\n${result.resumo_analise}`;
    textToSave += `\n\n*Detalhamento Técnico:*`;
    textToSave += `\n${result.detalhamento_tecnico.map((item) => `\t*${item.zona}*\n\t\t*Sinais:* ${item.sinal}\n\t\t*Impacto:* ${item.impacto}\n\t\t*Explicação:* ${item.explicacao_para_leigo}`).join('\n')}`;
    textToSave += `\n\n*Hipóteses Emocionais:*`;
    textToSave += `\n${result.hipoteses_emocionais.map((item) => `\t- ${item}`).join('\n')}`;
    textToSave += `\n\n*Encaminhamentos Sugeridos:*`;
    textToSave += `\n${result.encaminhamentos_sugeridos.map((item) => `\t- ${item}`).join('\n')}`;
    
    if (result.forcas_x_fragilidades_emocionais.forcas.length > 0 && result.forcas_x_fragilidades_emocionais.fragilidades.length > 0) {
      textToSave += `\n\n*Forças e Fragilidades Emocionais:*`;
      if (result.forcas_x_fragilidades_emocionais.forcas.length > 0) {
        textToSave += `\n*Forças:*`;
        textToSave += `\n${result.forcas_x_fragilidades_emocionais.forcas.map((item) => `\t- ${item}`).join('\n')}`;
      }
      
      if (result.forcas_x_fragilidades_emocionais.fragilidades.length > 0) {
        textToSave += `\n\n*Fragilidades:*`;
        textToSave += `\n${result.forcas_x_fragilidades_emocionais.fragilidades.map((item) => `\t- ${item}`).join('\n')}`;
      }
    }

    textToSave += `\n\n*Análise Grafopsicológica:* `;
    textToSave += `${result.analise_grafopsicologica ? result.analise_grafopsicologica : 'Não há análise grafopsicológica'}`;
    textToSave += `\n\n_*${result.aviso}*_`;

    try {
      const fileUri = new FileSystem.File(FileSystem.Paths.document, fileName);

      fileUri.create();
      fileUri.write(textToSave);
      
      // Check if sharing is available on this platform
      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        // Share the file so user can save it to their device
        await Sharing.shareAsync(fileUri.uri, {
          mimeType: 'text/plain',
          dialogTitle: 'Salvar Relatório IrisViva',
          UTI: 'public.plain-text',
        });
        
        openDisclaimer({
          open: true,
          title: '',
          content: (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                Relatório disponível para download
              </Typography>
              <Typography fontSize='medium' color='secondary' align='center'>
                Escolha onde salvar o arquivo no menu que apareceu
              </Typography>
            </View>
          ),
          closeText: 'Fechar',
          onClose: () => closeDisclaimer(),
          actions: [],
          sx: {
            zIndex: 9999,
          }
        });
      } else {
        // Fallback: show file location for web or other platforms
        openDisclaimer({
          open: true,
          title: '',
          content: (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Icon name='IconSolarCheckCircleLinear' size={50} color={themeConfig.colors.success.main} />
              <Typography fontWeight='semibold' fontSize='h4' color='primary'>
                Relatório salvo com sucesso
              </Typography>
              <Typography fontSize='medium' color='secondary' align='center'>
                Arquivo salvo em: {fileName}
              </Typography>
            </View>
          ),
          closeText: 'Fechar',
          onClose: () => closeDisclaimer(),
          actions: [],
          sx: {
            zIndex: 9999,
          }
        });
      }
    } catch (error: any) {
      console.error('Error saving text file:', error.message);
      openDisclaimer({
        open: true,
        title: '',
        content: (
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Icon name='IconSolarDangerTriangleLinear' size={50} color={themeConfig.colors.error.main} />
            <Typography fontWeight='semibold' fontSize='h4' color='primary' align='center'>
                Não foi possível salvar o relatório. Por favor, tente novamente.
            </Typography>
          </View>
        ),
        closeText: 'Fechar',
        onClose: () => closeDisclaimer(),
        actions: [],
      });
    }
  }

  return (
    <React.Fragment>
      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 40 }}>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Button title='Voltar' icon='IconSolarAltArrowLeftLinear' onPress={() => router.push('/(tabs)')} sx={{ marginBottom: 10, paddingHorizontal: 0, paddingVertical: 0 }} />
            </View>

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

            {result.analise_grafopsicologica && (
              <View style={{ width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Icon name='IconSolarDocumentAddLinear' size={25} color={themeConfig.colors.main['A700']} />
                  <Typography fontWeight='bold' fontSize='h4' sx={{ color: themeConfig.colors.main['A700'], flex: 1 }}>
                    Análise Grafopsicológica
                  </Typography>
                </View>

                <Typography fontWeight='regular' fontSize='h4' sx={{ textAlign: 'justify', color: themeConfig.colors.gray['A600'] }}>
                  {result.analise_grafopsicologica}
                </Typography>
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
              icon='IconSolarSquareShareLineLinear'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={onSave}
              sx={{ marginBottom: 10 }}
              titleProps={{ style: { marginLeft: 10 } }}
            />

            <Button
              title='Copiar Relatório'
              icon='IconSolarCopyLinear'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={onShare}
              sx={{ marginBottom: 10 }}
              titleProps={{ style: { marginLeft: 10 } }}
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

      {showScrollToTop && (
        <View style={{ 
          position: 'absolute', 
          bottom: 30, 
          right: 20, 
          zIndex: 1000,
        }}>
          <IconButton 
            icon='IconSolarAltArrowUpLinear' 
            onPress={scrollToTop} 
            size={25} 
            style={{ 
              backgroundColor: themeConfig.colors.primary, 
              borderRadius: 30,
              width: 40,
              height: 40,
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
            }} 
            color='white'
          />
        </View>
      )}

      <Disclaimer {...disclaimerProps} />
    </React.Fragment>
  );
}