import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// Home Screen Component
function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Ionicons name="home" size={60} color="#2196F3" />
      <ThemedText style={styles.title}>Home</ThemedText>
      <ThemedText style={styles.content}>Trang Home</ThemedText>
    </ThemedView>
  );
}

// Search Screen Component
function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <Ionicons name="search" size={60} color="#4CAF50" />
      <ThemedText style={styles.title}>Search</ThemedText>
      <ThemedText style={styles.content}>Trang Tìm kiếm</ThemedText>
    </ThemedView>
  );
}

// Settings Screen Component
function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <Ionicons name="settings" size={60} color="#FF9800" />
      <ThemedText style={styles.title}>Settings</ThemedText>
      <ThemedText style={styles.content}>Trangcafi đặt</ThemedText>
    </ThemedView>
  );
}

// Main App Component
export default function Bai9() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
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
    marginVertical: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#666",
  },
});
