import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={style.image} />
            }


            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title={'>'} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },

    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
    },

    image: {
        width: 292,
        height: 284,
    },

})