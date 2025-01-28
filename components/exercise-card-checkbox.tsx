import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ExerciseCardCheckbox({ exercise }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.exerciseName}>{exercise.exerciseName}</Text>
        <Text style={styles.exerciseDescription}>
          {exercise.exerciseDescription}
        </Text>
        <View style={styles.exerciseDetails}>
          <Text style={styles.detailText}>Sets: {exercise.sets}</Text>
          <Text style={styles.detailText}>
            Duration: {exercise.exerciseDuration}{" "}
            {exercise.exerciseDurationUnits}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  exerciseName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseDescription: {
    color: "#666",
    fontSize: 14,
    marginVertical: 5,
  },
  exerciseDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailText: {
    color: "#333",
    fontSize: 14,
  },
});
