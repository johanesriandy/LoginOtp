import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export interface StyledButtonProps {
    useSecondary?: boolean;
    title: string;
    onPress?: (() => void) | undefined;
}

function StyledButton({ useSecondary = false, title, onPress }: StyledButtonProps): JSX.Element {
    return (
        <Pressable
            style={[styles.button, useSecondary ? secondaryStyles.button : null]}
            onPress={onPress}>
            <Text style={[styles.text, useSecondary ? secondaryStyles.text : null]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#747474',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
});

const secondaryStyles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#747474',
    },
    text: {
        color: 'black',
    },
});

export default StyledButton;