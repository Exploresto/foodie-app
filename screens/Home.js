import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home//HeaderTabs";
import SeachBar from "../components/home/SeachBar";
import Categories from "../components/home/Categories";
import RestoItem, { restoSample } from "../components/home/RestoItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "OuZjqg9goLGuhJcJWq-X2Jlwe7IYc-O6cZIVOaTXEdTZSZHjUcEdF2M0kltApjg74_yLxTIEuejh2m4HX09W7WLJJyxX2PYTTT7PwWV_ZnzpBtbfgefBDNBANSONY3Yx";

export default function Home() {
  const [restoData, setRestoData] = useState(restoSample);
  const [city, setCity] = useState("Toronto");

  const getRestoFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestoData(json.businesses));
  };

  useEffect(() => {
    getRestoFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SeachBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestoItem restoData={restoData} />
      </ScrollView>
      <Divider width={2} />
      <BottomTabs />
    </SafeAreaView>
  );
}
