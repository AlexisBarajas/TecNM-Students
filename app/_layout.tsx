import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(home)" options={{ title: "Estudiantes" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
