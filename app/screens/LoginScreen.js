import React, { useForm } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Share,
} from "react-native";
// import LinearGradient from " ";
// // import database from "@react-native-firebase/database";
// import firebase from "firebase";
import * as Facebook from "expo-facebook";

import { AuthContext } from "../components/Context";
import Colors from "../config/Colors";
import UserStore from "../store/UserStore";

export default function LoginScreen(props) {
  const [value, onChangeText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn, signInFB } = React.useContext(AuthContext);

  const faceBookId = "4748030278542149";

  //Methods
  let login = async () => {
    try {
      await Facebook.initializeAsync(faceBookId);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        signInFB({ token, name });
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,first_name,last_name,email`
        );
        const {
          id,
          last_name,
          name,
          first_name,
          email,
          public_profile,
        } = await response.json();
        console.log("name", name);
        props.navigation.navigate("DonateScreen", {
          name: name,
          email: email,
          id: id,
          first_name,
        });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  function signin() {
    if (email != "" && password != "") {
      UserStore.username = email;
      UserStore.token = "fgk";
      props.navigation.navigate("DonateScreen");
      // : Alert.alert("User name or password are not valid");
      signIn();
      onSubmit({ email, password });
    } else {
      Alert.alert("User name or password are not valid");
      setEmailError("Error. Password should not be empty!");
      setPasswordError("Error. Email should not be empty!");
    }
  }

  function onSubmit(data) {
    // database()
    //   .ref("/users/123")
    //   .set(data)
    //   .then(() => console.log("Data set."));
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar style="auto" backgroundColor={Colors.statusBarColor} />
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.footter}>
        <Text></Text>
        <Text>Email</Text>
        <TextInput
          type="email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.errorMsg}>{emailError}</Text>

        <Text> </Text>
        <Text>Password</Text>
        <TextInput
          type="password"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={styles.errorMsg}>{passwordError}</Text>
        <Text> </Text>
        <TouchableOpacity onPress={() => signin()} style={styles.buttonSignIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={() => login()} style={styles.buttonSignInFB}>
          <Text style={styles.buttonText}>Connect with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    alignItems: "flex-end",
  },
  header: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  footter: {
    flex: 2,
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: Colors.white,
  },
  errorMsg: {
    color: "red",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.white,
    paddingTop: 110,
    paddingLeft: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  buttonSignIn: {
    backgroundColor: Colors.backgroundColor,
    height: 40,
    width: 340,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
  },
  buttonSignInFB: {
    backgroundColor: Colors.buttonFB,
    height: 40,
    width: 340,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
  },
});
