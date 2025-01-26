import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { WorkoutContext } from "../context/WorkoutContext";
import { useContext, useEffect, useState } from "react";
import ExerciseCard from "./exercise-card";

export default function ViewExercises({ workoutName, onEditExercise }) {
  const [exercises, setExercises] = useState([]);
  const { exerciseList, getExerciseList } = useContext(WorkoutContext);

  useEffect(() => {
    setExercises(getExerciseList(workoutName));
  }, [workoutName, exerciseList]);

  return (
    <ScrollView style={styles.workoutContainer}>
      {exercises.map((exercise) => {
        return (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onEditExercise={onEditExercise}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    width: "100%",
    padding: 20,
    height: "100%", // Reverted to original height
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
  },
  card: {
    padding: 20,
    backgroundColor: "#3a3f47",
    color: "#fff",
    width: "100%",
    marginTop: 10,
    borderRadius: 10, // Added border radius for better UI
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold", // Added bold font weight for better readability
  },
  cardDescription: {
    color: "#aaa", // Changed color for better readability
    fontSize: 14,
  },
});
