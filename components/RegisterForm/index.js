import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import UserService from "../../services/users";
import styles from '../../styles/styles.js'
import Header from '../Header/index.js';
import { Button } from '@rneui/themed';

export default RegisterForm = ({ navigation }) => {
  const [Registerlogin, OnchangeRegisterLogin] = useState()
  const [Registerpassword, OnchangeRegisterPassword] = useState()
  const [RegisterNickname, OnchangeRegisterNickname] = useState()
  const [RegisterEmail, OnchangeRegisterEmail] = useState()
  const { changeForm } = useContext(GlobalContext)
  const { screenWidth } = useContext(GlobalContext)

  const handleRegister = () => {

    UserService.Register(Registerlogin, Registerpassword, RegisterNickname, RegisterEmail).then(data => {
      console.log(data)
      if (data.sucess) {
        changeForm()
      } else {
        alert(data.message)
      }
    }).catch(error => {
      console.error('Error Registrando Usuario:', error);
    });
  }

  return (
    <View style={styles.container}>
      <Header name='Registro Usuario' styleHeader={styles.titleLogin} styleDivider={styles.dividerLogin} />

      <ImageBackground
        source={require('../../images/logo1.png')}
        style={{ width: screenWidth, height: screenWidth, bottom: -screenWidth * 0.68 }}
        resizeMode="cover"
      >
        <View style={{ marginTop: 10, position: 'relative', top: -screenWidth * 0.7 }}>

          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterLogin}
            value={Registerlogin}
            placeholder='Username'
            placeholderTextColor='white'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterPassword}
            value={Registerpassword}
            placeholder="Password"
            placeholderTextColor='white'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterNickname}
            value={RegisterNickname}
            placeholder="Nickname"
            placeholderTextColor='white'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterEmail}
            value={RegisterEmail}
            placeholder="Email"
            placeholderTextColor='white'
          />
          <View
            style={styles.containerbuttons}>
            <Button title="Register" onPress={handleRegister} buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
              containerStyle={{
                width: 100,
                marginHorizontal: 30,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <Button title="Return" onPress={changeForm} buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
              containerStyle={{
                width: 100,
                marginHorizontal: 30,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )

}