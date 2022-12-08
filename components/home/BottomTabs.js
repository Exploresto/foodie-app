import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" />
      <Icon icon="search" />
      <Icon icon="apps" />
      <Icon icon="flame" />
      <Icon icon="accessibility" />

      {/* <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="apps" text="Discover" />
      <Icon icon="flame" text="Fav" />
      <Icon icon="accessibility" text="Account" /> */}
    </View>
  );
}
const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <Octicons
        name={props.icon}
        size={30}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
