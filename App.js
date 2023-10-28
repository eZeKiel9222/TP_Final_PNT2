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

export default function App() {

  const [users, setUsers] = useState([])
  const [showForm, SetShowForm] = useState(defaultShowForm);
  const [showHome, SetShowHome] = useState(defaultShowHome);
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
    UserService.getUsers()
      .then(data => setUsers(data))
    console.log(users)
  }, [])

  return (
    <GlobalContext.Provider value={{ SetShowForm, SetShowHome, changeForm, changeHome, screenWidth, users }}>
      {
        showHome ?
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name='Mis mazos' component={Home} />
              <Tab.Screen name='Mi coleccion' component={MiColeccion} />
              <Tab.Screen name='Buscar carta' component={BuscarCarta} />
              <Tab.Screen name='Buscar mazo' component={BuscarMazo} />
            </Tab.Navigator>
          </NavigationContainer>
          :
          <View style={styles.container}>
            {
              showForm ?
                <LoginForm />
                :
                <RegisterForm />
            }
          </View>
      }
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