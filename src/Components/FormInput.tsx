
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { styles } from "../styles";

export interface FormInputProps {
    title: string,
    placeholder?: string | undefined,
    value: string,
    errorMessage?: string | undefined,
    secureTextEntry?: boolean | undefined,
    onValidation?: ((validated: boolean) => void) | undefined
    onChangeText?: ((text: string) => void) | undefined
}

function FormInput(props: FormInputProps): JSX.Element {
    const [isPristine, setPristine] = useState(true)

    const onChangeText = (value: string) => {
        setPristine(false)
        props.onChangeText?.(value)
    }

    return (
        <View style={{ flexDirection: 'column', gap: 8, alignSelf: 'stretch' }}>
            <Text style={styles.contentText}>{props.title}</Text>
            <TextInput
                style={[stylesForm.input, { borderColor: props.errorMessage && !isPristine ? 'red' : 'black' }]}
                placeholder={props.placeholder}
                onChangeText={onChangeText}
                secureTextEntry={props.secureTextEntry}
                value={props.value} />

            <Text
                style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 12,
                    marginTop: -8,
                    marginHorizontal: 4,
                    color: "red"
                }}>
                {!isPristine && (props.errorMessage ?? "")}
            </Text>
        </View>
    )
}

const stylesForm = StyleSheet.create({
    input: { fontFamily: 'Inter-Regular', borderWidth: 0.5, borderRadius: 8, padding: 8 }
})

export default FormInput;

