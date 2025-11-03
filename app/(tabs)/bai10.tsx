import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Stack = createNativeStackNavigator();

// Type definition for a student
type Student = {
  id: string;
  name: string;
  studentId: string;
  className: string;
  email: string;
};

// Initial students data
const initialStudents: Student[] = [
  {
    id: "1",
    name: "Trần Gia Khánh",
    studentId: "21522227",
    className: "KTPM2021",
    email: "21522227@gm.uit.edu.vn",
  },
  {
    id: "2",
    name: "Nguyễn Văn A",
    studentId: "21522111",
    className: "KTPM2021",
    email: "21522111@gm.uit.edu.vn",
  },
];

// Student List Screen
function StudentListScreen({ navigation }: { navigation: any }) {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const renderItem = ({ item }: { item: Student }) => (
    <TouchableOpacity
      style={styles.studentItem}
      onPress={() => navigation.navigate("StudentDetail", { student: item })}
    >
      <ThemedText style={styles.studentName}>{item.name}</ThemedText>
      <ThemedText style={styles.studentInfo}>{item.studentId}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddStudent", { setStudents })}
      >
        <ThemedText style={styles.buttonText}>Thêm sinh viên mới</ThemedText>
      </TouchableOpacity>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </ThemedView>
  );
}

// Student Detail Screen
function StudentDetailScreen({ route }: { route: any }) {
  const { student } = route.params;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.detailCard}>
        <ThemedText style={styles.detailTitle}>Thông tin sinh viên</ThemedText>
        <ThemedText style={styles.detailText}>
          Họ và tên: {student.name}
        </ThemedText>
        <ThemedText style={styles.detailText}>
          MSSV: {student.studentId}
        </ThemedText>
        <ThemedText style={styles.detailText}>
          Lớp: {student.className}
        </ThemedText>
        <ThemedText style={styles.detailText}>
          Email: {student.email}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

// Add Student Screen
function AddStudentScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { setStudents } = route.params;
  const [newStudent, setNewStudent] = useState({
    name: "",
    studentId: "",
    className: "",
    email: "",
  });

  const handleSubmit = () => {
    if (
      !newStudent.name ||
      !newStudent.studentId ||
      !newStudent.className ||
      !newStudent.email
    ) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin");
      return;
    }

    const student: Student = {
      id: Date.now().toString(),
      ...newStudent,
    };

    setStudents((prev: Student[]) => [...prev, student]);
    Alert.alert("Thành công", "Đã thêm sinh viên mới");
    navigation.goBack();
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <ThemedText style={styles.formTitle}>Thêm sinh viên mới</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          value={newStudent.name}
          onChangeText={(text) => setNewStudent({ ...newStudent, name: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="MSSV"
          value={newStudent.studentId}
          onChangeText={(text) =>
            setNewStudent({ ...newStudent, studentId: text })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Lớp"
          value={newStudent.className}
          onChangeText={(text) =>
            setNewStudent({ ...newStudent, className: text })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={newStudent.email}
          onChangeText={(text) => setNewStudent({ ...newStudent, email: text })}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <ThemedText style={styles.buttonText}>Thêm sinh viên</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

// Main App Component
export default function Bai10() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentList"
        component={StudentListScreen}
        options={{
          title: "Danh sách sinh viên",
        }}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetailScreen}
        options={{
          title: "Chi tiết sinh viên",
        }}
      />
      <Stack.Screen
        name="AddStudent"
        component={AddStudentScreen}
        options={{
          title: "Thêm sinh viên",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    flex: 1,
  },
  studentItem: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000000",
  },
  studentInfo: {
    fontSize: 14,
    color: "#000000",
  },
  addButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailCard: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 12,
    color: "#000000",
  },
  form: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
});
