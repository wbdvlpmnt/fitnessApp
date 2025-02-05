import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Alert, View } from "react-native";
import ExerciseCardCheckbox from "./exercise-card-checkbox";
import Button from "./button";
import * as Animatable from "react-native-animatable";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function StartExercises({ exercises }) {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const { saveWorkoutLog } = useContext(WorkoutContext);

  const toggleExerciseCompletion = (exerciseId) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseId)
        ? prev.filter((id) => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const allExercisesCompleted =
    exercises.length > 0 && completedExercises.length === exercises.length;

  function handleLogWorkout() {
    Alert.alert("Workout Complete!");
    const date = new Date().toLocaleDateString();
    const logWorkoutPayload = {
      date,
      exercises,
    };
    saveWorkoutLog(logWorkoutPayload);
  }

  return (
    <>
      <ScrollView style={styles.workoutContainer}>
        {exercises.length > 0
          ? exercises.map((exercise) => {
              const isCompleted = completedExercises.includes(exercise.id);
              return (
                <Animatable.View
                  key={exercise.id}
                  animation={isCompleted ? "fadeIn" : "fadeIn"}
                  duration={500}
                >
                  <ExerciseCardCheckbox
                    exercise={exercise}
                    onPress={() => toggleExerciseCompletion(exercise.id)}
                    isCompleted={isCompleted}
                  />
                </Animatable.View>
              );
            })
          : null}
      </ScrollView>
      {allExercisesCompleted && (
        <Button
          label="Workout Complete"
          theme="primary"
          fontAwesomeName="check"
          onPress={() => handleLogWorkout()}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  workoutContainer: {
    width: "100%",
    padding: 20,
    height: "80%",
    backgroundColor: "#1e1e1e",
  },
});
