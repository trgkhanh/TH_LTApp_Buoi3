import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ProfileCardScreen() {
  return (
    <ThemedView style={styles.wrapper}>
      <View style={styles.card}>
        <Image
          source={require("@/assets/images/avt.png")}
          style={styles.avatar}
          contentFit="cover"
        />

        <ThemedText type="title" style={styles.name} numberOfLines={1}>
          Trương Quốc Khánh
        </ThemedText>

        <ThemedText style={styles.job}>Student</ThemedText>

        <Pressable
          style={styles.contact}
          android_ripple={{ color: "#f3191910" }}
        >
          <ThemedText style={styles.contactText}>khanh123@gmail.com</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#7cd4fdff",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    // elevation (Android)
    elevation: 6,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginBottom: 12,
    backgroundColor: "#eee",
  },
  name: {
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 6,
  },
  job: {
    textAlign: "center",
    marginBottom: 12,
    color: "#666",
  },
  contact: {
    marginTop: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  contactText: {
    textAlign: "center",
    color: "#0a7ea4",
  },
});
