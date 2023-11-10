import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'
import { Button } from '@rneui/themed';
import { View, Text, TouchableOpacity} from 'react-native';
import MazoService from '../../services/mazos.js'
import CartaColeccion from '../../components/CartaColeccion/index.js';

export default ({ navigation , route}) => {
    const carta = route.params.carta
    const {UserId,CartaId} = route.params.carta.Coleccion

    const QuitarCarta = () => {
        MazoService.deleteCartaColeccion(CartaId,UserId).then(data => {
            console.log(data)
            if(data.sucess){
            navigation.navigate('Detalle Mazo')
            alert('Carta Borrada')
            }else{
              alert(data.message)
            }
           }).catch(error => {
            console.error('Error fetching user:', error);
          });
    }
  return (
<View>
<CartaColeccion carta={carta} style={styles.cartaDetalle}/>
<Button title='Quitar Carta'
                onPress={QuitarCarta}
                buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 100,
                marginHorizontal: 10,
                marginVertical: 0,
                alignSelf:'center'
              }}
              titleStyle={{ fontWeight: 'bold' }}/>
</View>
    )
}