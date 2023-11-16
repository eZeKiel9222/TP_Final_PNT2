import Carta from '../../components/Carta/index.js';
import styles from '../../styles/styles.js'
import { Button } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import MazoService from '../../services/mazos.js'
import buttonStyle from '../../styles/buttons.js';
import { useContext, useState, useCallback } from 'react';
import GlobalContext from '../../services/GlobalContext';
import { SelectList } from 'react-native-dropdown-select-list'

export default ({ navigation, route }) => {
  const carta = route.params.carta
  const { MazoId, CartaId } = route.params.carta.CartasMazo
  const { user , mazoss } = useContext(GlobalContext)
  const [mazoAgregar,setMazoAgregar] = useState()

const MazoData = mazoss.map(item => ({ key: item.id, value: item.nombreMazo }));
MazoData.push({key:user.userInfo.id , value:'Mi Coleccion'})
console.log(MazoData)

  return (
    <View>
      <ScrollView>
      <Carta carta={carta} style={styles.cartaDetalle} />
      { user?
      <View style={{flexDirection:'row', alignSelf:'center'}}>
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
        : <View></View>
        }
        </ScrollView>
    </View>
  )
}