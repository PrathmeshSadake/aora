import React from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;

  if (!isLoading) return null;

  return (
    <View style={[styles.container, { height: screenHeight }]}>
      <ActivityIndicator
        animating={isLoading}
        color='#fff'
        size={osName === "ios" ? "large" : 50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(28, 28, 30, 0.6)", // bg-primary/60 equivalent
    zIndex: 10,
  },
});

export default Loader;