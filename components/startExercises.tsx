import React from "react";
import { ScrollView, Text, StyleSheet, Alert } from "react-native";
import ExerciseCardCheckbox from "./exercise-card-checkbox";
import Button from "./button";
export default function StartExercises({ exercises }) {
  return (
    <>
      <ScrollView style={styles.workoutContainer}>
        {exercises.length > 0
          ? exercises.map((exercise) => {
              return (
                <ExerciseCardCheckbox key={exercise.id} exercise={exercise} />
              );
            })
          : null}
      </ScrollView>
      <Button
        label="Workout Complete"
        theme="primary"
        fontAwesomeName="check"
        onPress={() => Alert.alert("Workout Complete!")}
      ></Button>
    </>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    width: "100%",
    padding: 20,
    height: "80%", // Reverted to original height
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
  },
});
