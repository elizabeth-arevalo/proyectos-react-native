import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";

export const ProfileScreen = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <>
            <HamburgerMenu />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    marginTop: top + 20,
                }}
            >
                <Text style={{ marginBottom: 20 }}>ProfileScreen</Text>

                <PrimaryButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} label="Abrir menú" />
            </View>
        </>
    );
};
