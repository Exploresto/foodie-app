import { View, Text, Dimensions, SafeAreaView } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "282534", whwite: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/jap.jpeg"),
    title: "Slide 1",
    description: "Slide 1 description",
  },
  {
    id: "2",
    image: require("../assets/images/pizza.jpeg"),
    title: "Slide 2",
    description: "Slide 2 description",
  },
  {
    id: "3",
    image: require("../assets/images/ramen.jpeg"),
    title: "Slide 3",
    description: "Slide 3 description",
  },
];
export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.primary }}
    ></SafeAreaView>
  );
}
