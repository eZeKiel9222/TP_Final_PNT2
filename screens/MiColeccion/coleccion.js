import { View } from 'react-native';
import Header from '../../components/Header/index.js';
import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import header from '../../styles/header.js';
import UserService from '../../services/users.js'
import GlobalContext from '../../services/GlobalContext';
import CartaFlatListColeccion from '../../components/CartaFlatListColeccion/index.js';

export default ({ navigation }) => {

  const { user } = useContext(GlobalContext)
  const [cartas, setCartas] = useState(null)
  const { userInfo } = user

  useFocusEffect(
    useCallback(() => {
      UserService.getUser(userInfo.id)
        .then(data => {
          
          const midpoint = Math.floor(data.message.Carta.length / 2);
          const firstHalf = data.message.Carta.slice(0, midpoint);
          const secondHalf = data.message.Carta.slice(midpoint);
          
          const pairedMazos = Array.from({ length: Math.max(firstHalf.length, secondHalf.length) }, (_, index) => [
            firstHalf[index],
            secondHalf[index]
          ]);
          setCartas(pairedMazos);
        })
        .catch(error => {
          console.error('Error fetching mazos:', error);
        });
    }, [])
  );

  return (
    <View>
      <Header name='Mi coleccion' styleHeader={header.title} styleDivider={header.divider} />
      <CartaFlatListColeccion cartas={cartas} navigation={navigation} />
    </View>
  )
}