import { useState, useContext } from 'react';
import { Text, View, TextInput, Image, Button } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import UserService from "../../services/users";
import styles from '../../styles/styles.js'

export default RegisterForm = () => {

  const [Registerlogin, OnchangeRegisterLogin] = useState('')
  const [Registerpassword, OnchangeRegisterPassword] = useState('')
  const { SetShowForm } = useContext(GlobalContext)
  const { changeForm } = useContext(GlobalContext)
  const { screenWidth } = useContext(GlobalContext)
  const { users } = useContext(GlobalContext)

  const handleRegister = () => {
    if (!Registerlogin) {
      alert('Login Invalido')
    }
    if (!Registerpassword) {
      alert('Password Invalido')
    }

    UserService.saveContact({ id: (users.lenght), username: Registerlogin, password: Registerpassword })
      .then(res => {
        if (res) {
          SetShowForm(true)
        }
      })
  }

  return (
    <View
      style={styles.container}>
      <Image
        source={require('../../images/logo1.png')}
        style={{ width: screenWidth, height: screenWidth }}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.text} >{'Registro Usuario'}</Text>
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
        <View
          style={styles.containerbuttons}>
          <Button title="Register" onPress={handleRegister} />
          <Text>   </Text>
          <Button title="Return" onPress={changeForm} />
        </View>
      </View>
    </View>
  )

}