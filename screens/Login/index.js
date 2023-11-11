import { useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';
import styles from '../../styles/styles.js'
import { View } from 'react-native';
import LoginForm from '../../components/LoginForm/index.js';
import RegisterForm from '../../components/RegisterForm/index.js';

export default ({ navigation }) => {
  const { showForm } = useContext(GlobalContext)

  return (
    <View style={styles.container}>
      {
        showForm ?
          <LoginForm navigation={navigation} />
          :
          <RegisterForm navigation={navigation} />
      }
    </View>
  )
}