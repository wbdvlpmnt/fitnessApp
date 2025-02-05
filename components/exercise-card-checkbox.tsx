import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ExerciseCardCheckbox({
  exercise,
  onPress,
  isCompleted,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isCompleted && styles.completedCard]}
    >
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
        {isCompleted && <Text style={styles.completedText}>Complete</Text>}
      </View>
    </TouchableOpacity>
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
  completedCard: {
    borderWidth: 2,
    borderColor: "#3dffff",
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
  completedText: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#28a745",
    fontWeight: "bold",
  },
});
