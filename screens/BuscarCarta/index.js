import Header from '../../components/Header/index.js';
import { Button } from '@rneui/themed';
import header from '../../styles/header.js';
import buttonStyle from '../../styles/buttons.js';
import styles from '../../styles/styles.js';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import { useState } from 'react';
import ScryfallService from '../../services/scryfall.js'

export default ({ navigation }) => {

  const [nombreCarta, OnchangeNombreCarta] = useState()
  const [data, setData] = useState()

  const searchCard = () => {
    ScryfallService.searchCard(nombreCarta).then(data => {
      console.log(data)
      setData(data.data)
    }).catch(error => {
      alert(error.message)
    });
  }

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Text>{item.name}</Text>
      {item.image_uris && item.image_uris.small ? (
        <Image source={{ uri: item.image_uris.small }} style={{ width: 100, height: 100 }} />
      ) : (
        <Text>No hay imagen disponible</Text>
      )}

    </View>
  );

  return (
    <View>
      <Header name='Buscar carta' styleHeader={header.title} styleDivider={header.divider} />
      <View style={{ backgroundColor: 'gainsboro', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.smallInput}
          onChangeText={OnchangeNombreCarta}
          value={nombreCarta}
          placeholder='Nombre carta'
          placeholderTextColor='grey'
        />
        <Button title='Buscar carta' buttonStyle={buttonStyle.blackButton}
          onPress={searchCard} />
      </View>
      <Text></Text>
      {
        data ?
          <FlatList
            data={data}
            renderItem={renderItem}
          />
          : null
      }

    </View>

  )
}
