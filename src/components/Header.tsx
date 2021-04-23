import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import userImg from '../assets/avatar.png';

export function Header() {
    const [userName, setUserName] = useState<string>()

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '')
        }

        loadStorageUserName()
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greetings}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>

            <Image source={userImg} style={styles.userImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },

    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    greetings: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading
    },

    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})