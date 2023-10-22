import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import cars from "./cars";
import CarItem from "./../CarItems";
const CarsList = () => {
  console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
