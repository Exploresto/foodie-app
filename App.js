import { View, Text } from "react-native";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import RestoDetail from "./screens/RestoDetail";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  // useEffect(async () => {
  //   const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     // AsyncStorage.setItem("isAppFirstLaunched", false);
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }
  // }, []);
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* {isAppFirstLaunched && ( */}
          <Stack.Screen name="Onboarding" component={Onboarding} />
          {/* )} */}
          {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
