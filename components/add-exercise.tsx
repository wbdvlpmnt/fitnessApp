import { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  Text,
} from "react-native";
import Button from "./button";
import { WorkoutContext } from "../context/WorkoutContext";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export function AddExercise({ workoutName }) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseDurationUnits, setExerciseDurationUnits] = useState("");
  const [sets, setSets] = useState(1); // Added sets state
  const { addExercise, editExercise, updateExercise, clearExerciseToEdit } =
    useContext(WorkoutContext);
  const [id, setId] = useState();

  useEffect(() => {
    if (editExercise) {
      setExerciseName(editExercise["exerciseName"]);
      setExerciseDescription(editExercise["exerciseDescription"]);
      setExerciseDuration(editExercise["exerciseDuration"]);
      setExerciseDurationUnits(editExercise["exerciseDurationUnits"]);
      setSets(editExercise["sets"]); // Set sets value
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
    setSets(1); // Reset sets value
    setId(undefined);
    clearExerciseToEdit();
  }

  function handleAddExercise() {
    if (
      !exerciseName ||
      !exerciseDescription ||
      !exerciseDuration ||
      !exerciseDurationUnits ||
      !sets
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
      sets, // Added sets parameter
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
      !exerciseDurationUnits ||
      !sets
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
      sets, // Added sets parameter
      id,
    };
    updateExercise(editExercisePayload);
    clearForm();
    Alert.alert("Exercise Saved!");
  }

  return (
    <ScrollView contentContainerStyle={styles.inputForm}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Exercise Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Exercise Name"
          placeholderTextColor="#aaa"
          value={exerciseName}
          onChangeText={setExerciseName}
          editable={!!workoutName} // Disable input if no workout is selected
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Exercise Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Exercise Description"
          placeholderTextColor="#aaa"
          value={exerciseDescription}
          onChangeText={setExerciseDescription}
          editable={!!workoutName} // Disable input if no workout is selected
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number of Reps or Duration </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Number of Reps or Duration"
          placeholderTextColor="#aaa"
          value={exerciseDuration ? String(exerciseDuration) : ""}
          onChangeText={(d) => setExerciseDuration(+d)}
          editable={!!workoutName} // Disable input if no workout is selected
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Unit of measure for Reps or Duration</Text>
        <TextInput
          style={styles.input}
          placeholder="Unit of measure for Reps or Duration"
          placeholderTextColor="#aaa"
          value={exerciseDurationUnits}
          onChangeText={setExerciseDurationUnits}
          editable={!!workoutName} // Disable input if no workout is selected
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sets</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Sets"
          placeholderTextColor="#aaa"
          value={sets ? String(sets) : ""}
          onChangeText={(s) => setSets(+s)}
          editable={!!workoutName} // Disable input if no workout is selected
        />
      </View>
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
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
  },
  inputGroup: {
    width: "100%",
    marginBottom: 10, // Adjusted margin for better spacing
  },
  input: {
    width: 300,
    backgroundColor: "#3a3f47",
    color: "#fff",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  label: {
    color: "#aaa",
    marginBottom: 5,
  },
  buttonContainer: {
    display: "flex",
    height: "auto", // Adjusted height for better spacing
    justifyContent: "space-between",
    marginTop: 1, // Added margin for better spacing
    width: 250,
  },
});
