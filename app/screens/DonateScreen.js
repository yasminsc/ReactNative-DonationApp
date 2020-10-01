import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
  Pressable,
  Share,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { observer } from "mobx-react";

import DonateAgain from "./DonateAgain";
import ButtonLogOut from "../components/ButtonLogOut";
import Colors from "../config/Colors";
import UserStore from "../store/UserStore";

export default function DonateScreen(props) {
  const [value, onChangeText] = React.useState(" ");
  const [selectedValue, setSelectedValue] = useState("Fund");
  let buttonMsg = "donate " + UserStore.donationAmount + "$ now";
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

  function ButtonPressed() {
    return Alert.alert(
      "Confirmation",
      "Please confirm payment",
      [
        {
          text: "confirm",
          onPress: () =>
            props.navigation.navigate("ThankYou", {
              amount: count.toString,
            }),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.pickerTitle}>Fund</Text>
          <View style={styles.pickerFrame}>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerBox}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="United Way" value="united" />
              <Picker.Item
                label="Transparent Hands Foundation"
                value="Transparent"
              />
              <Picker.Item
                label="Lutheran services in America"
                value="lutheran"
              />
              <Picker.Item label="YMCA" value="ymca" />
              <Picker.Item label="World vision" value="worldvision" />
              <Picker.Item
                label="Americares foundation"
                value="americaresfoundation"
              />
              <Picker.Item label="American heart association" value="heart" />
              <Picker.Item label="Direct relief" value="relief" />
              <Picker.Item label="Save the Children" value="savethechildren" />
            </Picker>
          </View>
        </View>
        <Text></Text>
        <View style={styles.row}>
          <Text style={styles.pickerTitle}>Frequancy</Text>
          <View style={styles.pickerFrame}>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerBox}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="One Time(Now)" value="one" />
              <Picker.Item label="Once a year" value="year" />
              <Picker.Item label="Once a month" value="year" />
            </Picker>
          </View>
        </View>
        <Text></Text>
        <View style={styles.row}>
          <Text style={styles.pickerTitle}>Payment method</Text>
          <View style={styles.pickerFrame}>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerBox}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="PayPal" value="paypal" />
              <Picker.Item label="Credit" value="credit" />
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.middle}>
        <StatusBar style="auto" backgroundColor={Colors.statusBarColor} />
        {/* <DonateAgain /> */}
        <View style={styles.containerPressMe}>
          <Text></Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>{count} $</Text>
          {/* <Animated.View> */}
          {/* </Animated.View> */}
          <Pressable onPress={() => createRandom()} style={styles.buttonRound}>
            <Text style={styles.buttonRoundText}>Press Me</Text>
          </Pressable>
          <View style={styles.rowButtons}>
            <Pressable onPress={() => addSum()} style={styles.buttonAmount}>
              <Text>+</Text>
            </Pressable>
            <Pressable onPress={reduceSum} style={styles.buttonAmount}>
              <Text>-</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.blank}></View>
      <View style={styles.footter}>
        <Button
          title={buttonMsg}
          color={Colors.buttonColor}
          onPress={() => ButtonPressed()}
        />
      </View>
      <View style={styles.buttonLogOut}>
        <ButtonLogOut />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logout: {
    flex: 0.5,
    alignItems: "flex-start",
    paddingTop: 20,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flex: 2,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 80,
    paddingRight: 30,
    paddingLeft: 30,
  },
  middle: {
    flex: 3,
    backgroundColor: Colors.white,
  },
  blank: {
    flex: 0.5,
    backgroundColor: Colors.white,
  },
  footter: {
    flex: 0.8,
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
  },
  buttonLogOut: {
    position: "absolute",
    paddingTop: 20,
    paddingRight: 280,
  },
  pickerBox: { height: 20, width: 150 },
  pickerTitle: {
    paddingTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerFrame: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  containerPressMe: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  rowButtons: {
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
