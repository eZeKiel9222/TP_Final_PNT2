import { createNativeStackNavigator } from '@react-navigation/native-stack';
import misMazos from './misMazos.js';
import detalleCarta from './detalleCarta.js'
import detalleMazo from './detalleMazo.js'
import addMazo from './addMazo.js'

export default ({ navigation }) => {

      const StackNavigator = createNativeStackNavigator()

      return (
            <StackNavigator.Navigator>
                  <StackNavigator.Screen name='Mazos' component={misMazos} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                  <StackNavigator.Screen name='Detalle Mazo' component={detalleMazo} options={
                        {

                        }} />
                  <StackNavigator.Screen name='Detalle Carta' component={detalleCarta} options={
                        {


                        }} />
                  <StackNavigator.Screen name='Agregar Mazo' component={addMazo} options={
                        {


                        }} />
            </StackNavigator.Navigator>
      )
}