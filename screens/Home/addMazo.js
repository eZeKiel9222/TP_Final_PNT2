import { View, TextInput,Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'
import header from '../../styles/header.js';
import MazosService from '../../services/mazos.js'
import { SelectList } from 'react-native-dropdown-select-list'
import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Button } from '@rneui/themed';



export default ({ navigation, route }) => {

    const [nombreMazo,OnchangeNombreMazo] = useState()
    const [modos,setModos] = useState()
    const [data,setData] = useState()
    const [modo, setModo] = useState();
    const [estado, setEstado] = useState();

    const data2 = [{key:1 , value:'Privado'}, {key:2 , value:'Publico'}]
    
    const handleMazo = () =>{
        MazosService.createMazo(nombreMazo,estado,route.params.user,modo).then(data => {
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
        useCallback( () => {
            MazosService.getModos()
            .then(data => {
              console.log(data.message)
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
    <View style={{padding:35}}> 
        <Text style={{fontSize:30, fontWeight:'bold', margin:20}}>Nombre Mazo</Text>
        <TextInput
            style={{
                height: 45,
                margin: 12,
                borderWidth: 2,
                borderColor: 'black',
                color: 'black',
            }}
            onChangeText={OnchangeNombreMazo}
            value={nombreMazo}
            placeholder='Nombre Mazo'
            placeholderTextColor='black'
          />
         <Text style={{fontSize:30, fontWeight:'bold', margin:20}}>Modo de Juego:</Text>
        <SelectList 
        setSelected={(val) => setModo(val)} 
        data={data} 
        save="key"
         />
         <Text style={{fontSize:30, fontWeight:'bold', margin:20}}>Estado:</Text>
        <SelectList 
        setSelected={(val) => setEstado(val)} 
        data={data2} 
        save="value"
         />
        <View style={{alignSelf:'center' , marginVertical: 100}}>
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
              }}
              titleStyle={{ fontWeight: 'bold' }} 
              onPress={handleMazo}/>

        </View>

    </View>
    )
}