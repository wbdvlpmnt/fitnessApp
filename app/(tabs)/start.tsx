import { Text, StyleSheet, View } from "react-native";

export default function Start() {
  return (
    <View style={styles.container}>
      <Text>Start</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 5, // Added padding for better UI
  },
  content: {
    padding: 15,
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
    borderRadius: 10, // Added border radius for better UI
  },
});
