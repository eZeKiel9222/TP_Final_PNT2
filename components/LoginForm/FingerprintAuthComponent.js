import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

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
            <Button title="Huella" onPress={handleAuthenticate} buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
            }}
                containerStyle={{
                    width: 100,
                    marginHorizontal: 10,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }} />
        </View>
    );
};

export default FingerprintAuthComponent;
