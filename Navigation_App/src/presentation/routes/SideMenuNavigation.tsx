import { View, useWindowDimensions } from "react-native";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { BottomTapNavigator } from "./BottonTabsNavigator";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { globalColors, globalStyles } from "../theme/theme";
import { IonIcon } from "../components/shared/IonIcon";

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: dimensions.width >= 758 ? "permanent" : "slide",

                headerShown: false,

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: "white",
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20,
                },
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen options={{ drawerIcon: ({ color }) => <IonIcon name="newspaper-outline" color={color} /> }} name="Tabs" component={BottomTapNavigator} />

            <Drawer.Screen options={{ drawerIcon: ({ color }) => <IonIcon name="person-circle-outline" color={color} /> }} name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 50,
                    alignItems: "center", // vertical
                    justifyContent: "center", //horizontal
                    flexDirection: "row",
                }}
            >
                <IonIcon name="person-outline" color="white" size={100} />
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
