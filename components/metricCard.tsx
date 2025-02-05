import { View, StyleSheet, Text } from "react-native";

export default function MetricCard({ metric, value }) {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.metric}>{metric}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "#3dffff",
    borderWidth: 2,
    color: "#3a3f47",
    width: "40%",
    height: "30%",
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-evenly",
  },
  metric: {
    color: "#3a3f47",
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    color: "#3a3f47",
    fontSize: 30,
  },
});
