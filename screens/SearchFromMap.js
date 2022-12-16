import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapMarker,
  Callout,
} from "react-native-maps";

// const styles = StyleSheet.create({
// map: {
//   width: Dimensions.get("window").width,
//   height: Dimensions.get("window").height,
// }
const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  // Callout bubble
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});
// });

export default function SearchFromMap() {
  return (
    <View style={{ marginTop: 50 }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        image={require("../assets/images/map_marker.png")}
        // source={require("../assets/images/map_marker.png")}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Favourite Restaurant</Text>
              {/* <Text>A short description</Text> */}
              <Image
                style={styles.image}
                source={require("../assets/images/slide3.png")}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </View>
  );
}
