import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { WorkoutContext } from "../context/WorkoutContext";
import { useContext, useEffect, useState } from "react";

export default function ViewExercises({ workoutName }) {
  const [exercises, setExercises] = useState([]);
  const { exerciseList, getExerciseList } = useContext(WorkoutContext);

  useEffect(() => {
    setExercises(getExerciseList(workoutName));
  }, [workoutName]);

  return (
    <ScrollView style={styles.workoutContainer}>
      {exercises.map((exercise) => {
        return (
          <TouchableOpacity key={exercise.id} style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{exercise.exerciseName}</Text>
              <Text style={styles.cardDescription}>
                {exercise.exerciseDescription}
              </Text>
            </View>
          </TouchableOpacity>
        );
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
    borderColor: "pink",
    borderWidth: 2,
    width: "100%",
    padding: 20,
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
