
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export interface FormInputProps {
    title: string,
    placeholder?: string | undefined,
    value: string,
    secureTextEntry?: boolean | undefined,
    onChangeText?: ((text: string) => void) | undefined
}

function FormInput(props: FormInputProps): JSX.Element {
    return (
        <View style={{ flexDirection: 'column', gap: 8 }}>
            <Text>{props.title}</Text>
            <TextInput
                style={styles.formInput}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                value={props.value} />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: { borderWidth: 0.5, borderRadius: 8, padding: 8 }
})

export default FormInput;

