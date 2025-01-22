import { AddExercise } from "@/components/add-exercise";
import Button from "@/components/button";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";

export default function Workout() {
  const [workoutName, setWorkoutName] = useState("");

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
        <AddExercise />
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
