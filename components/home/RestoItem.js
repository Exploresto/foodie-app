import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const restoSample = [
  {
    name: "Sushi Saito",
    image_url: "https://imgix.theurbanlist.com/content/article/bay-nine.jpg",

    categories: ["Japanese", "Omakase"],
    price: "$$$$",
    reviews: 2870,
    rating: 4.9,
  },
  {
    name: "Pasta Ma",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAqEHFo5l9RIlgxZXwtOCWB7ArdDEK1rBmwtUHPfeBh2J54Eu9AIJ15NdDo9jtqtqjZ4&usqp=CAU",
    categories: ["Western", "Pasta"],
    price: "$$$",
    reviews: 287,
    rating: 4.2,
  },
  {
    name: "Lafe",
    image_url:
      "https://media.vanityfair.com/photos/586ff60d6cbc6a28245ef9a6/master/pass/union-square-cafe-danny-meyers.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 10,
    rating: 4.8,
  },
  {
    name: "Pizza Boyz",
    image_url:
      "https://d332juqdd9b8hn.cloudfront.net/wp-content/uploads/2019/04/BEAUTIFULPIZZERIA.jpg",
    categories: ["Western", "Pizza"],
    price: "$$$",
    reviews: 111,
    rating: 2.2,
  },
  {
    name: "Reman Beast",
    image_url: "https://torontolife.com/wp-content/uploads/2020/11/42A8346.jpg",
    categories: ["Japanese", "Pho"],
    price: "$$$",
    reviews: 988,
    rating: 3.6,
  },
];
export default function RestoItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restoData.map((resto, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestoImage image={resto.image_url} />
          <RestoInfo name={resto.name} rating={resto.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestoImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="fire" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};
const RestoInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        {/* Sushi Saito */}
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>10-20 - min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
