import React, { createContext, useState } from "react";

// 1. Create Context
export const WorkoutContext = createContext();

// 2. Create Provider Component
export const WorkoutProvider = ({ children }) => {
  const [workoutLog, setWorkoutLog] = useState([
    {
      date: "2025-1-27",
      exercises: [
        {
          id: 1,
          exerciseName: "Push-ups",
          exerciseDescription: "3 Sets - regular, wide, narrow",
          exerciseDuration: 20,
          exerciseDurationUnits: "reps",
          workoutName: "Monday",
          sets: 3,
        },
        {
          id: 2,
          exerciseName: "Sit-ups",
          exerciseDescription: "3 Sets",
          exerciseDuration: 20,
          exerciseDurationUnits: "reps",
          workoutName: "Monday",
          sets: 3,
        },
      ],
    },
    {
      date: "2025-2-14",
      exercises: [
        {
          id: 3,
          exerciseName: "Squats",
          exerciseDescription: "Squat in-place",
          exerciseDuration: 20,
          exerciseDurationUnits: "reps",
          workoutName: "Tuesday",
          sets: 3,
        },
        {
          id: 4,
          exerciseName: "Walk",
          exerciseDescription: "walking on treadmill",
          exerciseDuration: 20,
          exerciseDurationUnits: "minutes",
          workoutName: "Tuesday",
          sets: 1,
        },
      ],
    },
  ]);
  const [workouts, setWorkouts] = useState(["Monday", "Tuesday"]);
  const [exerciseList, setExerciseList] = useState([
    {
      id: 1,
      exerciseName: "Push-ups",
      exerciseDescription: "3 Sets - regular, wide, narrow",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Monday",
      sets: 3, // Added sets parameter
    },
    {
      id: 2,
      exerciseName: "Sit-ups",
      exerciseDescription: "3 Sets",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Monday",
      sets: 3, // Added sets parameter
    },
    {
      id: 3,
      exerciseName: "Squats",
      exerciseDescription: "Squat in-place",
      exerciseDuration: 20,
      exerciseDurationUnits: "reps",
      workoutName: "Tuesday",
      sets: 3, // Added sets parameter
    },
    {
      id: 4,
      exerciseName: "Walk",
      exerciseDescription: "walking on treadmill",
      exerciseDuration: 20,
      exerciseDurationUnits: "minutes",
      workoutName: "Tuesday",
      sets: 1, // Added sets parameter
    },
    {
      id: 5,
      exerciseName: "Stretching",
      exerciseDescription: "various stretches",
      exerciseDuration: 5,
      exerciseDurationUnits: "variants",
      workoutName: "Tuesday",
      sets: 1, // Added sets parameter
    },
  ]);
  const [editExercise, setEditExercise] = useState();

  const addExercise = (ex) => {
    setExerciseList((prevExercises) => [...prevExercises, ex]);
  };

  const updateExercise = (updatedExercise) => {
    // Ensure the updated exercise has a valid id before proceeding
    if (!updatedExercise.id) {
      console.error("Error: updatedExercise does not have a valid id.");
      return;
    }

    // Update the exercise list
    setExerciseList((prevExercises) =>
      prevExercises.map(
        (exercise) =>
          exercise.id === updatedExercise.id
            ? { ...exercise, ...updatedExercise } // Update the matching exercise
            : exercise // Keep others unchanged
      )
    );

    // Reset edit mode
    setEditExercise(null);
  };

  const exerciseToEdit = (id) => {
    const exercise = exerciseList.filter((e) => e.id == id)[0];
    setEditExercise(exercise);
  };

  const clearExerciseToEdit = () => setEditExercise();

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, workout]);
  };

  const removeExercise = (id) => {
    setExerciseList((prevExercise) => prevExercise.filter((e) => e.id !== id));
  };

  // Remove a workout
  const removeWorkout = (workoutName) => {
    setExerciseList((prevExercise) =>
      prevExercise.filter((e) => e.workoutName !== workoutName)
    );
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((w) => w !== workoutName)
    );
  };

  const getExerciseList = (workoutName) =>
    exerciseList.filter((exercise) => exercise.workoutName == workoutName);

  const saveWorkoutLog = (workout) => {
    setWorkoutLog((prev) => [...prev, workout]);
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        addExercise,
        removeWorkout,
        exerciseList,
        getExerciseList,
        addWorkout,
        removeExercise,
        exerciseToEdit,
        editExercise,
        updateExercise,
        clearExerciseToEdit,
        saveWorkoutLog,
        workoutLog,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
