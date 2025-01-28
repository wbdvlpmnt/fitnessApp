import StartExercises from "@/components/startExercises";
import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Start() {
  const [exercises, setExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const { workouts, exerciseList } = useContext(WorkoutContext);

  function getWorkoutChoices() {
    const choices = workouts.map((el) => {
      return {
        label: el,
        value: el,
      };
    });
    setItems(choices);
  }

  function getExercisesForWorkout() {
    const exList = exerciseList.filter((el) => el.workoutName === workoutName);
    setExercises(exList);
  }

  useEffect(() => {
    getWorkoutChoices();
    if (workoutName.length > 0) {
      getExercisesForWorkout();
    }
  }, [workouts, workoutName]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
        <StartExercises exercises={exercises} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 5, // Added padding for better UI
  },
  content: {
    padding: 15,
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e", // Changed background color for better contrast
    borderRadius: 10, // Added border radius for better UI
  },
  dropdown: {
    backgroundColor: "#3a3f47",
    borderColor: "#3dffff",
    borderRadius: 10,
    marginBottom: 3,
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
});
