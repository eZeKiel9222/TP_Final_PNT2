import { FlatList, TouchableOpacity, View } from "react-native"
import CartaWithoutAmount from "../CartaWithoutAmount"
import styles from "../../styles/styles"

export default ({ cartas, navigation, ruta }) => {
  const renderCarta = (param) => {
    const { item } = param;
    const cardItem = item.image_uris && item.image_uris.small ?
      { cardName: item.name, image: item.image_uris.small, cardUrl: item.uri } : { cardName: item.name, image: null, cardUrl: null }

    return (
      <View style={{ flexDirection: 'row', marginLeft: 5 }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate(ruta, { carta: cardItem }) }} >
          <CartaWithoutAmount carta={cardItem} style={styles.cartaIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <FlatList
      data={cartas}
      renderItem={renderCarta}
      numColumns={2}
    />
  )

}