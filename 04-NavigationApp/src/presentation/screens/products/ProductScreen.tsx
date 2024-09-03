import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { globalStyles } from "../../theme/app-theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";

export const ProductScreen = () => {
    const navigation = useNavigation();
    const { id, name } = useRoute<RouteProp<RootStackParams, "Product">>().params;
    useEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, []);

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Producto</Text>
            <PrimaryButton onPress={() => navigation.navigate("Home" as never)} label="Home" />

            <Text style={{ marginBottom: 20, fontSize: 20, textAlign: "center" }}>
                {id} - {name}
            </Text>

            <PrimaryButton onPress={() => navigation.navigate("Settings" as never)} label="Ajustes" />
        </View>
    );
};
