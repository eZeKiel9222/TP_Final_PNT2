import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import buttons from '../../styles/buttons.js'
import styles from '../../styles/styles.js'

import GlobalContext from '../../services/GlobalContext';
import * as LocalAuthentication from 'expo-local-authentication';

const FingerprintAuthComponent = ({ navigation }) => {

    const { users, setUser } = useContext(GlobalContext)

    const handleAuthenticate = () => {
        LocalAuthentication.authenticateAsync(LocalAuthentication.AuthenticationType.FINGERPRINT)
            .then(() => {
                console.log('huella ok');
                //user hardcodeado
                setUser({
                    "accessToken": "XXXXXX",
                    "userInfo": {
                        "id": 2,
                        "nickName": "mlarotonda",
                        "email": "mauri@hotmail.com"
                    }
                })
                navigation.navigate('Mis Mazos')
            })
            .catch((error) => console.log(error));
    };

    return (
        <View>
            <Button title="Huella" onPress={handleAuthenticate} buttonStyle={buttons.blackButton}
                containerStyle={styles.containerStyle}
                titleStyle={{ fontWeight: 'bold' }} />
        </View>
    );
};

export default FingerprintAuthComponent;
