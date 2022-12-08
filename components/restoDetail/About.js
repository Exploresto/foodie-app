import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg";

const title = "Fast Food";
const description = "Fast, Food";

export default function About() {
  return (
    <View>
      <RestoImage image={image} />
      <RestoTitle title={title} />
      <RestoDescription description={description} />
    </View>
  );
}

const RestoImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestoTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestoDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
