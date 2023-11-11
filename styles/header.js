import { StyleSheet } from 'react-native';

const header = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 5
    },
    titleLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        padding: 5
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    login: {
        justifyContent: 'center',  // Esto centra el contenido en el eje principal (verticalmente)
        alignItems: 'center',
    }
})

export default header;