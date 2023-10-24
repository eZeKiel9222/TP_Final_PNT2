import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View ,SafeAreaView , TextInput,Image,Dimensions, Button} from 'react-native';
import UserService from "./services/users";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import GlobalContext, {defaultShowForm} from './services/GlobalContext';


export default function App() {


  const [users,setUsers] = useState([])
  const [showLogin,SetShowForm] = useState(defaultShowForm)
  const screenWidth = Dimensions.get('window').width;


  const changeForm = () => {
    SetShowForm(!showLogin)
  }


  useEffect(() => {
    console.log("Aqui lo levanto la primera vez...")
    UserService.getUsers()
      .then(data => setUsers(data))
      console.log(users)
  }, [])





  return (
    <GlobalContext.Provider value={{SetShowForm,changeForm,screenWidth,users}}>
    <View style={styles.container}>
      {
      showLogin ? 
      //Login
      <LoginForm/>
      
      :
      // REGISTRO
      <RegisterForm />
      }
      </View>
      </GlobalContext.Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black' ,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:'white',
    padding: 10,
    backgroundColor: 'black',
    color:'white'
  },
  background:{
    backgroundColor: 'black',
  },
  text:{
    color:'white',
    fontSize:20,
    alignSelf:'center',
    margin: 20
  },
  containerbuttons:{
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20
  }
});
