import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Switch } from 'react-native';
import MazosService from '../../services/mazos.js'
import CartaFlatList from '../../components/CartaFlatList/index.js';
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation, route }) => {
    const [mazo, setMazo] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
  
    useFocusEffect(
      useCallback(() => {
        MazosService.getMazo(route.params.mazoId)
          .then(data => {
 
            const midpoint = Math.floor(data.message[0].Carta.length / 2);
          const firstHalf = data.message[0].Carta.slice(0, midpoint);
          const secondHalf = data.message[0].Carta.slice(midpoint);
          
          const pairedCartas = Array.from({ length: Math.max(firstHalf.length, secondHalf.length) }, (_, index) => [
            firstHalf[index],
            secondHalf[index]
          ]);
  
            setMazo(pairedCartas);
          })
          .catch(error => {
            console.error('Error fetching mazos:', error);
          });
      }, [])
  
    );

    return (
      <View >        
        <CartaFlatList cartas={mazo} navigation={navigation} ruta={'Detalle Carta Buscado'} />
      </View>
  
    )
}
