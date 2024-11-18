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

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {};

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

          <Text style={styles.title}>Sign Up to Aora</Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={{ marginTop: 40 }}
          />

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
            title='Sign Up'
            handlePress={submit}
            containerStyles={{ marginTop: 28 }}
            textStyles={{ fontWeight: "bold" }}
            isLoading={isSubmitting}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Have an account already? </Text>
            <Link href='/sign-in' replace style={styles.loginLink}>
              Login
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: "#E5E7EB", // text-gray-100 equivalent
    fontFamily: "pregular",
  },
  loginLink: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FBBF24", // Secondary color equivalent
    fontFamily: "psemibold",
  },
});

export default SignUp;
