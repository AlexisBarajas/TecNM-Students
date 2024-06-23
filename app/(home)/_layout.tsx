import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={
          {
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].background,
            height: 60
          }
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              style={[{ paddingVertical: 10 }]}
              name={focused ? "home" : "home-outline"}
              color={color}
              size={30}
            />
          )
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              style={[{ paddingVertical: 10 }]}
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
