import { StyleSheet } from 'react-native';

const mazoStyles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 15,
        marginRight: -15
    },
    titleNombreMazo: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 20,
        color: 'white',
        backgroundColor: "black"
    },
    text: {
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 20,
        color: 'white',
        backgroundColor: "black"
    },
    containerStyle: {
        width: 40,
        marginHorizontal: 5,
        marginVertical: -15
    }
})

export default mazoStyles;