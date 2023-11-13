import Carta from '../../components/Carta/index.js';
import styles from '../../styles/styles.js'
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import MazoService from '../../services/mazos.js'
import buttonStyle from '../../styles/buttons.js';

export default ({ navigation, route }) => {
  const carta = route.params.carta
  const { MazoId, CartaId } = route.params.carta.CartasMazo

  return (
    <View>
      <Carta carta={carta} style={styles.cartaDetalle} />
    </View>
  )
}