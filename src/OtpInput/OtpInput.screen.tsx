import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Keyboard } from 'react-native';
import { styles } from './OtpInput.styles';

export default function OtpInput() {
    const [otp, setOtp] = useState("");
    const otpCodeCount = 6

    const refInput = React.useRef<TextInput>(null);

    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            // NOTE: this to handle when user dismiss the keyboard
            refInput?.current?.blur()
        });

        return () => {
            hideSubscription.remove();
        };
    }, []);

    const onOtpDidChange = (newOtp: string) => {
        setOtp(newOtp);

        if (newOtp.length == 6) {
            refInput?.current?.blur()
        }
    }

    return (
        <View style={{ flexDirection: 'column', gap: 16, margin: 16 }}>
            <Text style={{ fontSize: 28 }}>OTP Verification</Text>
            <Text>Please enter the OTP code sent to your email</Text>
            <View style={styles.container}>
                <View style={styles.inputsContainer}>
                    {
                        [...Array(otpCodeCount).keys()].map((index) => (
                            <Text
                                key={index}
                                style={[styles.codeContainer, styles.codeText]}
                                onPress={() => refInput?.current?.focus()}
                            >
                                {otp.split("")[index] ?? ""}
                            </Text>
                        ))
                    }
                </View>
                <TextInput
                    style={styles.hiddenInput}
                    ref={refInput}
                    maxLength={otpCodeCount}
                    keyboardType='numeric'
                    onChangeText={onOtpDidChange}
                    defaultValue={otp}
                />
            </View>
        </View>
    );
};