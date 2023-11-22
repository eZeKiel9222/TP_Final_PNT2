import { createNativeStackNavigator } from '@react-navigation/native-stack';
import coleccion from './coleccion.js';
import detalleCarta from './detalleCarta.js';

export default ({ navigation }) => {
  const StackNavigator = createNativeStackNavigator()
  return (

    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Coleccion' component={coleccion} options={
        {
          headerBackVisible: false,
          headerShown: false
        }} />
      <StackNavigator.Screen name='Detalle Carta Coleccion' component={detalleCarta} options={({ route }) => ({
        headerTitle: route.params && route.params.carta ? route.params.carta.cardName : 'Detalle Carta Buscado',
      })}
      />
    </StackNavigator.Navigator>

  )
}
