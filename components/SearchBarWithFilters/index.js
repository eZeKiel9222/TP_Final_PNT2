import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from '@rneui/themed';
import buttonStyle from '../../styles/buttons.js'
import homeStyles from '../../styles/home.js';
import SearchBarComponent from '../SearchBar/index.js';

export default SearchBarWithFilters = ({ updateSearch, search, clearSearch, setFilter, SearchData, handleBusqueda }) => {
    return (
        <View>
            <SearchBarComponent updateSearch={updateSearch} search={search} clearSearch={clearSearch} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={homeStyles.secondTitle}>Filtro:</Text>
                <View>
                    <SelectList
                        setSelected={(val) => setFilter(val)}
                        data={SearchData}
                        save="key"
                        defaultOption={{ key: 'name', value: 'Nombre' }}
                    />
                </View>
                <View style={{ marginLeft: 15 }}>
                    <Button title='Buscar' buttonStyle={buttonStyle.blackButton}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={handleBusqueda} />
                </View>
            </View>
        </View>
    )
}