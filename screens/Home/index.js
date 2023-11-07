import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button, SafeAreaView } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js';
import MazosService from "../../services/mazos";

export default ({ navigation }) => {

  const { changeHome } = useContext(GlobalContext)
  const [mazos, setMazos] = useState(null)

  useFocusEffect(
    useCallback(() => {
      MazosService.getMazos()
        .then(data => {
          setMazos(data)
        })
    }, [])
  );

  return (
    <SafeAreaView>
      <Header name='Home' />
      <Text>  </Text>
      <View>
        <Button styles={styles.containerbuttons} title="Ir a login" onPress={changeHome} />
      </View>
      <Text>  </Text>
      <Text>  </Text>
      {mazos ? (
        mazos.map((mazo, index) => (
        <View>
          {/* <Text>Mazo: {index} - {mazo.nombreMazo}</Text> */}
          <Text>Mazo: {index} - {mazo.fullName}</Text>
        </View>
      ))) : (
        <Text>No se encontraron datos.</Text>
      )
      }

    </SafeAreaView>
  )
}