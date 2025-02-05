import MetricCard from "@/components/metricCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Index() {
  const { workoutLog } = useContext(WorkoutContext);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [totalWorkoutsThisYear, setTotalWorkoutsThisYear] = useState(0);
  const [totalWorkoutsThisMonth, setTotalWorkoutsThisMonth] = useState(0);

  function getWorkoutThisYear(workout) {
    const workoutDate = new Date(workout.date);
    const currentYear = new Date().getFullYear();
    if (workoutDate.getFullYear() === currentYear) {
      setTotalWorkoutsThisYear((prev) => prev + 1);
    }
  }

  function getWorkoutThisMonth(workout) {
    const workoutDate = new Date(workout.date);
    const currentMonth = new Date().getMonth();
    if (workoutDate.getMonth() === currentMonth) {
      setTotalWorkoutsThisMonth((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setTotalWorkouts(workoutLog.length);
    workoutLog.forEach((workout) => {
      getWorkoutThisYear(workout);
      getWorkoutThisMonth(workout);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MetricCard metric={"Total Workouts"} value={totalWorkouts} />
        <MetricCard
          metric={"Workouts This Year"}
          value={totalWorkoutsThisYear}
        />
        <MetricCard
          metric={"Workouts This Month"}
          value={totalWorkoutsThisMonth}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center", // Centered content for better UI
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold", // Added bold font weight for better readability
  },
});
