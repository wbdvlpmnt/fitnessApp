import { WorkoutContext } from "@/context/WorkoutContext";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";

export default function ExerciseCard({ exercise }) {
  const { removeExercise, exerciseToEdit } = useContext(WorkoutContext);

  function handleRemoveExercise(id) {
    console.log("removing", id);
    removeExercise(id);
  }

  function handleEditExercise(id) {
    exerciseToEdit(id);
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleEditExercise(exercise.id)}
    >
      <View>
        <Text style={styles.cardTitle}>{exercise.exerciseName}</Text>
        <Text style={styles.cardDescription}>
          {exercise.exerciseDescription}
        </Text>
      </View>
      <FontAwesome
        name={"remove"}
        size={22}
        color="#fff"
        onPress={() => handleRemoveExercise(exercise.id)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#3a3f47",
    color: "#fff",
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  workoutContainer: {
    borderColor: "pink",
    borderWidth: 2,
    width: "100%",
    padding: 20,
    height: "35%",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
  },
  cardDescription: {
    color: "#fff",
    fontSize: 14,
  },
});
