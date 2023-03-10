import React from 'react';
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';

export type RootStackParamList = {
  maintab: undefined;
  myModal: { userId: string; name: string };
  order: { order: Order };
};

interface Props {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="maintab" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="myModal"
          component={ModalScreen}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="order" component={OrderScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
