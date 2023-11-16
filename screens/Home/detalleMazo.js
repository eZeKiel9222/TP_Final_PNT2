import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Switch } from 'react-native';
import MazosService from '../../services/mazos.js'
import CartaFlatList from '../../components/CartaFlatList/index.js';
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js';
import Carta from '../../services/carta.js';

export default ({ navigation, route }) => {
  const [mazo, setMazo] = useState()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useFocusEffect(
    useCallback(() => {
      setIsEnabled(route.params.estado)
      MazosService.getMazo(route.params.mazoId)
        .then(data => {
          
          const midpoint = Math.floor(data.message[0].Carta.length / 2);
          const firstHalf = data.message[0].Carta.slice(0, midpoint);
          const secondHalf = data.message[0].Carta.slice(midpoint);
          
          const pairedCartas = Array.from({ length: Math.max(firstHalf.length, secondHalf.length) }, (_, index) => [
            firstHalf[index],
            secondHalf[index]
          ]);
          console.log(pairedCartas)
          setMazo(pairedCartas);
        })
        .catch(error => {
          console.error('Error fetching mazos:', error);
        });
    }, [])

  );
  const toCartas = () => {
    navigation.navigate('Buscar carta')
  }
  useFocusEffect(
    useCallback(() => {
      console.log(route.params.mazoId)
      console.log(isEnabled)
      MazosService.cambiarEstadoMazo(route.params.mazoId, isEnabled)
    }, [isEnabled])

  );
  return (
    <View >
      <View style={{ flexDirection: 'row', backgroundColor: 'gainsboro' }}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{ color: '#81b0ff', fontSize: 20, marginTop: 10 }}> Privado </Text>
        <Button title='Agregar Carta' buttonStyle={buttonStyle.blackButton}
          containerStyle={{
            padding: 5,
            marginLeft: 110
          }}
          onPress={toCartas} />
      </View>
      <CartaFlatList cartas={mazo} navigation={navigation} ruta={'Detalle Carta'} />
    </View>

  )
}