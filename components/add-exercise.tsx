import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Button from "./button";

export function AddExercise() {
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
        fontAwesomeName="send"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
