import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../../theme";
import { useCounterStore, useProfileStore } from "../../store";

export const HomeScreen = () => {
    const name = useProfileStore((state) => state.name);
    const email = useProfileStore((state) => state.email);
    const count = useCounterStore((state) => state.count);

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>{name}</Text>
            <Text style={styles.tittle}>{email}</Text>
            <Text>Count Screen: {count}</Text>
        </View>
    );
};
