import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import StyledButton from '../Components/StyledButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import { CommonActions } from '@react-navigation/native';

export function Dashboard(props: NativeStackScreenProps<StackParamList, 'Dashboard'>): JSX.Element {
    const onLogOutDidPress = async () => {
        await AsyncStorage.multiRemove(['email', 'password'])
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Welcome' }
                ],
            })
        );
    }
    return (
        <View style={[styles.page, { justifyContent: 'space-evenly', height: '100%' }]}>
            <Text style={ styles.titleText }>Welcome</Text>
            <StyledButton
                title={'Logout'}
                onPress={ onLogOutDidPress }
            />
        </View>
    )
} 