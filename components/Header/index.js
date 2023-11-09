import React from 'react';
import { View, Text, Button } from 'react-native';

const Header = ({ name, styleHeader, styleDivider }) => {
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
