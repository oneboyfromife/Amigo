import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

import PAGES from '../constants/pages';
import { useAuth } from '../context/AuthContext';
import { calcHeight } from '../helper/res';

function Settings({ navigation }) {
    const { logout } = useAuth();
    const settingsOptions = [
        {
            title: 'Logout',
            icon: 'logout',
            action: logout,
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.option} onPress={item.action}>
            <Text style={styles.optionText}>{item.title}</Text>
            <AntDesign name={item.icon} size={calcHeight(3)} color="black" />
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={settingsOptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
}

const styles = {
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: calcHeight(2),
        backgroundColor: '#fff',
        margin: calcHeight(1),
    },
    optionText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#333',
    },
};

export default Settings;
