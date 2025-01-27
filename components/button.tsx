import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary" | "secondary";
  onPress?: () => void;
  fontAwesomeName?: any;
  disabled?: boolean; // Added disabled prop
};

export default function Button({
  label,
  theme,
  onPress,
  fontAwesomeName,
  disabled,
}: Props) {
  if (theme === "primary" && fontAwesomeName) {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#3dffff", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[
            styles.button,
            { backgroundColor: disabled ? "#aaa" : "#fff" }, // Change background color if disabled
          ]}
          onPress={onPress}
          disabled={disabled} // Disable button if disabled prop is true
        >
          <FontAwesome
            name={fontAwesomeName}
            size={18}
            color={disabled ? "#555" : "#25292e"} // Change icon color if disabled
            style={styles.buttonIcon}
          />
          <Text
            style={[
              styles.buttonLabel,
              { color: disabled ? "#555" : "#25292e" }, // Change text color if disabled
            ]}
          >
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  if (theme === "secondary") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: disabled ? "#555" : "#3a3f47" }, // Change background color if disabled
          ]}
          onPress={onPress}
          disabled={disabled} // Disable button if disabled prop is true
        >
          <Text
            style={[
              styles.buttonLabel,
              { color: disabled ? "#aaa" : "#fff" }, // Change text color if disabled
            ]}
          >
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        disabled={disabled} // Disable button if disabled prop is true
      >
        <Text
          style={[
            styles.buttonLabel,
            { color: disabled ? "#aaa" : "#fff" }, // Change text color if disabled
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    margin: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
