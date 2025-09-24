
import Button from '@/components/Button';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import themeConfig from '@/config/theme.config';
import { useSession } from '@/context/auth';
import { User } from '@/entities/user.entity';
import useAuth from '@/hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { Linking, ScrollView, View } from 'react-native';


export default function HomeScreen () {
  const router = useRouter()
  const { isAuthenticated, isLoading, session, getSession } = useSession();
  const [user, setUser] = React.useState<User | null>(null);

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated || !session) {
    return <Redirect href='/(signin)' />;
  }

  useFocusEffect(React.useCallback(() => { 
    getSession().then((user) => setUser(user))
 }, [isAuthenticated]))

  return (
    <Container style={{ paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
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

          <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 5, }}>
            Este aplicativo foi idealizado por Helder Chabudé, criador do Método ÍRIS VIVA. Através de uma tecnologia inovadora, o sistema identifica sinais presentes nos olhos e transforma essa leitura em informações preciosas para a prevenção da saúde. Com sua experiência como iridólogo, escritor e hipnoterapeuta, Helder reuniu ciência, autoconhecimento e recursos digitais para criar uma ferramenta única, que une tradição e inovação em benefício da qualidade de vida.
          </Typography>

          <Button
            title='Me siga no Instagram'
            size='medium'
            icon='IconSkillIconsInstagram'
            iconSize={20}
            onPress={() => {
              // Open Instagram profile in browser
              window.open?.(
                "https://www.instagram.com/helderchabude?igsh=MThuNTlnZG1hdTVhcw==",
                "_blank"
              ) ||
              (typeof Linking !== "undefined" &&
                Linking.openURL &&
                Linking.openURL("https://www.instagram.com/helderchabude?igsh=MThuNTlnZG1hdTVhcw=="));
            }}
          />

          <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 20, }}>
            Utilizamos inteligência artificial avançada para analisar a foto da sua íris. O objetivo é oferecer um relatório verdadeiramente personalizado para seu autoconhecimento.
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

          {user && user.max_reports > user.reports && (
            <Button
              title='Iniciar Análise'
              variant='contained'
              disabled={false}
              fullWidth
              onPress={() => {
                router.push('/(analysis)/analysis')
              }}
              sx={{ marginTop: 20 }}
            />
          )}
          {user && user.max_reports <= user.reports && (
            <React.Fragment>
              <View
                style={{
                  backgroundColor: themeConfig.colors.error['A100'],
                  padding: 16,
                  borderLeftColor: themeConfig.colors.error['A400'],
                  borderLeftWidth: 4,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Typography fontWeight='regular' sx={{ color: themeConfig.colors.warning['A700'] }}>
                  Você atingiu o limite de análises mensais. Para continuar usando o aplicativo, você precisa adquirir um plano ou fazer upgrade.
                </Typography>
              </View>

              <Button
                title='Upgrade'
                icon='Ai'
                iconPosition='start'
                variant='contained'
                color={themeConfig.colors.main.A600}
                disabled={false}
                fullWidth
                onPress={() => {
                  router.push('/(plans)')
                }}
                sx={{ marginTop: 20 }}
              />
            </React.Fragment>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}