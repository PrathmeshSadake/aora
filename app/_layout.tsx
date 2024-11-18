import { StyleSheet, Text, View } from "react-native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <GluestackUIProvider mode='light'>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='search/[query]' options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
