import { Image, StyleSheet, Platform } from "react-native";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
import ThemedScrollView from "@/components/Theme/ThemedScrollView";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import SearchInputAndButton from "@/components/inputs/SearchInputAndButton";

export default function HomeScreen() {
  return (
    <ThemedScrollView>
      <ThemedView
        style={{
          gap: 20,
        }}
      >

        
        <ThemedText type="title" style={{ color: Colors.light.text_title }}>
          Haz las busquedas que necesites.
        </ThemedText>

        <SearchInputAndButton
        />
        
      </ThemedView>
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
