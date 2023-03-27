import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../../components/Map";

const MapScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Map Screeen</Text>
        <View style={tw`h-1/2 bg-red-500 w-full`}>
          <Map />
        </View>
        <View style={tw`h-1/2 bg-gray-500`}></View>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
