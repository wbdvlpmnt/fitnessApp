import React, { createContext, useState } from "react";

// 1. Create Context
export const WorkoutContext = createContext();

// 2. Create Provider Component
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [exerciseList, setExerciseList] = useState([
    {
      id: 1,
      exerciseName: "Push-ups",
      exerciseDescription: "3 Sets - regular, wide, narrow",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
    },
    {
      id: 2,
      exerciseName: "Sit-ups",
      exerciseDescription: "3 Sets",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
    },
    {
      id: 3,
      exerciseName: "Squats",
      exerciseDescription: "Squat in-place",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
    },
    {
      id: 4,
      exerciseName: "Walk",
      exerciseDescription: "walking on treadmill",
      exerciseDuration: 20,
      exerciseDurationUnits: "minutes",
    },
    {
      id: 5,
      exerciseName: "Stretching",
      exerciseDescription: "various stretches",
      exerciseDuration: 5,
      exerciseDurationUnits: "variants",
    },
  ]);

  // Add a workout
  const addWorkout = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  // Remove a workout
  const removeWorkout = (id) => {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((w) => w.id !== id));
  };

  return (
    <WorkoutContext.Provider
      value={{ workouts, addWorkout, removeWorkout, exerciseList }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
