import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import buttons from '../../styles/buttons'
import header from '../../styles/header'
import { Button,  } from '@rneui/themed';
import GlobalContext from '../../services/GlobalContext';

const Header = ({ name, styleHeader, styleDivider }) => {
    const { user, setUser } = useContext(GlobalContext)

    const logout = () => {
        setUser()
    }

    return (
        <View>
            <Text> </Text>
            <Text> </Text>
            <View style={header.container}>
                <Text style={styleHeader}>{name}</Text>
                {
                    user ? <Button title="Logout" buttonStyle={buttons.logoutButton} onPress={logout} /> : null
                }
                
            </View>
            <View style={styleDivider} />
        </View>
    );
};

export default Header;
