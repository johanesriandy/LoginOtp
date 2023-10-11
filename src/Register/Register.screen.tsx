import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import FormInput from "../Components/FormInput";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles";
import StyledButton from "../Components/StyledButton";

export function Register({ navigation }: NativeStackScreenProps<ParamListBase>): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isEmailValidated, setEmailValidation] = useState(false);
    const [isPasswordValidated, setPasswordValidation] = useState(false);
    const [isPasswordConfimed, setPasswordConfirmation] = useState(false);

    const emailRegExp = /[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/

    const onFormChangeEmail = (value: string) => {
        setEmailValidation(emailRegExp.test(value))
        setEmail(value)
    }

    const onFormChangePassword = (value: string) => {
        setPasswordValidation(passwordRegExp.test(value))
        setPassword(value)
    }

    const onFormChangeConfirmPassword = (value: string) => {
        setPasswordConfirmation(value == password)
        setConfirmPassword(value)
    }

    const onRegisterButtonDidPress = () => {
        if (isEmailValidated && isPasswordValidated && isPasswordValidated) {
            navigation.navigate('Otp', { email: email, password: password })
        }
    }


    const onLoginTextButtonDidPress = () =>
        navigation.navigate('Login')

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', padding: 16 }}>
            <View style={{
                flexDirection: 'column',
                justifyContent: "center",
                gap: 16, alignItems: 'flex-start'
            }}>
                <Text style={styles.titleText}>Create account</Text>
                <FormInput
                    title="Email Address"
                    placeholder="Email"
                    value={email}
                    errorMessage={!isEmailValidated ? "Email is invalid" : ""}
                    onChangeText={onFormChangeEmail}
                />
                <FormInput
                    title="Password"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    errorMessage={!isPasswordValidated ? "Password should have at least 8 characters, 1 uppercase, 1 lowercase and 1 symbol(s)" : ""}
                    onChangeText={onFormChangePassword}
                />
                <FormInput
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    errorMessage={!isPasswordConfimed ? "Password do not match" : ""}
                    onChangeText={onFormChangeConfirmPassword}
                />
            </View>

            <View style={{ flexDirection: 'column', gap: 16 }}>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                    <Text style={[styles.contentText, { textAlign: 'center' }]}>Already have an account? </Text>
                    <Pressable onPress={onLoginTextButtonDidPress}><Text style={{ fontFamily: 'Inter-Bold' }}>Log in</Text></Pressable>
                </View>
                <StyledButton
                    onPress={onRegisterButtonDidPress}
                    disabled={!isEmailValidated || !isPasswordValidated || !isPasswordConfimed}
                    title="Sign Up"
                />
            </View>



        </View>

    )
}

export default Register;