import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Fitness Tracker Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center", // Centered content for better UI
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold", // Added bold font weight for better readability
  },
});
