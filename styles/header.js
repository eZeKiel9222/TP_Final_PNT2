import { StyleSheet } from 'react-native';

const header = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        margin: 2
    },
    titleLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        margin: 2
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    dividerLogin: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center', // Centra verticalmente los elementos
        justifyContent: 'space-between', // Espacio entre los elementos para alinear a la derecha
        paddingHorizontal: 20, // Espacio horizontal para evitar que los elementos se peguen a los bordes
    }
})

export default header;