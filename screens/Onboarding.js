import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#282534", white: "#fff" };

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    color: COLORS.white,
    fontSize: 13,

    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    id: "1",
    image: require("../assets/images/slide1.png"),
    title: "Slide 1",
    description: "Slide 1 description",
  },
  {
    id: "2",
    image: require("../assets/images/slide2.png"),
    title: "Slide 2",
    description: "Slide 2 description",
  },
  {
    id: "3",
    image: require("../assets/images/slide3.png"),
    title: "Slide 3",
    description: "Slide 3 description",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default function Onboarding({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* <View style={styles.indicator} /> */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: COLORS.white,
                },
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: COLORS.white,
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity style={[styles.button]}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contetneOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.65 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
}
