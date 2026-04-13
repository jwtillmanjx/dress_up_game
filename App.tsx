import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleScreen from './src/screens/TitleScreen';
import DressingScreen from './src/screens/DressingScreen';

export type RootStackParamList = {
  Title: undefined;
  Dressing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Title">
          <Stack.Screen
            name="Title"
            component={TitleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dressing"
            component={DressingScreen}
            options={{ title: 'Dressing Area' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
