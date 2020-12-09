import React, { useState } from "react";
import { createStackNavigator  } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation"
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {SignIn} from "./src/screens/SignIn";
import {SignUp} from "./src/screens/SignUp";
import {Recover} from "./src/screens/Recover";

const DrawerNavigation = createDrawerNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
  Recover: Recover
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    SignIn: SignIn,
    SignUp: SignUp,
    Recover: Recover
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
