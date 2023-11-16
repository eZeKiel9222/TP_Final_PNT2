import { useCallback, useContext, useState } from 'react';
import CartaWithoutAmount from '../../components/CartaWithoutAmount/index.js';
import styles from '../../styles/styles.js'
import { ScrollView, View } from 'react-native';
import GlobalContext from '../../services/GlobalContext/index.js';
import { useFocusEffect } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js';
import CartaService from '../../services/carta.js'

export default ({ navigation, route }) => {

  const { user , mazoss } = useContext(GlobalContext)
  const [mazoAgregar,setMazoAgregar] = useState()
  const [MazoData,setMazoData] = useState()
  const [cartaGuardada,setCarta] = useState()
  const carta = route.params.carta
  useFocusEffect(
    useCallback(() => {
      if(user){
        const data = mazoss.map(item => ({ key: item.id, value: item.nombreMazo }));
        data.push({key:'Coleccion' , value:'Mi Coleccion'})
        setMazoData(data)
        console.log(MazoData)
        }
        
    }, [])
  );
  const Agregar = () => {
    CartaService.saveCarta(carta.cardName, carta.image, carta.cardUrl).then(data => {
      if(mazoAgregar === 'Coleccion'){
        CartaService.addCartaColeccion(user.userInfo.id,data.message.id).then(item => {
          console.log(item)
          if (item.sucess) {
            alert('Carta Agregada a Coleccion')
          } 
        }).catch(error => {
          console.error('Error fetching user:', error);
        });
  } else {
    CartaService.addCartaMazo(mazoAgregar,data.message.id).then(data => {
      console.log(data)
      if (data.success) {
        alert('Carta Agregada a Mazo')
      } else {
        alert(data.message)
      }
    }).catch(error => {
      console.error('Error fetching user:', error);
    });
  }
      setCarta(data.message)
    }).catch(error => {
      console.error('Error Fetching Carta', error)
    })
    

  }

  return (
    <View>
      <ScrollView>
      <CartaWithoutAmount carta={carta} style={styles.cartaDetalle} />
      {
        user?
        <View>
      <SelectList
        setSelected={(val) => setMazoAgregar(val)}
        data={MazoData}
        save="key"
      />
      <Button title='Agregar Carta'
        onPress={Agregar}
        buttonStyle={buttonStyle.blackButton}
        containerStyle={{
          width: 100,
          marginHorizontal: 10,
          marginVertical: 0,
          alignSelf: 'center'
        }}
        titleStyle={{ fontWeight: 'bold' }} />
        </View>
        : null
      }
      </ScrollView>
    </View>
  )
}