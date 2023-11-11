import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import Header from '../../components/Header/index.js';
import MazosService from "../../services/mazos";
import MazoFlatlist from '../../components/MazoFlatlist/index.js';
import { Button } from '@rneui/themed';
import header from '../../styles/header.js';
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation }) => {

  const { changeHome, user } = useContext(GlobalContext)
  const [mazos, setMazos] = useState(null)
  const { userInfo } = user
  console.log(userInfo)

  const createMazo = () => {

    navigation.navigate('Agregar Mazo', { user: userInfo.id })
  }
  useFocusEffect(
    useCallback(() => {
      MazosService.getMazosByIdUser(userInfo.id)
        .then(data => {
          console.log(data.message)
          const midpoint = Math.ceil(data.message.length / 2);
          console.log(midpoint)
          const firstHalf = data.message.slice(0, midpoint);
          console.log(firstHalf)
          const secondHalf = data.message.slice(-midpoint);
          console.log(secondHalf)
          const pairedMazos = Array.from({ length: Math.min(firstHalf.length, secondHalf.length) }, (_, index) => [
            firstHalf[index],
            secondHalf[index]
          ]);

          console.log(pairedMazos)
          setMazos(pairedMazos);
        })
        .catch(error => {
          console.error('Error fetching mazos:', error);
        });
    }, [])
  );

  return (
    <View>
      <Header name='Home' styleHeader={header.title} styleDivider={header.divider} />
      <View style={{ backgroundColor: 'gainsboro' }}>
        <Button title='Agregar Mazo' buttonStyle={buttonStyle.blackButton}
          containerStyle={{
            marginRight: 20,
            marginLeft: 220,
            padding: 5
          }}
          onPress={createMazo} />
      </View>
      <Text></Text>
      <MazoFlatlist mazos={mazos} navigation={navigation} />
    </View>
  )
}