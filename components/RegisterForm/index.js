import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import UserService from "../../services/users";
import styles from '../../styles/styles.js'
import buttons from '../../styles/buttons.js'
import header from '../../styles/header.js'
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
    <View style={header.login}>
      <Header name='Registro Usuario' styleHeader={header.titleLogin} styleDivider={header.dividerLogin} />

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
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterPassword}
            value={Registerpassword}
            placeholder="Password"
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterNickname}
            value={RegisterNickname}
            placeholder="Nickname"
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterEmail}
            value={RegisterEmail}
            placeholder="Email"
            placeholderTextColor='grey'
          />
          <View
            style={buttons.containerbutton}>
            <Button title="Register" onPress={handleRegister} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <Button title="Return" onPress={changeForm} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )

}