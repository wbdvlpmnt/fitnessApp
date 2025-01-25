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

export default function ViewExercises({ workoutName }) {
  const [exercises, setExercises] = useState([]);
  const { exerciseList, getExerciseList } = useContext(WorkoutContext);

  useEffect(() => {
    setExercises(getExerciseList(workoutName));
  }, [workoutName, exerciseList]);

  return (
    <ScrollView style={styles.workoutContainer}>
      {exercises.map((exercise) => {
        return <ExerciseCard key={exercise.id} exercise={exercise} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#3a3f47",
    color: "#fff",
    width: "100%",
    marginTop: 10,
  },
  workoutContainer: {
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
