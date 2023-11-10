import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js';
import MazosService from "../../services/mazos";
import MazoFlatlist from '../../components/MazoFlatlist/index.js';
import { Button } from '@rneui/themed';
import header from '../../styles/header.js';


export default ({ navigation }) => {

  const { changeHome, user } = useContext(GlobalContext)
  const [mazos, setMazos] = useState(null)
  const {userInfo} = user
  console.log(userInfo)

  const createMazo = () => {

    navigation.navigate('Agregar Mazo',{user:userInfo.id})
  }
  useFocusEffect(
    useCallback( () => {
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
      <Header name='Home' styleHeader={header.title} styleDivider={header.divider}/>
      <View style={{ padding:20, backgroundColor:'grey', marginTop:5}}>
      <Button title='Agregar Mazo' buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 100,
                marginHorizontal: 0,
                marginVertical: -10,
                marginLeft:230
              }}
              titleStyle={{ fontWeight: 'bold' }} 
              onPress={createMazo}/>
      </View>
      <Text></Text>
      <MazoFlatlist mazos={mazos} navigation={navigation}/>
    </View>
  )
}