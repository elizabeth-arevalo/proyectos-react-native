import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "../../../theme";
import { useCounterStore } from "../../store/count-profile";
import { PrimaryButton } from "../../../components/share/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {
    const count = useCounterStore((state) => state.count);
    const incrementBy = useCounterStore((state) => state.incrementBy);
    const decrementBy = useCounterStore((state) => state.decrementBy);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: `Contador: ${count}`,
        });
    }, [count]);

    return (
        <View style={styles.container}>
            <Text>Count Screen: {count}</Text>
            <PrimaryButton label="+1" onPress={() => incrementBy(1)} />
            <PrimaryButton label="-1" onPress={() => decrementBy(1)} />
        </View>
    );
};
