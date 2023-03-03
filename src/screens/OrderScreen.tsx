import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { TabStackParamList } from '../navigation/TabNavigator';
import { useTailwind } from 'tailwind-rn/dist';
import DeliveryCard from '../components/DeliveryCard';

type Props = {};

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'order'>;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderScreen = (props: Props) => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const tw = useTailwind();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTitleStyle: { color: 'black' },
      headerBackTitle: 'Deliveries',
      headerTintColor: '#eb6a7c',
    });
  }, [order]);

  return (
    <View style={tw('mt-2')}>
      <DeliveryCard order={order} fullwidth />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
