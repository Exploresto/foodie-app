import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import RestoDetail from "./screens/RestoDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: fasle }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      {/* <Onboarding /> */}
    </NavigationContainer>
  );
}
