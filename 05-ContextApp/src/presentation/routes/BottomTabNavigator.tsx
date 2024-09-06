import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { ProfileScreen } from "../screens/profile/Profile";
import { IonIcon } from "../../components/share/IonIcon";

const Tab = createBottomTabNavigator();

export const BottonTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Settings" options={{ title: "Counter", tabBarIcon: ({ color }) => <IonIcon name="cog-outline" color={color} /> }} component={SettingsScreen} />
            <Tab.Screen name="Home" options={{ title: "Home", tabBarIcon: ({ color }) => <IonIcon name="home-outline" color={color} /> }} component={HomeScreen} />
            <Tab.Screen name="Profile" options={{ title: "Perfil", tabBarIcon: ({ color }) => <IonIcon name="person-circle-outline" color={color} /> }} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
