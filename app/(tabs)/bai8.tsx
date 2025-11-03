import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Home Screen</ThemedText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <ThemedText style={styles.buttonText}>Xem hồ sơ</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

// Profile Screen Component
function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Profile Screen</ThemedText>
      <View style={styles.profileInfo}>
        <ThemedText style={styles.profileText}>
          Họ và tên: Trương Quốc Khánh
        </ThemedText>
        <ThemedText style={styles.profileText}>MSSV: 123</ThemedText>
        <ThemedText style={styles.profileText}>Lớp: 1a</ThemedText>
        <ThemedText style={styles.profileText}>
          Email: khanh123@gmail.com
        </ThemedText>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <ThemedText style={styles.buttonText}>Quay lại</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

// Main App Component
export default function Bai8() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileInfo: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
    color:'#000000ff'
  },
});
