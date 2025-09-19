
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Input, { ErrorInput } from '@/components/Input';
import Select from '@/components/Select';
import Typography from '@/components/Typography';
import AnimatedScrollView from '@/components/animatedScrollView';
import themeConfig from '@/config/theme.config';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';


export default function AnalysisScreen () {
  const router = useRouter()

  const [data, setData] = React.useState({
    name: '',
    age: '',
    occupation: '',
    gender: '',
    gender_definition: '',
  })
  const [errors, setErrors] = React.useState({
    name: '',
    age: '',
    occupation: '',
    gender: '',
    gender_definition: '',
  })

  const onChange = (key: string, value: any) => {
    setData({ ...data, [key]: value })
  }

  const onNext = () => {
    if (data.name === '' || data.age === '' || data.occupation === '' || data.gender === '' || (data.gender === 'other' && data.gender_definition === '')) {
      setErrors({
        name: data.name === '' ? 'Nome completo é obrigatório' : '',
        age: data.age === '' ? 'Idade é obrigatória' : '',
        occupation: data.occupation === '' ? 'Profissão é obrigatória' : '',
        gender: data.gender === '' ? 'Gênero é obrigatório' : '',
        gender_definition: data.gender === 'other' && data.gender_definition === '' ? 'Definição do gênero é obrigatória' : '',
      })
    } else {
      router.push({
        pathname: '/(analysis)/tips',
        params: {
          name: data.name,
          age: data.age,
          occupation: data.occupation,
          gender: data.gender,
          gender_definition: data.gender_definition || '',
        },
      })
    }
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16, paddingTop: 77 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView behavior='position' style={{ flex: 1 }}>
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

              <Select 
                label='Gênero' 
                placeholder='Selecione uma opção'
                value={data.gender.toString()} 
                options={[
                  { label: 'Masculino', value: 'male' },
                  { label: 'Feminino', value: 'female' },
                  { label: 'Outro', value: 'other' },
                ]} 
                optionComponent={({ label, value }) => <Typography fontWeight='semibold' color='primary'>{label}</Typography>} 
                render={selected => [
                  { label: 'Masculino', value: 'male' },
                  { label: 'Feminino', value: 'female' },
                  { label: 'Outro', value: 'other' },
                ].find(item => item.value === selected)?.label || ''} 
                onChange={v => onChange('gender', v.value as string)} 
                hasError={Boolean(errors.gender)}
                containerStyle={{
                  marginBottom: 0,
                  marginTop: 16,
                  backgroundColor: '#fff',
                }}
                inputProps={{
                  containerStyle: {
                    backgroundColor: '#fff',
                  },
                  style: {
                    color: '#000',
                  }
                }}
              />
              {errors.gender && <ErrorInput>{errors.gender}</ErrorInput>}

              {data.gender === 'other' && (
                <React.Fragment>
                  <Input
                    label='Como gostaria de ser identificado?'
                    onChangeText={(text) => onChange('gender_definition', text)}
                    value={data.gender_definition}
                    keyboardType='default'
                    hasError={errors.gender_definition !== ''}
                    containerStyle={{
                      marginBottom: 0,
                      marginTop: 16,
                      backgroundColor: '#fff',
                    }}
                  />
                  {errors.gender_definition !== '' && <ErrorInput>{errors.gender_definition}</ErrorInput>}
                </React.Fragment>
              )}

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
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
}