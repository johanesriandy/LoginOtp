import { useState } from "react";
import { Button, Text, View } from "react-native";
import FormInput from "../Components/FormInput";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export function Register({ navigation }: NativeStackScreenProps<ParamListBase>): JSX.Element {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onRegisterButtonDidPress = () => 
        navigation.navigate('Login')

    return (
        <View style={{ flexDirection: 'column', gap: 16, padding: 16, backgroundColor:"#fff", height: '100%' }}>
            <Text style={{ fontSize: 28 }}>Sign Up</Text>
            <FormInput
                title="Email Address"
                placeholder="Email"
                value={email}
                onChangeText={setEmail} />
            <FormInput
                title="Password"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword} />
            <FormInput
                title="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword} />
            <Button
                onPress={onRegisterButtonDidPress}
                title="Sign Up"
                color="#000"
            />
        </View>
    )
}

export default Register;