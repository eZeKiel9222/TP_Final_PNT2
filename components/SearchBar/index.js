import { SearchBar } from '@rneui/themed';

export default SearchBarComponent = ({ updateSearch, search, clearSearch}) => {
     return (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          onClear={clearSearch}
          containerStyle={{ height: 50 }}
          inputContainerStyle={{ height: 30, marginVertical: 0, fontSize: 5 }}
          inputStyle={{ fontSize: 15 }}
        />
    )
}