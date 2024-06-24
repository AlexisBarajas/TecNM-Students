import { ScrollView, type ScrollViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function ThemedScrollView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedScrollViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <ScrollView
      style={[
        {
          // backgroundColor,
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: Colors.light.body_background,
          paddingHorizontal: 25,
          paddingVertical: 30,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
