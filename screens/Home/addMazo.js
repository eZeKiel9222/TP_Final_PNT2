import { View, TextInput, Text } from 'react-native';
import MazosService from '../../services/mazos.js'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import homeStyles from '../../styles/home.js';
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation, route }) => {

  const [nombreMazo, OnchangeNombreMazo] = useState()
  const [modos, setModos] = useState()
  const [data, setData] = useState()
  const [modo, setModo] = useState();
  const [estado, setEstado] = useState();

  const data2 = [{ key: 1, value: 'Privado' }, { key: 2, value: 'Publico' }]

  const handleMazo = () => {
    MazosService.createMazo(nombreMazo, estado, route.params.user, modo).then(data => {
      console.log(data)
      if (data.sucess) {
        navigation.navigate('Mazos')
      } else {
        alert(data.message)
      }
    }).catch(error => {
      console.error('Error Registrando Usuario:', error);
    });
  }

  useFocusEffect(
    useCallback(() => {
      MazosService.getModos()
        .then(data => {
          setModos(data.message)
          const transformedArray = data.message.map(item => ({ key: item.id, value: item.nombreModo }));
          setData(transformedArray)
        })
        .catch(error => {
          console.error('Error fetching modos:', error);
        });
    }, [])
  );

  return (
    <View style={{ padding: 35 }}>
      <Text style={homeStyles.title}>Nombre</Text>
      <TextInput
        style={homeStyles.textInput}
        onChangeText={OnchangeNombreMazo}
        value={nombreMazo}
        placeholder='Nombre mazo'
        placeholderTextColor='grey'
      />
      <Text style={homeStyles.title}>Modo de juego</Text>
      <SelectList
        setSelected={(val) => setModo(val)}
        data={data}
        save="key"
      />
      <Text style={homeStyles.title}>Estado</Text>
      <SelectList
        setSelected={(val) => setEstado(val)}
        data={data2}
        save="value"
      />
      <View style={{ alignSelf: 'center', marginVertical: 100 }}>
        <Button title='Crear mazo' buttonStyle={buttonStyle.blackButton}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={handleMazo} />
      </View>

    </View>
  )
}