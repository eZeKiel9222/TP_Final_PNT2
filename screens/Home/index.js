import { useContext } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import GlobalContext from '../../services/GlobalContext';

export default ({ navigation }) => {

  const { changeHome } = useContext(GlobalContext)

  return (
    <SafeAreaView>
      <Text> </Text>
      <Text> </Text>
      <View>
        <Text>Home mis mazos</Text>
        <Button title="Ir a login" onPress={changeHome} />
      </View>
    </SafeAreaView>
  )
}