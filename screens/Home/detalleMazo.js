import Carta from '../../components/Carta/index.js';
import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'
import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Switch} from 'react-native';
import MazosService from '../../services/mazos.js'
import CartaFlatList from '../../components/CartaFlatList/index.js';
import { Button } from '@rneui/themed';

export default ({ navigation, route}) => {
  const [mazo,setMazo] = useState()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useFocusEffect(
    useCallback(() => {
      setIsEnabled(route.params.estado)
       MazosService.getMazo(route.params.mazoId)
        .then(data => {
          console.log(data.message)
          const midpoint = Math.ceil(data.message[0].Carta.length / 2);

            const firstHalf = data.message[0].Carta.slice(0, midpoint);

            const secondHalf = data.message[0].Carta.slice(-midpoint);

            const pairedCartas = Array.from({ length: Math.min(firstHalf.length, secondHalf.length) }, (_, index) => [
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
  const toCartas = () => {
    navigation.navigate('Buscar carta')
  }
  useFocusEffect(
    useCallback(() => {
      console.log(route.params.mazoId)
      console.log(isEnabled)
       MazosService.cambiarEstadoMazo(route.params.mazoId,isEnabled)
    }, [isEnabled])

    
  );
  return (
    <View >
      <View style={{flexDirection:'row' ,padding:20, backgroundColor:'grey'}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{color:'#81b0ff', fontSize:20 }}> Privado </Text>
      <Button title='Agregar Carta' buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 100,
                marginHorizontal: 0,
                marginVertical: -10,
                marginLeft:110,
                alignContent:'center'
              }}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={toCartas} />
      </View>
    <CartaFlatList cartas={mazo} navigation={navigation}/>
    </View>

    )
}