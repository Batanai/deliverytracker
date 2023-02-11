import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screens/CustomerScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { TabRouter, useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

type TabStackParamList = {
  customers: undefined;
  orders: undefined;
};

interface Props {}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = (props: Props) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#59c1cc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'customers') {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? '#59c1cc' : 'gray'}
              />
            );
          } else if (route.name === 'orders') {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? '#eb6a7c' : 'gray'}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="customers" component={CustomerScreen} />
      <Tab.Screen name="orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
