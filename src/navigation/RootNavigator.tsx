import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

type RootStackParamList = {
  maintab: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

interface Props {}

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="maintab" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
