import { View, Button , Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'


export default ({ navigation }) => {
  return (
    <View>
        <Header name='Mi coleccion' styleHeader={styles.title} styleDivider={styles.divider}/>
        <TouchableOpacity
        onPress={() =>{navigation.navigate('Detalle Carta')}} >
   <Text>Ir a Detalle</Text>
        </TouchableOpacity>

    </View>
    )
}