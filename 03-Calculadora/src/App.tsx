import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CalculatorScreen } from "./screens/CalculatorScreen";
import { styles } from "./config/theme/app-theme";

export default function App() {
    return (
        <View style={styles.background}>
            <StatusBar style="auto" backgroundColor="black" />
            <CalculatorScreen />
        </View>
    );
}
