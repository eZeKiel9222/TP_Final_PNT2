import React, { useContext } from 'react';
import { View, Button } from 'react-native';
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
            <Button title="Huella" onPress={handleAuthenticate} />
        </View>
    );
};

export default FingerprintAuthComponent;
