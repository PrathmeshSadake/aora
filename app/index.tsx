import React from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";

const HomePage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#161622",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#161622",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Image
            source={images.logoSmall}
            style={{
              width: 130,
              height: 84,
            }}
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            style={{
              maxWidth: 380,
              width: 380,
              height: 300,
            }}
            resizeMode='contain'
          />
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Discover Endless{"\n"}Possibilities with{" "}
              <Text style={{ color: "#FBBF24" }}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={{
                width: 136,
                height: 15,
                position: "absolute",
                bottom: -8,
                right: -32,
              }}
              resizeMode='contain'
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#E5E7EB",
              marginTop: 28,
              textAlign: "center",
            }}
          >
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push("/sign-in")}
            containerStyles={{
              width: 300,
              marginTop: 40,
            }}
            textStyles={{
              fontWeight: "bold",
            }}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
