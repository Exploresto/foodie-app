import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 20,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="apps" text="Discover" />
      <Icon icon="flame" text="Fav" />
      <Icon icon="accessibility" text="Account" />
    </View>
  );
}
const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <Octicons
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
