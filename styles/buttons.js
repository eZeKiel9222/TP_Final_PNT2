import { StyleSheet } from 'react-native';

const buttons = StyleSheet.create({
    containerbutton: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 20
    },
    loginRegisterButton: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30
    },
    logoutButton: {
        backgroundColor: 'light-blue',
        borderWidth: 1,
        textAlignVertical: 'center',
        borderRadius: 30,
        color: "black",
    }
})

export default buttons;