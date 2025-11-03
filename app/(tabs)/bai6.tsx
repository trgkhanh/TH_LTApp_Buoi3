import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

function getRandomColor(): string {
  // generate random hex color
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
}

export default function ColorBlockScreen() {
  const [color, setColor] = useState<string>("#7cd4fd");

  const onChangeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Khối màu
      </ThemedText>

      <View style={[styles.block, { backgroundColor: color }]} />

      <ThemedText style={styles.hexLabel}>{color}</ThemedText>

      <Pressable
        style={styles.button}
        onPress={onChangeColor}
        android_ripple={{ color: "#00000010" }}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>
          Đổi màu
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#f7e9e9ff'
  },
  title: {
    marginBottom: 16,
    color: "#000",
  },
  block: {
    width: 220,
    height: 220,
    borderRadius: 12,
    // subtle border so very-light colors remain visible
    borderWidth: 1,
    borderColor: "#00000010",
  },
  hexLabel: {
    marginTop: 12,
    marginBottom: 12,
    color: "#000",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
  },
});
