import { AddExercise } from "@/components/add-exercise";
import ExistingWorkout from "@/components/existing-workout";
import NewWorkout from "@/components/new-workout";
import PillButton from "@/components/pill-button";
import ViewExercises from "@/components/view-exercises";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function Workout() {
  const [workoutName, setWorkoutName] = useState("");
  const [active, setActive] = useState("New"); // State to manage active selection

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <PillButton active={active} setActive={setActive} />

          {active === "New" && (
            <NewWorkout
              workoutName={workoutName}
              setWorkoutName={setWorkoutName}
              setActive={setActive}
            />
          )}
          {active === "Existing" && (
            <ExistingWorkout
              workoutName={workoutName}
              setWorkoutName={setWorkoutName}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 5, // Added padding for better UI
  },
  content: {
    padding: 15,
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
    borderRadius: 10, // Added border radius for better UI
  },
});
