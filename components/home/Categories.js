import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/jap.jpeg"),
    text: "Japanese",
  },
  {
    image: require("../../assets/images/chinese.jpeg"),
    text: "Chinese",
  },
  {
    image: require("../../assets/images/pasta.jpeg"),
    text: "Pasta",
  },
  {
    image: require("../../assets/images/fast-food.jpeg"),
    text: "Fast Food",
  },
  {
    image: require("../../assets/images/ice-cream.jpeg"),
    text: "Ice Cream",
  },
  {
    image: require("../../assets/images/ramen.jpeg"),
    text: "Ramen",
  },
];
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                borderRadius: 10,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
