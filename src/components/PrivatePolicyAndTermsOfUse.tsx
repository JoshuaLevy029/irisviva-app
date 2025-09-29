import themeConfig from "@/config/theme.config";
import React from "react";
import { Modal, ScrollView, useWindowDimensions, View } from "react-native";
import Typography from "./Typography";
import Button from "./Button";

export default ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const dimensions = useWindowDimensions();

    const Header = React.useCallback(({ text }: { text: string }) => {
        return (
            <Typography fontWeight="semibold" fontSize='h4' color='primary' sx={{ textAlign: 'left', marginBottom: 10, marginTop: 10 }}>
                {text}
            </Typography>
        )
    }, []);

    const Paragraph = React.useCallback(({ text }: { text: string }) => {
        return (
            <Typography fontWeight="regular" fontSize='smallmedium' color='black' sx={{ textAlign: 'justify', marginBottom: 10, marginLeft: 10 }}>
                {text}
            </Typography>
        )
    }, []);
    
    return (
        <Modal visible={open} onDismiss={onClose} transparent={true} statusBarTranslucent={true}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 20, marginHorizontal: 10, height: dimensions.height - 10, borderRadius: 16, backgroundColor: themeConfig.colors.background, alignSelf: 'stretch' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Typography fontWeight="bold" fontSize='h3' color='primary' sx={{ textAlign: 'center', marginBottom: 0 }}>
                            Política de Privacidade
                        </Typography>

                        <Typography fontWeight="bold" fontSize='h3' color='primary' sx={{ textAlign: 'center', marginBottom: 20 }}>
                            Aplicativo ÍRIS VIVA
                        </Typography>

                        <Header text="1. Introdução" />
                        <Paragraph text="O aplicativo ÍRIS VIVA valoriza a privacidade e a segurança de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e com o Regulamento Geral de Proteção de Dados da União Europeia (GDPR)." />
                        <Paragraph text="Ao utilizar o aplicativo, você concorda com as práticas aqui descritas." />

                        <Header text="2. Dados coletados" />
                        <Paragraph text="O aplicativo pode coletar e armazenar os seguintes dados:" />
                        <Paragraph text="- Imagens da íris e do rosto para fins de análise avaliativa;" />
                        <Paragraph text="- Informações de cadastro: nome, e-mail e telefone (quando fornecidos pelo usuário);" />
                        <Paragraph text="- Dados de uso do app (como interações e preferências) para melhorias técnices;" />
                        <Paragraph text="Não coletamos dados sensíveis além dos estritamente necessários para o funcionamento da aplicação." />

                        <Header text="3. Finalidade do uso dos dados" />
                        <Paragraph text="Os dados coletados têm como finalidades:"/>
                        <Paragraph text="- Realizar análises avaliativas de prevenção com base no Método ÍRIS VIVA (sem caráter diagnóstico ou substituição de atendimento médico);"/>
                        <Paragraph text="- Permitir o funcionamento pleno do app e suas funcionalidades;"/>
                        <Paragraph text="- Aprimorar a experiência do usuário;"/>
                        <Paragraph text="Cumprir obrigações legais e regulatórias, quando necessário." />

                        <Header text="4. Armazenamento e exclusão" />
                        <Paragraph text="Os dados e imagens são armazenados em ambiente seguro, com criptografia e proteção contra acessos não autorizados." />
                        <Paragraph text="O usuário pode solicitar a exclusão definitiva de seus dados a qualquer momento, entrando em contato pelo canal de suporte informado nesta política." />
                        <Paragraph text="Os dados poderão ser mantidos pelo período máximo de 12 meses ou até que sejam solicitados para exclusão." />

                        <Header text="5. Compartilhamento de dados" />
                        <Paragraph text="O ÍRIS VIVA não compartilha dados pessoais ou imagens com terceiros, exceto quando estritamente necessário para:" />
                        <Paragraph text="- Hospedagem segura em servidores de nuvem;" />
                        <Paragraph text="- Cumprimento de exigências legais." />
                        <Paragraph text="Nunca vendemos ou comercializamos dados pessoais." />

                        <Header text="6. Direitos do usuário" />
                        <Paragraph text="Nos termos da LGPD e GDPR, o usuário tem direito a:" />
                        <Paragraph text="- Confirmar a existência de tratamento de seus dados;" />
                        <Paragraph text="- Solicitar acesso, correção ou exclusão de dados pessoais;" />
                        <Paragraph text="- Retirar seu consentimento a qualquer momento;" />
                        <Paragraph text="Portabilidade de dados, quando aplicável." />

                        <Header text="7. Segurança dos dados" />
                        <Paragraph text="Adotamos medidas técnicas e organizacionais para proteger os dados coletados, incluindo criptografia, controle de acesso e monitoramento de segurança." />

                        <Header text="8. Alterações desta Política" />
                        <Paragraph text="A presente Política de Privacidade pode ser atualizada periodicamente. A versão mais recente sempre estará disponível dentro do aplicativo." />

                        <Header text="9. Contato" />
                        <Paragraph text="Para dúvidas, solicitações ou exclusão de dados, entre em contato pelo e-mail:" />
                        <Paragraph text="👉 contato@irisviva.com.br" />

                        <Header text="📌 Observação legal:" />
                        <Paragraph text="O aplicativo ÍRIS VIVA é uma ferramenta de avaliação preventiva, não substituindo consultas médicas, diagnósticos clínicos ou tratamentos de saúde profissional." />
                    </ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <Button size='small' variant='contained' title='Fechar' onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};