import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export default function ViewExercises() {
  const { exerciseList } = useContext(WorkoutContext);

  return (
    <ScrollView style={styles.workoutContainer}>
      {exerciseList.map((exercise) => {
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
