import { createNativeStackNavigator } from '@react-navigation/native-stack';
import buscarCarta from './buscarCarta.js';
import detalleCarta from './detalleCarta.js'

export default ({ navigation }) => {
  const StackNavigator = createNativeStackNavigator()

  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Buscar Carta' component={buscarCarta} options={
        {
          headerBackVisible: false,
          headerShown: false
        }} />
             <StackNavigator.Screen name='Detalle Carta Buscada' component={detalleCarta} options={
        {
  
          
        }} />

    </StackNavigator.Navigator>
  )
}
