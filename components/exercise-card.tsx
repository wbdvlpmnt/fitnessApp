import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function ExerciseCard({ exercise }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>{exercise.exerciseName}</Text>
        <Text style={styles.cardDescription}>
          {exercise.exerciseDescription}
        </Text>
      </View>
    </TouchableOpacity>
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
    height: "35%",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
  },
  cardDescription: {
    color: "#fff",
    fontSize: 14,
  },
});
