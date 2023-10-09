import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import FormInput from "../Components/FormInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";

export function Login(props: NativeStackScreenProps<ParamListBase>): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginButtonDidPress = () => props.navigation.popToTop()

    return (
        <View style={{ flexDirection: 'column', gap: 16, margin: 16 }}>
            <Text style={{ fontSize: 28 }}>Login</Text>
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
            <StyledButton
                useSecondary={true}
                onPress={onLoginButtonDidPress}
                title="Sign In"
            />
        </View>
    )
}

export default Login;