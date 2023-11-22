import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GlobalContext, { defaultShowForm } from './services/GlobalContext';
import Home from './screens/Home';
import MiColeccion from './screens/MiColeccion';
import BuscarMazo from './screens/BuscarMazo';
import BuscarCarta from './screens/BuscarCarta';
import Login from './screens/Login';
import asyncStorage from './services/asyncStorage';

export default function App() {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
  const [mazos, setMazos] = useState(null)
  const [mazoss, setMazoss] = useState(null)
  const [showForm, SetShowForm] = useState(defaultShowForm);
  const screenWidth = Dimensions.get('window').width;

  const Tab = createMaterialBottomTabNavigator()

  const changeForm = () => {
    SetShowForm(!showForm)
  }

  const changeHome = () => {
    SetShowHome(!showHome)
  }

  useEffect(() => {
    asyncStorage.getData('AuthData').then(data =>{
      console.log('Mostramos Data cacheada :' ,data)
      if(data){
        setUser(data)
         }
    })
  }, [])

  useEffect(() => {
    if(user){
      console.log('Se carga Cache con Datos')
      asyncStorage.storeData('AuthData',user)
    }else{
      console.log('Se limpia la cache al deslogear')
      asyncStorage.clearAll()
    }
  }, [user])

  return (
    <GlobalContext.Provider value={{ SetShowForm, changeForm, changeHome, screenWidth, users, user, setUser, showForm , mazos,setMazos, mazoss,setMazoss }}>
      <NavigationContainer>
        {
          user ?
            <Tab.Navigator>
              <Tab.Screen name='Mis Mazos' component={Home} />
              <Tab.Screen name='Mi coleccion' component={MiColeccion} />
              <Tab.Screen name='Buscar carta' component={BuscarCarta} />
              <Tab.Screen name='Buscar mazo' component={BuscarMazo} />
            </Tab.Navigator>
            :
            <Tab.Navigator>
              <Tab.Screen name='Login' component={Login} />
              <Tab.Screen name='Buscar carta' component={BuscarCarta} />
              <Tab.Screen name='Buscar mazo' component={BuscarMazo} />
            </Tab.Navigator>
        }
      </NavigationContainer>
    </GlobalContext.Provider>

  );
}
