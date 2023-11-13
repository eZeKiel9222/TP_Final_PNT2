import { FlatList, TouchableOpacity, View } from "react-native"
import Carta from "../Carta"
import styles from "../../styles/styles"

export default ({ cartas, navigation, ruta }) => {

  const renderCarta = (param) => {
    const { item } = param

    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate(ruta, { carta: item[0] }) }} >
          <Carta carta={item[0]} style={styles.cartaIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate(ruta, { carta: item[1] }) }} >
          <Carta carta={item[1]} style={styles.cartaIcon} />
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