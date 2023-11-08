import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles.js'


const Header = ({ name, styleHeader , styleDivider }) => {
    return (
        <View>
            <Text> </Text>
            <Text> </Text>
            <Text style={styleHeader}>{name}</Text>
            <View style={styleDivider} />
        </View>
    );
};

export default Header;
