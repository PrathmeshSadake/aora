import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    // Empty submit function as requested
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View
          style={[
            styles.container,
            { minHeight: Dimensions.get("window").height - 100 },
          ]}
        >
          <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.logo}
          />

          <Text style={styles.title}>Log in to Aora</Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 28 }}
            keyboardType='email-address'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 28 }}
          />

          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles={{ marginTop: 28 }}
            isLoading={isSubmitting}
            textStyles={{
              fontWeight: "bold",
            }}
          />

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Link href='/sign-up' replace style={styles.signupLink}>
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#1C1C1E", // Primary color equivalent
    flex: 1,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 115,
    height: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 40,
    fontFamily: "psemibold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  signupText: {
    fontSize: 18,
    color: "#E5E7EB",
    fontFamily: "pregular",
  },
  signupLink: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FBBF24", // Secondary color equivalent
    fontFamily: "psemibold",
  },
});

export default SignIn;
