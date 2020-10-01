import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import DonateAgain from "./DonateAgain";
import ThankYouScreen from "./ThankYouScreen";
import DonateScreen from "./DonateScreen";

const Tab = createBottomTabNavigator();

export default function Home({ Navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          color="#e91e63"
          size="100"
          name="Home"
          component={DonateScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Donate"
          component={DonateAgain}
          color="#e91e63"
          size="100"
          options={{
            tabBarLabel: "Donate",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Give"
          component={ThankYouScreen}
          color="#e91e63"
          size="100"
          options={{
            tabBarLabel: "Give",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
