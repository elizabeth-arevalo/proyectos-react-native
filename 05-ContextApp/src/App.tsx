import { StyleSheet, Text, View } from "react-native";
import { BottonTabNavigator } from "./presentation/routes/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./theme";

export default function App() {
    return (
        <NavigationContainer>
            <BottonTabNavigator />
        </NavigationContainer>
    );
}
