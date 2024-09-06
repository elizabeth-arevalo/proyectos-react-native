import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../theme";

interface Props {
    label: string;
    onPress: () => void;
    color?: string;
}

export const PrimaryButton = ({ label, onPress, color = "black" }: Props) => {
    return (
        <Pressable onPress={() => onPress()} style={styles.PrimaryButton}>
            <Text>{label}</Text>
        </Pressable>
    );
};
