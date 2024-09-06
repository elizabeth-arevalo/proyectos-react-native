import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../../theme";
import { PrimaryButton } from "../../../components/share/PrimaryButton";
import { useCounterStore, useProfileStore } from "../../store/";

export const ProfileScreen = () => {
    const name = useProfileStore((state) => state.name);
    const email = useProfileStore((state) => state.email);
    const changeProfile = useProfileStore((state) => state.changeProfile);

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>{name}</Text>
            <Text style={styles.tittle}>{email}</Text>

            <PrimaryButton label="Cambiar el nombre" onPress={() => useProfileStore.setState({ name: "Elizabeth Arevalo" })} />
            <PrimaryButton label="Cambiar el email" onPress={() => useProfileStore.setState({ email: "elizabeth.arevalo@example.com" })} />
            <PrimaryButton label="Cambiar el regresar a Jonh" onPress={() => changeProfile("Jonh Doe", "jonh.doe@example.com")} />
        </View>
    );
};
