import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    size?: number;
    name: string;
    color?: string;
}

export const IonIcon = ({ size = 30, name, color = "black" }: Props) => {
    return (
        <>
            <Icon size={size} name={name} color={color} />
        </>
    );
};
