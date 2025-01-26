import { useContext, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Alert, ScrollView } from "react-native";
import Button from "./button";
import { WorkoutContext } from "../context/WorkoutContext";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export function AddExercise({ workoutName }) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseDurationUnits, setExerciseDurationUnits] = useState("");
  const { addExercise, editExercise, updateExercise, clearExerciseToEdit } =
    useContext(WorkoutContext);
  const [id, setId] = useState();

  useEffect(() => {
    if (editExercise) {
      setExerciseName(editExercise["exerciseName"]);
      setExerciseDescription(editExercise["exerciseDescription"]);
      setExerciseDuration(editExercise["exerciseDuration"]);
      setExerciseDurationUnits(editExercise["exerciseDurationUnits"]);
      setId(editExercise["id"]);
    } else {
      clearForm();
    }
  }, [editExercise, workoutName]);

  function clearForm() {
    setExerciseName("");
    setExerciseDescription("");
    setExerciseDuration(0);
    setExerciseDurationUnits("");
    setId(undefined);
    clearExerciseToEdit();
  }

  function handleAddExercise() {
    if (
      !exerciseName ||
      !exerciseDescription ||
      !exerciseDuration ||
      !exerciseDurationUnits
    ) {
      Alert.alert("All fields are required");
      return;
    }
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
    if (
      !exerciseName ||
      !exerciseDescription ||
      !exerciseDuration ||
      !exerciseDurationUnits
    ) {
      Alert.alert("All fields are required");
      return;
    }
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
    <ScrollView contentContainerStyle={styles.inputForm}>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        placeholderTextColor="#aaa"
        value={exerciseName}
        onChangeText={setExerciseName}
        editable={!!workoutName} // Disable input if no workout is selected
      />
      <TextInput
        style={styles.input}
        placeholder="Exercise Description"
        placeholderTextColor="#aaa"
        value={exerciseDescription}
        onChangeText={setExerciseDescription}
        editable={!!workoutName} // Disable input if no workout is selected
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Exercise Duration"
        placeholderTextColor="#aaa"
        value={String(exerciseDuration)}
        onChangeText={(d) => setExerciseDuration(+d)}
        editable={!!workoutName} // Disable input if no workout is selected
      />
      <TextInput
        style={styles.input}
        placeholder="Repitition Units"
        placeholderTextColor="#aaa"
        value={exerciseDurationUnits}
        onChangeText={setExerciseDurationUnits}
        editable={!!workoutName} // Disable input if no workout is selected
      />
      <View style={styles.buttonContainer}>
        <Button
          label={editExercise ? "Save Exercise" : "Add Exercise"}
          theme="primary"
          onPress={editExercise ? handleEditExercise : handleAddExercise}
          fontAwesomeName="send"
          disabled={!workoutName} // Disable button if no workout is selected
        />
        {editExercise && (
          <Button label="Cancel Edit" theme="secondary" onPress={clearForm} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    padding: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
  },
  input: {
    width: 300,
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    display: "flex",
    height: 150,
    justifyContent: "space-between",
  },
});
