import Button from "@/components/button";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";

export default function Workout() {
  const [workoutName, setWorkoutName] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseDurationUnits, setExerciseDurationUnits] = useState("");

  function clearForm() {
    setExerciseName("");
    setExerciseDescription("");
    setExerciseDuration(0);
    setExerciseDurationUnits("");
  }

  function handleAddExercise() {
    const newExercisePayload = {
      exerciseName,
      exerciseDescription,
      exerciseDuration,
      exerciseDurationUnits,
    };
    clearForm();
    Alert.alert("Exercise Added!");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Workout Name"
            placeholderTextColor="#aaa"
            value={workoutName}
            onChangeText={setWorkoutName}
          />
        </View>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Exercise Name"
            placeholderTextColor="#aaa"
            value={exerciseName}
            onChangeText={setExerciseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Exercise Description"
            placeholderTextColor="#aaa"
            value={exerciseDescription}
            onChangeText={setExerciseDescription}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="#aaa"
            value={String(exerciseDuration)}
            onChangeText={(d) => setExerciseDuration(+d)}
          />
          <TextInput
            style={styles.input}
            placeholder="Repitition Units"
            placeholderTextColor="#aaa"
            value={exerciseDurationUnits}
            onChangeText={setExerciseDurationUnits}
          />
          <Button
            label="Add Exercise"
            theme="primary"
            onPress={handleAddExercise}
          />
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
  },
  input: {
    width: "100%",
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  inputForm: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
});
