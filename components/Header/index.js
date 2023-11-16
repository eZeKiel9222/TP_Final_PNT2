import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import buttons from '../../styles/buttons'
import header from '../../styles/header'
import { Button, } from '@rneui/themed';
import GlobalContext from '../../services/GlobalContext';
import styles from '../../styles/styles';

const Header = ({ name, styleHeader, styleDivider }) => {
    const { user, setUser } = useContext(GlobalContext)

    const logout = () => {
        setUser()
    }

    return (
        <View style={{ marginTop: 30 }}>
            <View style={header.container}>
                <Text style={styleHeader}>{name}</Text>
                {
                    user ? <Button title="Logout" buttonStyle={buttons.logoutButton} onPress={logout} containerStyle={styles.containerStyle}
                        titleStyle={{ fontWeight: 'bold', color: 'black' }} /> : null
                }
            </View>
            <View style={styleDivider} />
            <Text style={{ height: 10 }}></Text>
        </View>
    );
};

export default Header;
