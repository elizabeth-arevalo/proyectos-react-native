import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { Text } from "react-native";
import { TopTabsNavigator } from "./TopTabsNavigator";
import { StackNavigator } from "./StackNavigator";
import { IonIcon } from "../components/shared/IonIcon";
const Tab = createBottomTabNavigator();

export const BottomTapNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Tab2"
            sceneContainerStyle={{
                backgroundColor: globalColors.background,
            }}
            screenOptions={{
                // headerShown: false
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: "trasparent",
                    shadowColor: "trasparent",
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen name="Tab1" options={{ title: "Share", tabBarIcon: ({ color }) => <IonIcon name="arrow-undo-outline" color={color} /> }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: "Home", tabBarIcon: ({ color }) => <IonIcon name="home-outline" color={color} /> }} component={StackNavigator} />
            <Tab.Screen name="Tab3" options={{ title: "Perfil", tabBarIcon: ({ color }) => <IonIcon name="person-circle-outline" color={color} /> }} component={TopTabsNavigator} />
        </Tab.Navigator>
    );
};
