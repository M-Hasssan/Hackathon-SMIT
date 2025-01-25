import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SignUpScreen from "./screens/SignUp";
import ProfileScreen from "./screens/Profile";
import Calculator from "./screens/calculator";
import BusinessLoans from "./screens/BusinessLoans";
import WeddingLoans from "./screens/WeddingLoans";
import eduLoans from "./screens/eduLoans";
import Startups from "./screens/Startups";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Calculator" component={Calculator} />
      <Drawer.Screen name="Business Loan" component={BusinessLoans} />
      <Drawer.Screen name="Wedding Loan" component={WeddingLoans} />
      <Drawer.Screen name="Education Loan" component={eduLoans} />
      <Drawer.Screen name="Startup Loan" component={Startups} />



    </Drawer.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
