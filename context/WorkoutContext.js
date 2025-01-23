import React, { createContext, useState } from "react";

// 1. Create Context
export const WorkoutContext = createContext();

// 2. Create Provider Component
export const WorkoutProvider = ({ children }) => {
  const [exerciseList, setExerciseList] = useState([
    {
      id: 1,
      exerciseName: "Push-ups",
      exerciseDescription: "3 Sets - regular, wide, narrow",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Monday",
    },
    {
      id: 2,
      exerciseName: "Sit-ups",
      exerciseDescription: "3 Sets",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Monday",
    },
    {
      id: 3,
      exerciseName: "Squats",
      exerciseDescription: "Squat in-place",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Tuesday",
    },
    {
      id: 4,
      exerciseName: "Walk",
      exerciseDescription: "walking on treadmill",
      exerciseDuration: 20,
      exerciseDurationUnits: "minutes",
      workoutName: "Tuesday",
    },
    {
      id: 5,
      exerciseName: "Stretching",
      exerciseDescription: "various stretches",
      exerciseDuration: 5,
      exerciseDurationUnits: "variants",
      workoutName: "Tuesday",
    },
  ]);

  const addExercise = (workout) => {
    setExerciseList((prevExercises) => [...prevExercises, workout]);
  };

  const getExerciseList = (workoutName) =>
    exerciseList.filter((exercise) => exercise.workoutName == workoutName);

  const getWorkoutList = () => {
    // Use a Set to collect unique workout names
    const workoutSet = new Set();

    exerciseList.forEach((exercise) => {
      workoutSet.add(exercise.workoutName);
    });

    // Convert the Set back to an array
    const workoutList = Array.from(workoutSet).map((workoutName) => ({
      name: workoutName,
    }));

    return workoutList;
  };

  return (
    <WorkoutContext.Provider
      value={{
        getWorkoutList,
        addExercise,
        exerciseList,
        getExerciseList,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
