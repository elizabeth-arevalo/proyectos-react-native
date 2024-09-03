import React from "react";
import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../theme/app-theme";
import { useNavigation } from "@react-navigation/native";

interface Props {
    label: string;
    onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
    return (
        <Pressable style={globalStyles.primaryButton} onPress={onPress}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    );
};
