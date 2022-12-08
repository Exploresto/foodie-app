import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restoDetail/About";
import BottomTab from "../components/home/BottomTabs";

export default function RestoDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <BottomTab />
    </View>
  );
}
