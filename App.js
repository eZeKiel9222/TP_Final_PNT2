import { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GlobalContext, { defaultShowForm, defaultShowHome } from './services/GlobalContext';
import UserService from "./services/users";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './screens/Home';
import MiColeccion from './screens/MiColeccion';
import BuscarMazo from './screens/BuscarMazo';
import BuscarCarta from './screens/BuscarCarta';
import Login from './screens/Login';


export default function App() {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
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
    console.log("Aqui lo levanto la primera vez...")
  }, [])

  return (
    <GlobalContext.Provider value={{ SetShowForm, changeForm, changeHome, screenWidth, users , user, setUser, showForm}}>
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
              <Tab.Screen name='Login' component={Login}/>
              <Tab.Screen name='Buscar carta' component={BuscarCarta} />
              <Tab.Screen name='Buscar mazo' component={BuscarMazo} />
            </Tab.Navigator>
          }
          </NavigationContainer>
    </GlobalContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  }
});