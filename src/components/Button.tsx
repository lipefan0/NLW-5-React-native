import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={style.button} activeOpacity={0.8} {...rest}>
            <Text style={style.buttontext}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16,
        height: 56,
        width: 56
    },

    buttontext: {
        color: colors.white,
        fontSize: 24,
    }
})