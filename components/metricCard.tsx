import { View, StyleSheet, Text } from "react-native";

export default function MetricCard({ metric, value }) {
  return (
    <View style={styles.card}>
      <Text>{metric}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#3a3f47",
    color: "#fff",
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
  },
  metric: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    color: "#aaa",
    fontSize: 14,
  },
});
