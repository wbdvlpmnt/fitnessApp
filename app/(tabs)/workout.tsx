import { AddExercise } from "@/components/add-exercise";
import ViewExercises from "@/components/view-exercises";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Workout() {
  const [workoutName, setWorkoutName] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Workout Name"
            placeholderTextColor="#aaa"
            value={workoutName}
            onChangeText={setWorkoutName}
          />
        </View>
        <AddExercise />
        <ViewExercises />
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
  content: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    borderColor: "pink",
    borderWidth: 2,
  },
});
