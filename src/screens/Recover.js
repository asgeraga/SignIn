import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";

function Recover(props) {
  return (
    <View style={styles.container}>
      <View style={styles.recoverAccountStack}>
        <Text style={styles.recoverAccount}>Recover account</Text>
        <Text style={styles.enterYourEmail}>
          Enter your email address and an email with instructions will be sent
          to you
        </Text>
      </View>
      <View style={styles.icon1Row}>
        <Icon name="account" style={styles.icon1}></Icon>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <CupertinoButtonSuccess
        caption="Recover account"
        style={styles.cupertinoButtonSuccess1}
      ></CupertinoButtonSuccess>
      <View style={styles.haveAnAccount1Stack}>
        <Text style={styles.haveAnAccount1}>Have an account ?</Text>
        <CupertinoButtonBlackTextColor
          caption="Sign In"
          style={styles.cupertinoButtonBlackTextColor1}
        ></CupertinoButtonBlackTextColor>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  recoverAccount: {
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
  enterYourEmail: {
    top: 63,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(76,68,68,1)",
    height: 37,
    width: 227,
    opacity: 0.59,
    textAlign: "center",
    left: 2
  },
  recoverAccountStack: {
    width: 231,
    height: 100,
    marginTop: 171,
    marginLeft: 72
  },
  icon1: {
    color: "rgba(16,16,16,1)",
    fontSize: 40
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
    marginLeft: 11,
    marginTop: 2
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 91,
    marginLeft: 39,
    marginRight: 39
  },
  cupertinoButtonSuccess1: {
    height: 52,
    width: 172,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    backgroundColor: "rgba(35,200,123,1)",
    marginTop: 61,
    marginLeft: 127
  },
  haveAnAccount1: {
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
  cupertinoButtonBlackTextColor1: {
    height: 44,
    width: 101,
    position: "absolute",
    top: 0,
    right: 0
  },
  haveAnAccount1Stack: {
    width: 249,
    height: 51,
    marginTop: 13,
    marginLeft: 79
  }
});

export default Recover;
