import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'
import { NavigationContainer } from '@react-navigation/native';
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
                    headerShown:false
                  }}/>
          <StackNavigator.Screen name='Detalle Carta Coleccion' component={detalleCarta} options={
                  {

                  }}/>
      </StackNavigator.Navigator>
  
    )
}
