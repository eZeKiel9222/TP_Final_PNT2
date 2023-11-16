import Header from '../../components/Header/index.js';
import header from '../../styles/header.js';
import { View } from 'react-native';
import { useState } from 'react';
import ScryfallService from '../../services/scryfall.js'
import SearchBarWithFilters from '../../components/SearchBarWithFilters/index.js';
import CartaFlatListBusqueda from '../../components/CartaFlatListBusqueda/index.js';

export default ({ navigation }) => {

  const [data, setData] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  const [searched, setSearched] = useState(null)

  const SearchData = [{ key: 'name', value: 'Nombre' }]

  const updateSearch = (search) => {
    setSearch(search);
  };

  const clearSearch = () => {
    setData(null)
    setSearched(null)
  }

  const searchCard = () => {
    ScryfallService.searchCard(search).then(data => {
      console.log(data)
      setData(data.data)
    }).catch(error => {
      alert(error.message)
    });
  }

  return (
    <View>
      <Header name='Buscar carta' styleHeader={header.title} styleDivider={header.divider} />
      <SearchBarWithFilters updateSearch={updateSearch} search={search} clearSearch={clearSearch} setFilter={setFilter} SearchData={SearchData} handleBusqueda={searchCard} />
      {
        data ?
          <CartaFlatListBusqueda cartas={data} navigation={navigation} ruta={'Detalle Carta Buscado'} />
          : null
      }

    </View>

  )
}
