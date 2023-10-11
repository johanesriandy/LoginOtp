import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        padding: 16,
        backgroundColor: "#fff",
    },

    titleText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 32,
        color: 'black'
    },

    contentText: {
        fontFamily: 'Inter-Regular',
    },

    centerText: {
        textAlign: 'center',
    }
})