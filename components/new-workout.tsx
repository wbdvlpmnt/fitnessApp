import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, StyleSheet, View, Alert } from "react-native";
import Button from "./button";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function NewWorkout({ workoutName, setWorkoutName, setActive }) {
  const { addWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    setWorkoutName("");
  }, []);

  function handleAddNewWorkout(workoutName) {
    if (workoutName.trim() === "") {
      Alert.alert("Workout name cannot be empty");
      return;
    }
    addWorkout(workoutName);
    setActive("Existing");
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>What should we call the new workout?</Text>
      <TextInput
        style={styles.input}
        placeholder="New Workout Name"
        placeholderTextColor="#aaa"
        value={workoutName}
        onChangeText={setWorkoutName}
      />
      <View style={styles.buttonContainer}>
        <Button
          label="Save Workout"
          theme="primary"
          fontAwesomeName="save"
          onPress={() => handleAddNewWorkout(workoutName)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 60,
    marginTop: 30,
    fontSize: 16,
  },
  content: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    width: "100%",
  },
});
