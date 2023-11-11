import { Text, View, ImageBackground, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import MazosService from '../../services/mazos'
import buttons from '../../styles/buttons.js'
import mazoStyles from '../../styles/mazos.js'

export default Mazo = ({ mazo }) => {
  const handleConfirmacion = () => {
    Alert.alert(
      'Confirmar acción',
      '¿Estás seguro de que deseas eliminar el mazo?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            MazosService.deleteMazo(mazo.id).then(data => {
              console.log(data.message)
            })
            console.log('Acción confirmada');
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View>
      <ImageBackground
        source={require('../../images/MazoImage.jpg')}
        resizeMode='contain'
        style={mazoStyles.image}>
        <Text style={mazoStyles.titleNombreMazo}>{mazo.nombreMazo}</Text>
        <Text style={mazoStyles.text}>{mazo.privado ? 'Privado' : 'Publico'}</Text>
        <Text style={mazoStyles.text}>{mazo.ModoJuego.nombreModo}</Text>
        <Button title='X' buttonStyle={buttons.blackButton}
          containerStyle={mazoStyles.containerStyle}
          titleStyle={{ fontWeight: 'bold', color: 'red' }}
          onPress={handleConfirmacion} />
      </ImageBackground>
    </View>
  )
}