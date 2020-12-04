import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";

function SignIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.pleaseSignInStack}>
        <Text style={styles.pleaseSignIn}>Please Sign in</Text>
        <Text style={styles.signInToManage}>
          Sign in to manage your account
        </Text>
      </View>
      <View style={styles.iconRow}>
        <FeatherIcon name="mail" style={styles.icon}></FeatherIcon>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder}
        ></TextInput>
      </View>
      <View style={styles.icon2Row}>
        <FeatherIcon name="lock" style={styles.icon2}></FeatherIcon>
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(131,131,131,1)"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <CupertinoButtonSuccess
        caption="Sign in"
        style={styles.cupertinoButtonSuccess}
      ></CupertinoButtonSuccess>
      <CupertinoButtonBlackTextColor
        caption="Forgot password?"
        style={styles.cupertinoButtonBlackTextColor}
      ></CupertinoButtonBlackTextColor>
      <View style={styles.signInToManage1Stack}>
        <Text style={styles.signInToManage1}>Do not have a account ?</Text>
        <CupertinoButtonBlackTextColor
          caption="Sign Up"
          style={styles.cupertinoButtonBlackTextColor1}
        ></CupertinoButtonBlackTextColor>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 76
  },
  pleaseSignIn: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 231,
    height: 73,
    fontSize: 30,
    textAlign: "center"
  },
  signInToManage: {
    top: 63,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(76,68,68,1)",
    height: 37,
    width: 227,
    opacity: 0.59,
    textAlign: "center",
    left: 0
  },
  pleaseSignInStack: {
    width: 238,
    height: 100,
    marginTop: 173,
    marginLeft: 74
  },
  icon: {
    color: "rgba(9,9,9,1)",
    fontSize: 40
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 246,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(116,115,115,1)",
    borderRadius: 19,
    marginLeft: 13
  },
  iconRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 92,
    marginLeft: 34,
    marginRight: 42
  },
  icon2: {
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
    marginLeft: 13
  },
  icon2Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 34,
    marginRight: 42
  },
  cupertinoButtonSuccess: {
    height: 52,
    width: 172,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    backgroundColor: "rgba(35,200,123,1)",
    marginTop: 80,
    marginLeft: 110
  },
  cupertinoButtonBlackTextColor: {
    height: 44,
    width: 172,
    alignSelf: "flex-end",
    marginTop: -108,
    marginRight: 7
  },
  signInToManage1: {
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
  signInToManage1Stack: {
    width: 271,
    height: 51,
    marginTop: 77,
    marginLeft: 62
  }
});

export default SignIn;
