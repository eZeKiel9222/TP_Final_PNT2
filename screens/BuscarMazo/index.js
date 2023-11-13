import Header from '../../components/Header/index.js';
import { useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';
import header from '../../styles/header.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import buscarMazo from './buscarMazo.js';
import detalleMazo from './detalleMazo.js';
import detalleCarta from './detalleCarta.js';


export default ({ navigation }) => {
  const StackNavigator = createNativeStackNavigator()

  const { changeHome } = useContext(GlobalContext)

  return (
    <StackNavigator.Navigator>
    <StackNavigator.Screen name='Buscar Mazos' component={buscarMazo} options={
          {
                headerBackVisible: false,
                headerShown: false
          }} />
    <StackNavigator.Screen name='Detalle Mazo Buscado' component={detalleMazo} options={
          {

          }} />
    <StackNavigator.Screen name='Detalle Carta Buscado' component={detalleCarta} options={
          {

          }} />


</StackNavigator.Navigator>
)
}
