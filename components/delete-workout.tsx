import { WorkoutContext } from "@/context/WorkoutContext";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DeleteWorkout({ workoutName, setWorkoutName }) {
  const { removeWorkout } = useContext(WorkoutContext);

  function handleRemoveWorkout() {
    removeWorkout(workoutName);
    setWorkoutName();
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleRemoveWorkout()}
    >
      <FontAwesome name="trash" size={18} color="#fff" />

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
