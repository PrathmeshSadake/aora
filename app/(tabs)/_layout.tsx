import React from "react";

import { View, Image } from "react-native";
import { Tabs } from "expo-router";
import Icon from "../../constants/icons";
import { Text } from "@/components/ui/text";

function TabIcon({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) {
  return (
    <View>
      <Image
        source={icon}
        tintColor={color}
        resizeMode='contain'
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='Home'
                icon={Icon.home}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='Bookmark'
                icon={Icon.bookmark}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='Create'
                icon={Icon.plus}
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='Profile'
                icon={Icon.profile}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
