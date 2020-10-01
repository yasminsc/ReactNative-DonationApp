import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./StackNavigation";
import ThankYouScreen from "../screens/ThankYouScreen";
import DonateScreen from "../screens/DonateScreen";
import MyDonations from "../screens/MyDonations";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        color="#e91e63"
        size="100"
        name="login"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Logout",
          //tabBarVisible: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        color="#e91e63"
        size="100"
        name="Home"
        component={DonateScreen}
        options={{
          headerShown: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={MyDonations}
        color="#e91e63"
        size="100"
        options={{
          tabBarLabel: "My Donations",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thank You"
        component={ThankYouScreen}
        color="#e91e63"
        size="100"
        options={{
          tabBarLabel: "Thank You",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
