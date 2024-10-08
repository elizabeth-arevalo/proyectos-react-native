import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SideMenuNavigator } from "./presentation/routes/SideMenuNavigation";
import { BottomTapNavigator } from "./presentation/routes/BottonTabsNavigator";

const App = () => {
    return (
        <NavigationContainer>
            <SideMenuNavigator />
        </NavigationContainer>
    );
};

export default App; // Asegúrate de que sea una exportación por defecto
