import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Share, Button, StyleSheet } from "react-native";

import Colors from "../config/Colors";

export default function MyDonations() {
  //Methods
  function onShare() {
    Share.share(
      {
        title: "test title",
        message:
          "DonateApp| Thank you for your donation to this important organization via DonateApp",
      },
      {
        excludedActivityTypes: [
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Print",
          "com.apple.UIKit.activity.CopyToPasteboard",
          "com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          "com.apple.UIKit.activity.PostToFlickr",
          "com.apple.UIKit.activity.PostToVimeo",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension",
          "com.apple.mobilenotes.SharingExtension",
          "com.apple.mobileslideshow.StreamShareService",
          "com.linkedin.LinkedIn.ShareExtension",
          "pinterest.ShareExtension",
          "com.google.GooglePlus.ShareExtension",
          "com.tumblr.tumblr.Share-With-Tumblr",
          // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
        ],
      }
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={Colors.backgroundColor} />
      <Text style={styles.textScreen}>My Donations Screen</Text>
      <Text></Text>
      <Button title="Share" color="grey" onPress={() => onShare()} />
    </View>
  );
}

const styles = StyleSheet.create({
  textScreen: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
