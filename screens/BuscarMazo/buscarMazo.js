import Header from '../../components/Header/index.js';
import { useState } from 'react';
import header from '../../styles/header.js'
import { View, Text } from 'react-native';
import searchService from '../../services/search.js'
import MazoFlatlist from '../../components/MazoFlatlist/index.js';
import SearchBarWithFilters from '../../components/SearchBarWithFilters/index.js';

export default ({ navigation }) => {

  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  const [data, setData] = useState()
  const [searched, setSearched] = useState(null)

  const SearchData = [{ key: 'modo', value: 'Modo de Juego' }, { key: 'user', value: 'Nickname' }, { key: 'name', value: 'Nombre de Mazo' }]

  const updateSearch = (search) => {
    setSearch(search);
  };

  const clearSearch = () => {
    setData(null)
    setSearched(null)
  }

  const handleBusqueda = () => {
    searchService.search(filter, search).then(data => {
      if (data.success === false ) {
        setData(null)
      } else {
        const midpoint = Math.floor(data.message.length / 2);
        const firstHalf = data.message.slice(0, midpoint);
        const secondHalf = data.message.slice(midpoint);

        const pairedMazos = Array.from({ length: Math.max(firstHalf.length, secondHalf.length) }, (_, index) => [
          firstHalf[index],
          secondHalf[index]
        ]);
        setData(pairedMazos);
      }
      setSearched(true)
    }).catch(error => {
      console.error('Error fetching mazos:', error);
    });
  }

  return (
    <View>
      <Header name='Buscar mazo' styleHeader={header.title} styleDivider={header.divider} />
      <View>
        <SearchBarWithFilters updateSearch={updateSearch} search={search} clearSearch={clearSearch} setFilter={setFilter} SearchData={SearchData} handleBusqueda={handleBusqueda} />
      </View>
      {data ?
        <MazoFlatlist mazos={data} navigation={navigation} ruta={'Detalle Mazo Buscado'} />
        :
        searched ?
          <Text style={{ marginTop: 20, marginLeft: 20 }}>No se encontraron mazos con ese filtro</Text> : ""
      }

    </View>

  )
}
