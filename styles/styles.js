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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
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
    containerbuttons: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 20
    },
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
    login:{
        marginTop: 200
      }
});

export default styles;
