import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

type Props = {};

const CustomerScreen = (props: Props) => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw('text-blue-600')}>Hello world</Text>
    </SafeAreaView>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({});
