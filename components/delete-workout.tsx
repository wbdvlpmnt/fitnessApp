import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DeleteWorkout() {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name="trash" size={18} color="#fff" style={styles.icon} />

      <Text style={styles.text}>Delete Workout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 125,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
});
