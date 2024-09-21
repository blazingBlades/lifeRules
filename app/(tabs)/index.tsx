import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TaskScreen from './TaskScreen';
import EventScreen from './EventScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Task: undefined;
  Event: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
}
