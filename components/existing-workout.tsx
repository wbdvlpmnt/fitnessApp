import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { AddExercise } from "./add-exercise";
import ViewExercises from "./view-exercises";
import DropDownPicker from "react-native-dropdown-picker";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import DeleteWorkout from "./delete-workout";

export default function ExistingWorkout({ workoutName, setWorkoutName }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const { workouts, clearExerciseToEdit, exerciseToEdit, editExercise } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState("view"); // State to manage active tab

  useEffect(() => {
    const choices = workouts.map((el) => {
      return {
        label: el,
        value: el,
      };
    });
    setItems(choices);
    clearExerciseToEdit();
  }, [workouts, workoutName]);

  const handleEditExercise = (id) => {
    exerciseToEdit(id);
    setActiveTab("add");
  };

  return (
    <>
      <DropDownPicker
        open={open}
        value={workoutName}
        items={items}
        setOpen={setOpen}
        setValue={setWorkoutName}
        setItems={setItems}
        placeholder="Select Your Workout"
        style={styles.dropdown}
        placeholderStyle={styles.placeholder}
        textStyle={styles.dropdownText}
        dropDownContainerStyle={styles.dropdownContainer} // Added dropdown container style
      />

      {workoutName ? (
        <DeleteWorkout
          workoutName={workoutName}
          setWorkoutName={setWorkoutName}
        />
      ) : null}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "view" && styles.activeTab]}
          onPress={() => setActiveTab("view")}
        >
          <Text style={[styles.tabText, activeTab === "view" && styles.activeTabText]}>View Exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "add" && styles.activeTab]}
          onPress={() => setActiveTab("add")}
        >
          <Text style={[styles.tabText, activeTab === "add" && styles.activeTabText]}>
            {editExercise ? "Edit Exercise" : "Add Exercise"}
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "view" ? (
        <ViewExercises workoutName={workoutName} onEditExercise={handleEditExercise} />
      ) : (
        <AddExercise workoutName={workoutName} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#3a3f47",
    borderColor: "#3dffff",
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    color: "#aaa",
  },
  dropdownText: {
    color: "#fff",
  },
  dropdownContainer: {
    backgroundColor: "#3a3f47", // Changed background color for consistency
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#3a3f47",
  },
  activeTab: {
    backgroundColor: "#3dffff",
  },
  tabText: {
    color: "#fff",
  },
  activeTabText: {
    color: "#25292e",
  },
});
