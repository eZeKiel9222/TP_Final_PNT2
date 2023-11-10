import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignSelf: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        backgroundColor: 'black',
        color: 'white'
    },
    background: {
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        margin: 20
    },
    login: {
        marginTop: 200
      },
    cartaIcon:{ 
        width: 180 , 
        height: 250 , 
        margin:3
    },
    cartaDetalle:{ 
        width: 400 , 
        height: 450 , 
        alignSelf:'center',
        marginTop:15
    },
    containerStyle: {
        width: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold'
    }
});

export default styles;
