import { AddExercise } from "@/components/add-exercise";
import ViewExercises from "@/components/view-exercises";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { WorkoutContext } from "@/context/WorkoutContext";
import DropDownPicker from "react-native-dropdown-picker";

export default function Workout() {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutList, setWorkoutList] = useState<
    { label: string; value: string }[]
  >([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { getWorkoutList, exerciseList } = useContext(WorkoutContext);

  useEffect(() => {
    const workouts = getWorkoutList();
    const items = workouts.map((workout) => ({
      label: workout.name,
      value: workout.name,
    }));
    setWorkoutList(items);
  }, [exerciseList]);

  const handleWorkoutSelect = (name: string) => {
    console.log("Selected or added workout:", name);

    if (!name) return; // Avoid handling null or empty names

    setWorkoutList((prevWorkoutList) => {
      if (prevWorkoutList.some((workout) => workout.value === name)) {
        return prevWorkoutList; // Avoid duplicates
      }
      console.log("Adding new workout:", name); // Debugging
      return [...prevWorkoutList, { label: name, value: name }];
    });

    setWorkoutName(name); // Update the selected workout
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <DropDownPicker
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            items={workoutList}
            setItems={setWorkoutList}
            value={workoutName}
            setValue={(callbackOrValue) => {
              const name =
                typeof callbackOrValue === "function"
                  ? callbackOrValue(workoutName)
                  : callbackOrValue;

              handleWorkoutSelect(name);
            }}
            placeholder="Select or Create Workout"
            searchable
            style={styles.dropdown}
            textStyle={styles.dropdownText}
          />
        </View>
        <AddExercise workoutName={workoutName} />
        <ViewExercises workoutName={workoutName} />
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
  dropdown: {
    width: "100%",
    backgroundColor: "#3a3f47",
    borderColor: "#aaa",
  },
  dropdownText: {
    color: "#3a3f47",
    fontSize: 16,
  },
});
