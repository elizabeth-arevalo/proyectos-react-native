import { StyleSheet } from "react-native";

export const colors = {
    darkGray: "#2d2d2d",
    lightGray: "#9B9B9B",
    orange: "#FF9427",

    textPrimary: "#FFFFFF",
    textSecondary: "#666666",
    background: "#000000",
};

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },

    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end",
    },

    mainResults: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: "right",
        marginBottom: 10,
        fontWeight: "400",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 75,
        width: 75,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 30,
        padding: 10,
        color: "#FFFFFF",
        textAlign: "center",
    },

    subResults: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300",
    },
});
