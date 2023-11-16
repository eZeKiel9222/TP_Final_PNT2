import { useCallback, useContext, useState } from 'react';
import CartaWithoutAmount from '../../components/CartaWithoutAmount/index.js';
import styles from '../../styles/styles.js'
import { View } from 'react-native';
import GlobalContext from '../../services/GlobalContext/index.js';
import { useFocusEffect } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation, route }) => {

  const { user , mazoss } = useContext(GlobalContext)
  const [mazoAgregar,setMazoAgregar] = useState()
  const [MazoData,setMazoData] = useState()
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
  

  return (
    <View>
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
        onPress={{}}
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
    </View>
  )
}