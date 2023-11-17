import Carta from '../../components/Carta/index.js';
import styles from '../../styles/styles.js'
import { Button } from '@rneui/themed';
import { ScrollView, View, Text } from 'react-native';
import buttonStyle from '../../styles/buttons.js';
import { useContext, useState, useCallback } from 'react';
import GlobalContext from '../../services/GlobalContext';
import { SelectList } from 'react-native-dropdown-select-list'
import CartaService from '../../services/carta.js'
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation, route }) => {
  const carta = route.params.carta
  const { MazoId, CartaId } = route.params.carta.CartasMazo
  const { user, mazoss } = useContext(GlobalContext)
  const [mazoAgregar, setMazoAgregar] = useState()
  const [MazoData, setMazoData] = useState()

  useFocusEffect(
    useCallback(() => {
      if (user) {
        const data = mazoss.map(item => ({ key: item.id, value: item.nombreMazo }));
        data.push({ key: 'Coleccion', value: 'Mi Coleccion' })
        setMazoData(data)
      }
    }, [])
  );

  const Agregar = () => {
    if (mazoAgregar === 'Coleccion') {
      CartaService.addCartaColeccion(user.userInfo.id, CartaId).then(data => {
        console.log(data)
        if (data.success) {
          alert('Carta Agregada a Coleccion')
        } else {
          alert(data.message)
        }
      }).catch(error => {
        console.error('Error fetching user:', error);
      });
    } else {
      CartaService.addCartaMazo(mazoAgregar, CartaId).then(data => {
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
  }

  return (
    <View>
      <ScrollView>
        <Carta carta={carta} style={styles.cartaDetalle} />
        {user ?
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <SelectList
              setSelected={(val) => setMazoAgregar(val)}
              data={MazoData}
              save="key"
            />
            <Button title='Agregar Carta'
              onPress={Agregar}
              buttonStyle={buttonStyle.blackButton}
              containerStyle={{
                marginLeft: 10
              }}
              titleStyle={{ fontWeight: 'bold' }} />
          </View>
          : <View></View>
        }
      </ScrollView>
    </View>
  )
}