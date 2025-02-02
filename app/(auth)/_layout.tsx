import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Loader from "@/components/Loader";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='sign-in'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='sign-up'
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={false} />
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
