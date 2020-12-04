import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";

function SignUp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.pleaseSignUpStack}>
        <Text style={styles.pleaseSignUp}>Please Sign up</Text>
        <Text style={styles.fillOutTheForm}>
          Fill out the form to get started
        </Text>
      </View>
      <View style={styles.icon1Row}>
        <FeatherIcon name="mail" style={styles.icon1}></FeatherIcon>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <View style={styles.icon4Row}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <TextInput
          placeholder="Name"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder3}
        ></TextInput>
      </View>
      <View style={styles.icon2Row}>
        <FeatherIcon name="lock" style={styles.icon2}></FeatherIcon>
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder4}
        ></TextInput>
      </View>
      <View style={styles.icon3Row}>
        <MaterialCommunityIconsIcon
          name="key-variant"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder5}
        ></TextInput>
      </View>
      <View style={styles.cupertinoButtonBlackTextColor1Stack}>
        <CupertinoButtonBlackTextColor
          caption="Sign In"
          style={styles.cupertinoButtonBlackTextColor1}
        ></CupertinoButtonBlackTextColor>
        <Text style={styles.haveAnAccount}>Have an account ?</Text>
      </View>
      <CupertinoButtonSuccess
        caption="Sign in"
        style={styles.cupertinoButtonSuccess1}
      ></CupertinoButtonSuccess>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pleaseSignUp: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 231,
    height: 73,
    fontSize: 30,
    textAlign: "center"
  },
  fillOutTheForm: {
    top: 61,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(76,68,68,1)",
    height: 37,
    width: 227,
    opacity: 0.59,
    textAlign: "center",
    left: 2
  },
  pleaseSignUpStack: {
    width: 231,
    height: 98,
    marginTop: 173,
    marginLeft: 72
  },
  icon1: {
    color: "rgba(9,9,9,1)",
    fontSize: 40,
    marginTop: 1
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 246,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(116,115,115,1)",
    borderRadius: 19,
    marginLeft: 12
  },
  icon1Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 13,
    marginRight: 64
  },
  icon4: {
    color: "rgba(16,16,16,1)",
    fontSize: 40
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 246,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(116,115,115,1)",
    borderRadius: 19,
    marginLeft: 12,
    marginTop: 2
  },
  icon4Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 13,
    marginRight: 64
  },
  icon2: {
    color: "rgba(9,9,9,1)",
    fontSize: 40,
    marginTop: 1
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 246,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(116,115,115,1)",
    borderRadius: 19,
    marginLeft: 12
  },
  icon2Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 13,
    marginRight: 64
  },
  icon3: {
    color: "rgba(11,10,10,1)",
    fontSize: 40
  },
  placeholder5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 246,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(116,115,115,1)",
    borderRadius: 19,
    marginLeft: 12
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 13,
    marginRight: 64
  },
  cupertinoButtonBlackTextColor1: {
    height: 44,
    width: 101,
    position: "absolute",
    top: 0,
    right: 0
  },
  haveAnAccount: {
    top: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(121,109,109,1)",
    height: 37,
    width: 185,
    opacity: 0.59,
    textAlign: "left",
    left: 0,
    fontSize: 16
  },
  cupertinoButtonBlackTextColor1Stack: {
    width: 249,
    height: 51,
    marginTop: 99,
    marginLeft: 84
  },
  cupertinoButtonSuccess1: {
    height: 52,
    width: 172,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    backgroundColor: "rgba(35,200,123,1)",
    marginTop: -116,
    marginLeft: 110
  }
});

export default SignUp;
