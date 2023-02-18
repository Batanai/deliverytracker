import React from 'react';
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  maintab: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

interface Props {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
