import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import FingerprintAuthComponent from '../LoginForm/FingerprintAuthComponent'
import styles from '../../styles/styles.js'
import buttons from '../../styles/buttons.js'
import header from '../../styles/header.js'
import Header from '../Header/index.js'
import { Button } from '@rneui/themed';
import UserService from '../../services/users.js'
export default LoginForm = ({ navigation }) => {

  const [Inputlogin, OnchangeLogin] = useState('')
  const [Inputpassword, OnchangePassword] = useState('')
  const { changeForm, changeHome } = useContext(GlobalContext)
  const { screenWidth } = useContext(GlobalContext)
  const { users, setUser } = useContext(GlobalContext)

  const handleLogin = () => {
    UserService.Login(Inputlogin, Inputpassword).then(data => {
      console.log(data)
      if (data.sucess) {
        setUser(data.message)
        navigation.navigate('Mis Mazos')
      } else {
        alert(data.message)
      }
    }).catch(error => {
      console.error('Error fetching user:', error);
    });
  }

  return (
    <View style={header.login}>
      <Header name='Login' styleHeader={header.titleLogin} styleDivider={header.dividerLogin} />
      <ImageBackground
        source={require('../../images/logo2.png')}
        style={{ width: screenWidth, height: screenWidth }}
        resizeMode="cover">
        <View style={{ marginTop: screenWidth * 0.99 }}>
          <TextInput
            style={styles.input}
            onChangeText={OnchangeLogin}
            value={Inputlogin}
            placeholder='Username'
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangePassword}
            value={Inputpassword}
            placeholder="Password"
            placeholderTextColor='grey'
          />
          <View style={buttons.containerbutton}>
            <Button title="Login" onPress={handleLogin} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <Button title="Register" onPress={changeForm} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <FingerprintAuthComponent />
          </View>
        </View>
      </ImageBackground>

    </View>
  )

}