import React from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  Alert,
  Animated,
} from "react-native";

export default function DonateButton() {
  return (
    <View>
      {/* <Animated.View> */}
      <Pressable
        style={{
          position: "absolute",
          top: 315,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          backgroundColor: "blue",
          borderRadius: 60,
        }}
      ></Pressable>
      {/* </Animated.View> */}

      <Pressable
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 100,
          height: 100,
          backgroundColor: "#ff8c00",
          borderRadius: 50,
        }}
      >
        <Text>Donate Now</Text>
      </Pressable>
    </View>
  );
}
