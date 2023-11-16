import CartaWithoutAmount from '../../components/CartaWithoutAmount/index.js';
import styles from '../../styles/styles.js'
import { View } from 'react-native';

export default ({ navigation, carta }) => {

  return (
    <View>
      <CartaWithoutAmount carta={carta} style={styles.cartaDetalle} />
    </View>
  )
}