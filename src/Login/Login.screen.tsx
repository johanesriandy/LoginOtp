import { useState } from "react";
import { Text, View } from "react-native";
import FormInput from "../Components/FormInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";
import StyledButton from "../Components/StyledButton";
import { styles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackParamList } from "../App";

export function Login(props: NativeStackScreenProps<StackParamList, 'Login'>): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const onLoginButtonDidPress = async () => {
        try {
            let savedEmail = await AsyncStorage.getItem('email')
            let savedPassword = await AsyncStorage.getItem('password')

            let validEmail = savedEmail && savedEmail === email
            let validPasscode = savedPassword && savedPassword === password

            

            if (validEmail && validPasscode) {
                setError(false)
                props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Dashboard' }
                        ],
                    })
                );
            } else {
                setError(true)
            }

        } catch (error) {
            setError(true)
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', padding: 16 }}>
            <View style={{
                flexDirection: 'column',
                justifyContent: "center",
                gap: 16, alignItems: 'flex-start'
            }}>
                <Text style={styles.titleText}>Login</Text>
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
                <Text style={[styles.contentText, { color: 'red' }]}>{error ? "Wrong password and/or email" : ""}</Text>
            </View>
            <StyledButton
                onPress={onLoginButtonDidPress}
                title="Sign In"
            />
        </View>
    )
}

export default Login;