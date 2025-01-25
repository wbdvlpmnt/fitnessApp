import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function PillButton({ active, setActive }) {
  return (
    <View style={styles.pill}>
      <TouchableOpacity
        style={[styles.button, active === "New" && styles.activeButton]}
        onPress={() => setActive("New")}
      >
        <Text style={[styles.text, active === "New" && styles.activeText]}>
          New
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, active === "Existing" && styles.activeButton]}
        onPress={() => setActive("Existing")}
      >
        <Text style={[styles.text, active === "Existing" && styles.activeText]}>
          Existing
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 20,
    width: 140,
    height: 42,
    backgroundColor: "#3a3f47",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
  },
  activeButton: {
    backgroundColor: "#3dffff", // Highlight for the active button
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  activeText: {
    color: "#000", // Dark text for the active button
    fontWeight: "700",
  },
});
