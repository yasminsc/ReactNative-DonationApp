import React from "react";
import { View, Button, Text, Icon } from "react-native";

import { AuthContext } from "../components/Context";

export default function ButtonLogOut() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View>
      <Button onPress={signOut} title="Logout"></Button>
    </View>
  );
}
