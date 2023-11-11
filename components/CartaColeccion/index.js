import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/styles';

export default Carta = ({ carta, style }) => {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    return (
        <View style={{ alignContent: 'center' }}>
            <Image source={carta.image}
                placeholder={blurhash}
                contentFit="contain"
                transition={1000}
                style={style}
                key={carta.id} />
            <View style={styles.circularContainer}>
                <Text style={styles.text}>x{carta.Coleccion.amount}</Text>
            </View>
        </View>
    )
}