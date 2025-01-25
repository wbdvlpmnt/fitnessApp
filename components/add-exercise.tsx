import { useContext, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Button from "./button";
import { WorkoutContext } from "../context/WorkoutContext";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export function AddExercise({ workoutName }) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseDurationUnits, setExerciseDurationUnits] = useState("");
  const { addExercise, editExercise, updateExercise } =
    useContext(WorkoutContext);
  const [id, setId] = useState();

  useEffect(() => {
    clearForm();
    if (editExercise) {
      setExerciseName(editExercise["exerciseName"]);
      setExerciseDescription(editExercise["exerciseDescription"]);
      setExerciseDuration(editExercise["exerciseDuration"]);
      setExerciseDurationUnits(editExercise["exerciseDurationUnits"]);
      setId(editExercise["id"]);
    }
  }, [editExercise, workoutName]);

  function clearForm() {
    setExerciseName("");
    setExerciseDescription("");
    setExerciseDuration(0);
    setExerciseDurationUnits("");
    setId(undefined);
  }

  function handleAddExercise() {
    const newExercisePayload = {
      exerciseName,
      exerciseDescription,
      exerciseDuration,
      exerciseDurationUnits,
      workoutName,
      id: uuidv4(),
    };
    addExercise(newExercisePayload);
    clearForm();
    Alert.alert("Exercise Added!");
  }

  function handleEditExercise() {
    const editExercisePayload = {
      exerciseName,
      exerciseDescription,
      exerciseDuration,
      exerciseDurationUnits,
      workoutName,
      id,
    };
    updateExercise(editExercisePayload);
    clearForm();
    Alert.alert("Exercise Saved!");
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
        label={editExercise ? "Save Exercise" : "Add Exercise"}
        theme="primary"
        onPress={editExercise ? handleEditExercise : handleAddExercise}
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
