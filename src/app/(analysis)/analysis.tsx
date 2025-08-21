
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, View } from 'react-native';


export default function AnalysisScreen () {
  const router = useRouter()

  const [data, setData] = React.useState({
    name: '',
    age: '',
    occupation: '',
  })
  const [errors, setErrors] = React.useState({
    name: '',
    age: '',
    occupation: '',
  })

  const onChange = (key: string, value: any) => {
    setData({ ...data, [key]: value })
  }

  const onNext = () => {
    if (data.name === '' || data.age === '' || data.occupation === '') {
      setErrors({
        name: data.name === '' ? 'Nome completo é obrigatório' : '',
        age: data.age === '' ? 'Idade é obrigatória' : '',
        occupation: data.occupation === '' ? 'Profissão é obrigatória' : '',
      })
    } else {
      router.push({
        pathname: '/(analysis)/photos',
        params: {
          name: data.name,
          age: data.age,
          occupation: data.occupation,
        },
      })
    }
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77 }}>
      <View>
        <Typography fontWeight='semibold' fontSize='h2' sx={{ textAlign: 'center', color: themeConfig.colors.main['A700'], marginBottom: 10 }}>
          Método IrisViva
        </Typography>

        <Typography fontWeight='regular' sx={{ textAlign: 'center', color: themeConfig.colors.gray['A600'], marginBottom: 20 }}>
          Descubra o que seus olhos revelam sobre sua saúde com o poder da IA
        </Typography>

        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, width: '100%' }}>
            <Typography fontSize='h5' fontWeight='semibold' color='black' sx={{ marginBottom: 24, paddingHorizontal: 20, textAlign: 'center' }}>
                Sobre você
            </Typography>

            <Input
                label='Nome completo'
                onChangeText={(text) => onChange('name', text)}
                value={data.name}
                keyboardType='default'
                containerStyle={{
                    marginBottom: 0,
                    backgroundColor: '#fff',
                }}
                hasError={errors.name !== ''}
            />
            {errors.name !== '' && <ErrorInput>{errors.name}</ErrorInput>}

            <Input
                label='Idade'
                onChangeText={(text) => onChange('age', Number(`${text}`) ?? null)}
                value={data.age ? data.age.toString() : ''}
                keyboardType='number-pad'
                containerStyle={{
                    marginBottom: 0,
                    marginTop: 16,
                    backgroundColor: '#fff',
                }}
                hasError={errors.age !== ''}
            />
            {errors.age !== '' && <ErrorInput>{errors.age}</ErrorInput>}

            <Input
                label='Profissão'
                onChangeText={(text) => onChange('occupation', text)}
                value={data.occupation}
                keyboardType='default'
                containerStyle={{
                    marginBottom: 0,
                    marginTop: 16,
                    backgroundColor: '#fff',
                }}
                hasError={errors.occupation !== ''}
            />
            {errors.occupation !== '' && <ErrorInput>{errors.occupation}</ErrorInput>}

            <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 10 }}>
              <Button
                title='Voltar'
                variant='contained'
                disabled={false}
                onPress={() => {
                  router.push('/(tabs)')
                }}
                color={themeConfig.colors.gray['A200']}
                textColor={themeConfig.colors.gray['A700']}
                sx={{
                  flex: 1,
                }}
                size='medium'
              />

              <Button
                title='Próximo'
                variant='contained'
                disabled={false}
                onPress={onNext}
                sx={{
                  flex: 1,
                }}
                size='medium'
              />
            </View>
        </View>
      </View>
    </Container>
  );
}