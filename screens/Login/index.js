import Header from '../../components/Header/index.js';
import { useContext, useState, useCallback } from 'react';
import GlobalContext from '../../services/GlobalContext';
import FingerprintAuthComponent from '../../components/LoginForm/FingerprintAuthComponent.js'
import styles from '../../styles/styles.js'
import { Text, View, TextInput, Image, Button, ImageBackground } from 'react-native';
import LoginForm from '../../components/LoginForm/index.js';
import RegisterForm from '../../components/RegisterForm/index.js';

export default ({ navigation }) => {
    const { showForm} = useContext(GlobalContext)

  return (
    <View style={styles.container}>
    {
      showForm ?
        <LoginForm navigation={navigation} />
        :
        <RegisterForm />
    }
  </View>
  )
}