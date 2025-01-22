import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>Fitness Tracker Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
});
