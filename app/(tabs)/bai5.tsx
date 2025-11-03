import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function AverageScreen() {
  const [toan, setToan] = useState("");
  const [ly, setLy] = useState("");
  const [hoa, setHoa] = useState("");
  const [avg, setAvg] = useState<number | null>(null);

  const parseScore = (s: string) => {
    const n = parseFloat(s.replace(",", "."));
    return Number.isFinite(n) ? n : NaN;
  };

  const calculate = () => {
    const a = parseScore(toan);
    const b = parseScore(ly);
    const c = parseScore(hoa);
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
      setAvg(null);
      return;
    }
    const value = (a + b + c) / 3;
    setAvg(Math.round(value * 100) / 100);
  };

  // valid when all three inputs parse to finite numbers
  const allValid = () => {
    return (
      Number.isFinite(parseScore(toan)) &&
      Number.isFinite(parseScore(ly)) &&
      Number.isFinite(parseScore(hoa))
    );
  };

  return (
    <ThemedView style={styles.wrapper}>
      <ThemedText type="title" style={styles.title}>
        Nhập điểm
      </ThemedText>

      <View style={styles.form}>
        <ThemedText style={styles.text}>Toán</ThemedText>
        <TextInput
          style={styles.input}
          value={toan}
          onChangeText={(v) => {
            setToan(v);
            // clear previous result until user presses calculate again
            setAvg(null);
          }}
          keyboardType="numeric"
        />

        <ThemedText style={styles.text}>Lý</ThemedText>
        <TextInput
          style={styles.input}
          value={ly}
          onChangeText={(v) => {
            setLy(v);
            setAvg(null);
          }}
          keyboardType="numeric"
        />

        <ThemedText style={styles.text}>Hóa</ThemedText>
        <TextInput
          style={styles.input}
          value={hoa}
          onChangeText={(v) => {
            setHoa(v);
            setAvg(null);
          }}
          keyboardType="numeric"
        />

        <Pressable
          style={[styles.button, !allValid() && styles.buttonDisabled]}
          onPress={calculate}
          disabled={!allValid()}
          android_ripple={{ color: "#00000010" }}
        >
          <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
            Tính điểm trung bình
          </ThemedText>
        </Pressable>

        <ThemedText style={styles.result}>
          {avg === null
            ? "Chưa có kết quả hoặc dữ liệu không hợp lệ"
            : `Điểm trung bình: ${avg}`}
        </ThemedText>
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
    backgroundColor: '#69e4f4c6'
  },
  title: {
    marginBottom: 12,
    color: "#000",
  },
  form: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    alignItems: "stretch",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0c0505ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#93c0c6",
    opacity: 0.8,
  },
  result: {
    fontSize: 20,
    marginTop: 12,
    textAlign: "center",
    color: "#000",
  },
  text: {
    color: "#000",
  },
});
