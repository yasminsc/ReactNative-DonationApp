import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  Alert,
  // Animated,
  // Animatable,
} from "react-native";

import Colors from "../config/Colors";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react";

export default function DonateAgain(props) {
  const [count, setCount] = useState(0);

  //Methods
  function reduceSum() {
    if (count > 49) {
      setCount(count - 50);
      UserStore.donationAmount = count - 50;
      console.log(UserStore.donationAmount);
    } else {
      setCount(count);
      UserStore.donationAmount = count;
    }
  }

  function addSum() {
    setCount(count + 50);
    UserStore.donationAmount = count + 50;
    console.log(UserStore.donationAmount);
  }

  function createRandom() {
    let random = Math.random();
    random = Math.floor(random * 1000);
    setCount(random);
    UserStore.donationAmount = random;
    console.log(UserStore.donationAmount);
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>{count} $</Text>
      {/* <Animated.View> */}
      {/* </Animated.View> */}
      <Pressable onPress={() => createRandom()} style={styles.buttonRound}>
        <Text style={styles.buttonRoundText}>Press Me</Text>
      </Pressable>
      <View style={styles.row}>
        <Pressable onPress={() => addSum()} style={styles.buttonAmount}>
          <Text>+</Text>
        </Pressable>
        <Pressable onPress={reduceSum} style={styles.buttonAmount}>
          <Text>-</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonAmount: {
    width: 30,
    height: 30,
    backgroundColor: "grey",
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
    overflow: "hidden",
    marginLeft: 10,
  },
  buttonRoundText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  buttonRound: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: Colors.buttonColor,
    borderRadius: 50,
  },
});
