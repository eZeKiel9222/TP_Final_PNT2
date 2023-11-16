import { FlatList, TouchableOpacity, View } from "react-native"
import Mazo from "../Mazo"

export default ({ mazos, navigation , ruta }) => {
  const renderMazo = (param) => {


    const { item } = param
    return (
      <View style={{ flexDirection: 'row' }}>
        {item[0]?
        <TouchableOpacity
          onPress={() => { navigation.navigate(ruta, { mazoId: item[0].id, estado: item[0].privado }) }} >
          <Mazo mazo={item[0]} />
        </TouchableOpacity>
        :
        <View></View>
  }
  { item[1]?
        <TouchableOpacity
          onPress={() => { navigation.navigate(ruta, { mazoId: item[1].id, estado: item[1].privado }) }} >
          <Mazo mazo={item[1]} />
        </TouchableOpacity>
        :
        <View></View>
  }
      </View>
    )
  }

  return (
    <FlatList
      data={mazos}
      renderItem={renderMazo}
    />
  )

}