import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Navigation } from "./presentation/routes/Navigation";

export const App = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
};

export default App;
