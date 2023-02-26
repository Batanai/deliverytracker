import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import CustomerScreen from './src/screens/CustomerScreen';
import utilities from './tailwind.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/delivery-tracker',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    //@ts-ignore - tailwind missing type definitions
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
