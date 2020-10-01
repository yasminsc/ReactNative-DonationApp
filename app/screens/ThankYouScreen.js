import React from "react";
import {
  Pressable,
  Text,
  View,
  Button,
  Alert,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { observer } from "mobx-react";
import Colors from "../config/Colors";
import UserStore from "../store/UserStore";

const url =
  "https://support.savethechildren.org/site/SPageNavigator/sponsorship.html#!/";

export default function ThankYouScreen(props) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Image source={require("../assets/hearts.png")}></Image>
      <Text style={styles.headerText}>Thank You</Text>
      <Text style={styles.textSecondary}>for {UserStore.donationAmount} $</Text>
      <Image source={require("../assets/child.jpg")} style={styles.img}></Image>
      <Text style={styles.textSecondary}>Your donation come to irena</Text>
      <Text>The Charity Children's fund</Text>
      <Pressable
        onPress={() => Linking.openURL(url)} //TODO: replace with function and a callback that waits for the link
      >
        <Text style={styles.readStoryText}> Read Story</Text>
      </Pressable>
      <Button
        title="Donate Again"
        onPress={() => props.navigation.navigate("DonateScreen")}
        color={Colors.buttonColor}
        Style={styles.buttonDonateAgain}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonDonateAgain: {
    justifyContent: "center",
    alignItems: "center",
  },
  readStoryText: {
    borderWidth: 2,
    borderColor: Colors.buttonColor,
    borderRadius: 10,
    padding: 4,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textSecondary: { color: Colors.secondary },
});
