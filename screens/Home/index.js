import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import Header from '../../components/Header/index.js';
import header from '../../styles/header.js';
import MazosService from "../../services/mazos";

export default ({ navigation }) => {

  const { changeHome, user } = useContext(GlobalContext)
  const [mazos, setMazos] = useState(null)
  const { userInfo } = user
  console.log(userInfo)

  useFocusEffect(
    useCallback(() => {
      MazosService.getMazosByIdUser(userInfo.id)
        .then(data => {
          console.log(data)
          setMazos(data.message);
        })
        .catch(error => {
          console.error('Error fetching mazos:', error);
        });
    }, [])
  );

  return (
    <View>
      <Header name='Home' styleHeader={header.title} styleDivider={header.divider} />
      <Text>  </Text>
      <Text>  </Text>
      <Text>  </Text>
      {mazos ? (
        mazos.map((mazo, index) => (
          <View>
            <Text>Mazo: {index} - {mazo.nombreMazo} - {mazo.ModoJuego.nombreModo}</Text>
          </View>
        ))) : (
        <Text>No se encontraron datos.</Text>
      )
      }

    </View>
  )
}