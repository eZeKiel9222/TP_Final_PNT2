import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles.js'

const Header = ({ name }) => {
    return (
        <View>
            <Text> </Text>
            <Text> </Text>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.divider} />
        </View>
    );
};

export default Header;
