import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: styles.leftMenuWith,
          headerStyle: styles.headerBackground,
          headerLeft: () => (
              <Ionicons
                name="menu"
                size={40}
                color={Colors.light.icon}
                style={styles.headerLeftStyle}
              />
          ),
          headerTitleStyle: styles.headerLabel,
        }}
      >

        <Drawer.Screen
          name="(home)"
          options={{
            title: "Estudiantes",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  headerLeftStyle: {
    padding: 10,
    marginLeft: 25,
    backgroundColor: Colors.light.background_icon,
    borderRadius: 20,
  },
  headerLabel: {
    fontSize: 22,
    color: Colors.light.headerLabel,
  },
  leftMenuWith: {
    width: 280,
  },
  headerBackground: {
    backgroundColor: Colors.light.header_background,
    height: 130,
  }
});