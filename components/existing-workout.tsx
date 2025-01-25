import { Text, TouchableOpacity } from "react-native";
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
  const { workouts, clearExerciseToEdit } = useContext(WorkoutContext);

  useEffect(() => {
    // setValue(workoutName);
    const choices = workouts.map((el) => {
      return {
        label: el,
        value: el,
      };
    });
    setItems(choices);
    clearExerciseToEdit();
  }, [workouts, workoutName]);

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
      />

      {workoutName ? <DeleteWorkout /> : null}

      <AddExercise workoutName={workoutName} />
      <ViewExercises workoutName={workoutName} />
    </>
  );
}
