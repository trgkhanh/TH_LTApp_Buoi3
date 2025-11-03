import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type Task = {
  id: string;
  text: string;
};

export default function TodoScreen() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const t = text.trim();
    if (!t) return;
    const newTask: Task = { id: String(Date.now()), text: t };
    setTasks((prev) => [newTask, ...prev]);
    setText("");
  };

  const confirmDelete = (id: string) => {
    Alert.alert("Xóa công việc", "Bạn có chắc muốn xóa công việc này?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => deleteTask(id) },
    ]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <Pressable
        onLongPress={() => confirmDelete(item.id)}
        style={styles.item}
        android_ripple={{ color: "#00000008" }}
      >
        <ThemedText style={styles.itemText}>{item.text}</ThemedText>
        <Pressable
          onPress={() => confirmDelete(item.id)}
          style={styles.deleteButton}
          android_ripple={{ color: "#ff000010" }}
        >
          <ThemedText style={styles.deleteText}>X</ThemedText>
        </Pressable>
      </Pressable>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Danh sách công việc
      </ThemedText>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Nhập công việc mới"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={addTask}
        />
        <Pressable
          onPress={addTask}
          style={[styles.addButton, !text.trim() && styles.addButtonDisabled]}
          disabled={!text.trim()}
          android_ripple={{ color: "#00000010" }}
        >
          <ThemedText type="defaultSemiBold" style={styles.addButtonText}>
            Thêm
          </ThemedText>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListEmptyComponent={
          <ThemedText style={styles.empty}>Chưa có công việc</ThemedText>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f6f9fa",
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    marginBottom: 12,
    color: "#000",
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#0a7ea4",
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
  },
  addButtonDisabled: {
    backgroundColor: "#93c0c6",
  },
  addButtonText: {
    color: "#fff",
  },
  list: {
    marginTop: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  itemText: {
    flex: 1,
    color: "#000",
  },
  deleteButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#ffecec",
  },
  deleteText: {
    color: "#d00",
    fontWeight: "700",
  },
  empty: {
    textAlign: "center",
    marginTop: 24,
    color: "#666",
  },
});
