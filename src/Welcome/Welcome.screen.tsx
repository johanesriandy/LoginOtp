import React from "react";
import { Image, Text, View } from "react-native";
import StyledButton from "../Components/StyledButton";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

function Welcome({ navigation }: NativeStackScreenProps<ParamListBase>) {
    return (
        <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: 16, padding: 16, backgroundColor: "#fff", height: '100%' }}>
            <Image source={require("../../assets/images/welcome/welcome.png")} />
            <View style={{ marginVertical: 48 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: 32, color: 'black' }}>Explore the app</Text>
                <Text style= {{ fontFamily: 'Inter-Regular', textAlign: 'center', marginHorizontal: 16}}>Now your finances are in one place and always under control</Text>
            </View>


            <StyledButton
                onPress={() => { navigation.navigate('Login') }}
                title="Sign In"
            />
            <StyledButton
                useSecondary={true}
                onPress={() => { navigation.navigate('Register') }}
                title="Create Account"
            />
        </View>
    )
}

export default Welcome;