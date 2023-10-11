import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Keyboard, Pressable } from 'react-native';
import { styles as screenStyles } from './Otp.styles';
import { styles as coreStyles, styles } from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otp({ navigation, route }: NativeStackScreenProps<StackParamList, 'Otp'>) {
    const { email, password } = route.params
    const [otp, setOtp] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [error, setError] = useState(false);
    const otpCodeCount = 6

    const refInput = useRef<TextInput>(null);
    const refTimer = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            // NOTE: this to handle when user dismiss the keyboard
            refInput?.current?.blur()
        });

        return () => {
            hideSubscription.remove();
        };
    }, []);

    const onOtpDidChange = (value: string) => {
        setError(false)
        setOtp(value);
        checkOtp(value);
    }

    const checkOtp = async (value: string) => {
        if (value.length != 6) {
            return
        }

        refInput?.current?.blur()

        if (value == '111111') {
            setError(false)
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('password', password)
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Welcome' },
                        { name: 'Login' }
                    ],
                })
            );
        }
        else {
            setError(true)
        }

    }

    const startTimer = () => {
        setSeconds(60)
        refTimer.current = setInterval(() => {
            setSeconds((seconds) => {
                if (seconds > 0) {
                    return seconds - 1
                }

                clearInterval(refTimer.current)
                return seconds
            })
        }, 1000)
    }

    return (
        <View
            style={{
                flexDirection: 'column',
                gap: 16,
                padding: 16,
                backgroundColor: 'white',
                height: '100%'
            }}>
            <Text style={coreStyles.titleText}>OTP Verification</Text>
            <Text style={coreStyles.contentText}>Please enter the OTP code sent to your email</Text>
            <View style={screenStyles.container}>
                <View style={screenStyles.inputsContainer}>
                    {
                        [...Array(otpCodeCount).keys()].map((index) => (
                            <Text
                                key={index}
                                style={[
                                    screenStyles.codeContainer,
                                    screenStyles.codeText,
                                    otp.length == index ? { borderColor: 'black' } : null,
                                    error ? { borderColor: 'red' } : null
                                ]}
                                onPress={() => refInput?.current?.focus()}
                            >
                                {otp.split("")[index] ?? ""}
                            </Text>
                        ))
                    }
                </View>
                <TextInput
                    style={screenStyles.hiddenInput}
                    ref={refInput}
                    maxLength={otpCodeCount}
                    keyboardType='numeric'
                    onChangeText={onOtpDidChange}
                    defaultValue={otp}
                />
            </View>
            <Text style={[
                styles.contentText,
                { color: 'red', alignSelf: 'center' }
            ]}>
                {error ? "Wrong Code has been inputted. Please try again" : ""}
            </Text>
            <Pressable
                style={{ marginTop: 56 }}
                onPress={startTimer}
                disabled={seconds > 0}
            >
                <Text
                    style={{
                        fontFamily: 'Inter-Bold',
                        alignSelf: 'center',
                        color: seconds > 0 ? 'grey' : 'black'
                    }}>
                    Resend OTP
                </Text>
            </Pressable>

            <Text
                style={{
                    fontFamily: 'Inter-Regular',
                    alignSelf: 'center',
                    marginTop: -8
                }}>
                {seconds > 0 ? `Please wait for ${seconds} second(s)` : ""}
            </Text>
        </View>
    );
};