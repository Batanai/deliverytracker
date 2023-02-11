import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import CustomerScreen from './src/screens/CustomerScreen';
import utilities from './tailwind.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    //@ts-ignore - tailwind missing type definitions
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
