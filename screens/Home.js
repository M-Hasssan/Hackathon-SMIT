import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { auth } from "../firebaseconfig";

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
