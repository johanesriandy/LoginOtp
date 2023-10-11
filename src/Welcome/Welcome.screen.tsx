import React from "react";
import { Image, Text, View } from "react-native";
import StyledButton from "../Components/StyledButton";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles";

function Welcome({ navigation }: NativeStackScreenProps<ParamListBase>) {
    const navigateToLogin = () => navigation.navigate('Login');
    const navigateToRegister = () => navigation.navigate('Register');

    return (
        <View style={[styles.page, {height: '100%' }]}>
            <Image source={require("../../assets/images/welcome/welcome.png")} />
            <View style={{ marginVertical: 48, marginHorizontal: 16 }}>
                <Text style={[styles.titleText, styles.centerText]}>Explore the app</Text>
                <Text style={[styles.contentText, styles.centerText]}>Your one stop solution application</Text>
            </View>


            <StyledButton
                onPress={navigateToLogin}
                title="Sign In"
            />
            <StyledButton
                useSecondary={true}
                onPress={navigateToRegister}
                title="Create Account"
            />
        </View>
    )
}

export default Welcome;