import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import GlobalContext from '../../services/GlobalContext';

export default LoginForm = () => {

  const [Inputlogin, OnchangeLogin] = useState('')
  const [Inputpassword, OnchangePassword] = useState('')
  const { changeForm, changeHome } = useContext(GlobalContext)
  const { screenWidth } = useContext(GlobalContext)
  const { users } = useContext(GlobalContext)

  const handleLogin = () => {

    const foundUser = users.find((user) => user.username === Inputlogin);

    if (foundUser) {
      if (foundUser.password === Inputpassword) {
        console.log('User found, and the password matches.');
      } else {
        console.log('User found, but the password does not match.');
      }
    } else {
      console.log('User not found in the array.');
    }
    alert('Login button pressed');
  }

  return (
    <View
      style={styles.container}>
      <Image
        source={require('../../images/logo2.png')}
        style={{ width: screenWidth, height: screenWidth }}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.text} >{'Login Usuario'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={OnchangeLogin}
          value={Inputlogin}
          placeholder='Username'
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          onChangeText={OnchangePassword}
          value={Inputpassword}
          placeholder="Password"
          placeholderTextColor='white'
        />
        <View style={styles.containerbuttons}>
          <Text style={{ color: 'blue', marginLeft: 10, textDecorationLine: 'underline' }}>{'Olvide mi contraseña'}</Text>
          <Text>  </Text>
          <Text style={{ color: 'blue', marginLeft: 10, textDecorationLine: 'underline' }}>{'Olvide mi usuario'}</Text>
        </View>
        <View style={styles.containerbuttons}>
          <Button title="Login" onPress={handleLogin} />
          <Text>   </Text>
          <Button title="Register" onPress={changeForm} />
          <Text>   </Text>
          <Button title="Home" onPress={changeHome} />
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    backgroundColor: 'black',
    color: 'white'
  },
  background: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    margin: 20
  },
  containerbuttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20
  }
});