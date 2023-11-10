import { Text, View, ImageBackground, Alert } from 'react-native';
import { Button } from '@rneui/themed';

export default Mazo = ({mazo}) => {
    const handleConfirmacion = () =>{
        Alert.alert(
            'Confirmar acción',
            '¿Estás seguro de que deseas realizar esta acción?',
            [
              {
                text: 'Cancelar',
                style: 'cancel',
              },
              {
                text: 'Aceptar',
                onPress: () => {
                  // Lógica a ejecutar si el usuario acepta la acción
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
        style={{width: 200 , height: 200, marginBottom:15, marginRight:-15}}>
            <Text style={{alignSelf:'center',   marginTop: 10, fontSize:20 , color:'white'}}>
                {mazo.nombreMazo}
            </Text>
            <Text style={{alignSelf:'center',  marginTop: 50, fontSize:20, color:'white'}}>
                {mazo.privado? 'Privado' : 'Publico'}
            </Text>
            <Text style={{alignSelf:'center' , marginTop: 50, fontSize:20, color:'white'}}>
                {mazo.ModoJuego.nombreModo}
            </Text>
            <Button title='X' buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 50,
                marginHorizontal: 0,
                marginVertical: -10
              }}
              titleStyle={{ fontWeight: 'bold' , color:'red'}}
              onPress={handleConfirmacion}/>
        </ImageBackground>
    </View>
)
}