import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function ViewExercises() {
  const fakeWorkoutList = [
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
  ];

  return (
    <ScrollView style={styles.workoutContainer}>
      {fakeWorkoutList.map((exercise) => {
        return (
          <TouchableOpacity key={exercise.id} style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{exercise.exerciseName}</Text>
              <Text>{exercise.exerciseDescription}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#3a3f47",
    color: "#fff",
    width: "100%",
    marginTop: 10,
  },
  workoutContainer: {
    borderColor: "pink",
    borderWidth: 2,
    width: "100%",
    padding: 20,
  },
  cardTitle: {
    color: "#fff",
  },
});
