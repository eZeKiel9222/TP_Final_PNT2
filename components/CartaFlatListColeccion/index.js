import { FlatList, TouchableOpacity, View } from "react-native"

import styles from "../../styles/styles"
import CartaColeccion from "../CartaColeccion"

export default ({ cartas, navigation }) => {

  const renderCarta = (param) => {
    const { item } = param
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Detalle Carta Coleccion', { carta: item[0] }) }} >
          <CartaColeccion carta={item[0]} style={styles.cartaIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Detalle Carta Coleccion', { carta: item[1] }) }} >
          <CartaColeccion carta={item[1]} style={styles.cartaIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <FlatList
      data={cartas}
      renderItem={renderCarta}
    />
  )

}