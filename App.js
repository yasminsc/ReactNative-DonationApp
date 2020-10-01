import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import BottomTabNavigator from "./app/components/BottomTabNavigator";
import { AuthContext } from "./app/components/Context";
import { MainStackNavigator } from "./app/components/StackNavigation";
import UserStore from "./app/store/UserStore";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const autoContext = useMemo(() => ({
    signIn: () => {
      setIsLoading(false);
      setUserToken("fgk");
      console.log("user token is" + userToken);
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken(null);
      UserStore.token = null;
      UserStore.donationAmount = "0";
      console.log("user token is" + userToken);
    },
    signInFB: (fbtoken, name) => {
      setIsLoading(false);
      setUserToken(fbtoken);
      UserStore.connectedWithFB = true;
      UserStore.token = fbtoken;
      UserStore.name = name;
      console.log("user token is" + fbtoken);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={autoContext}>
      <NavigationContainer>
        {userToken != null ? <BottomTabNavigator /> : <MainStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
