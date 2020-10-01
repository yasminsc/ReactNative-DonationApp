import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DonateAgain from "../screens/DonateAgain";
import ThankYouScreen from "../screens/ThankYouScreen";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import DonateScreen from "../screens/DonateScreen";
import { AuthContext } from "../components/Context";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#add8e6",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DonateScreen" component={DonateScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      <Stack.Screen name="DonateAgain" component={DonateAgain} />
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//   );
// }

export {
  MainStackNavigator,
  // ContactStackNavigator
};
