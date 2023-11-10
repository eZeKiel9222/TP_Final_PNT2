import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import buttons from '../../styles/buttons.js'
import styles from '../../styles/styles.js'

import GlobalContext from '../../services/GlobalContext';
import * as LocalAuthentication from 'expo-local-authentication';

const FingerprintAuthComponent = () => {

    const { changeHome } = useContext(GlobalContext)

    const handleAuthenticate = () => {
        LocalAuthentication.authenticateAsync(LocalAuthentication.AuthenticationType.FINGERPRINT)
            .then(() => {
                console.log('huella ok');
                changeHome()
            })
            .catch((error) => console.log(error));
    };

    return (
        <View>
            <Button title="Huella" onPress={handleAuthenticate} buttonStyle={buttons.loginRegisterButton}
                containerStyle={styles.containerStyle}
                titleStyle={{ fontWeight: 'bold' }} />
        </View>
    );
};

export default FingerprintAuthComponent;
