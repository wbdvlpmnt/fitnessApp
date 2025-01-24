import { Text } from "react-native";
import { AddExercise } from "./add-exercise";
import ViewExercises from "./view-exercises";

export default function ExistingWorkout({ workoutName }) {
  return (
    <>
      <AddExercise workoutName={workoutName} />
      <ViewExercises workoutName={workoutName} />
    </>
  );
}
