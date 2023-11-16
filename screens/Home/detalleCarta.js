import Carta from '../../components/Carta/index.js';
import styles from '../../styles/styles.js'
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import MazoService from '../../services/mazos.js'
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation, route }) => {
  const carta = route.params.carta
  const { MazoId, CartaId } = route.params.carta.CartasMazo

  const QuitarCarta = () => {
    MazoService.deleteCartaMazo(CartaId, MazoId).then(data => {
      console.log(data)
      if (data.success) {
        navigation.navigate('Detalle Mazo')
        alert('Carta Borrada')
      } else {
        alert(data.message)
      }
    }).catch(error => {
      console.error('Error fetching user:', error);
    });
  }
  return (
    <View>
      <Carta carta={carta} style={styles.cartaDetalle} />
      <Button title='Quitar Carta'
        onPress={QuitarCarta}
        buttonStyle={buttonStyle.blackButton}
        containerStyle={{
          width: 100,
          marginHorizontal: 10,
          marginVertical: 0,
          alignSelf: 'center'
        }}
        titleStyle={{ fontWeight: 'bold' }} />
    </View>
  )
}