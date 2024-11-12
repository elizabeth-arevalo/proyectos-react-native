import { StyleSheet } from "react-native";

export const colors = {
    darkGray: "#2d2d2d",
    lightGray: "#9B9B9B",
    orange: "#FF9427",
    accent: "#FFB347",
    textPrimary: "#FFFFFF",
    textSecondary: "#BBBBBB",
    background: "#1a1a1a",
    cardBackground: "#333333",
};

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },

    imagePoster: {
        flex: 1,
        borderRadius: 18,
    },

    imagePosterContainer: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderRadius: 18,
        padding: 8,
        marginBottom: 16,
        shadowColor: colors.lightGray,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        borderColor: colors.orange,
        borderWidth: 1,
        elevation: 12,
    },

    textPrimary: {
        color: colors.textPrimary,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },

    textSecondary: {
        color: colors.textSecondary,
        fontSize: 14,
        textAlign: "center",
    },

    button: {
        backgroundColor: colors.orange,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        shadowColor: colors.accent,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },

    buttonText: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
