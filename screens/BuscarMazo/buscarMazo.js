import Header from '../../components/Header/index.js';
import { useState } from 'react';
import header from '../../styles/header.js'
import { SearchBar } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text } from 'react-native';
import homeStyles from '../../styles/home.js';
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js'
import searchService from '../../services/search.js'
import MazoFlatlist from '../../components/MazoFlatlist/index.js';


export default ({ navigation }) => {

  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  const [data, setData] = useState()

  const SearchData = [{ key: 'modo', value: 'Modo de Juego' }, { key: 'user', value: 'Nickname' }, { key: 'name', value: 'Nombre de Mazo' }]

  const updateSearch = (search) => {
    setSearch(search);
  };
  const clearSearch = () => {
    setData(null)
  }

  const handleBusqueda = () => {
    searchService.search(filter, search).then(data => {
      console.log(data.message)
      const midpoint = Math.ceil(data.message.length / 2);
      console.log(midpoint)
      const firstHalf = data.message.slice(0, midpoint);
      console.log(firstHalf)
      const secondHalf = data.message.slice(-midpoint);
      console.log(secondHalf)
      const pairedMazos = Array.from({ length: Math.min(firstHalf.length, secondHalf.length) }, (_, index) => [
        firstHalf[index],
        secondHalf[index]
      ]);

      console.log(pairedMazos)
      setData(pairedMazos);
    }).catch(error => {
      console.error('Error fetching mazos:', error);
    });
  }

  return (
    <View>
      <Header name='Buscar mazo' styleHeader={header.title} styleDivider={header.divider} />
      <Text></Text>
      <View style={{}} >
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          onClear={clearSearch} />
        <View style={{ width: 200, flexDirection: 'row' }}>
          <View>
            <Text style={homeStyles.title}>Filtro:</Text>
          </View>
          <View style={{ marginTop: 15, marginLeft: -10 }}>
            <SelectList
              setSelected={(val) => setFilter(val)}
              data={SearchData}
              save="key"
            />
          </View>
          <View style={{ marginTop: 15, marginLeft: 15 }}>
            <Button title='Buscar' buttonStyle={buttonStyle.blackButton}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={handleBusqueda} />
          </View>
        </View>
      </View>
      {data ?
        <MazoFlatlist mazos={data} navigation={navigation} ruta={'Detalle Mazo Buscado'} />
        :
        <View></View>
      }

    </View>

  )
}
