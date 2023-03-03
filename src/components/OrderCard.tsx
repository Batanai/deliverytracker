import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
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

type Props = {
  item: Order;
};

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderCard = ({ item }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('order', { order: item })}>
      <Card containerStyle={tw('px-5 rounded-lg')}>
        <View style={tw('flex-row justify-between items-center')}>
          <View>
            <Icon
              name="truck-delivery"
              color="#eb6a7c"
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text style={[tw('text-gray-400'), { fontSize: 10 }]}>
              {item.carrier}-{item.trackingId}
            </Text>
            <Text style={tw('text-gray-500 text-xl')}>
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View style={tw('flex-row items-center')}>
            <Text style={[tw('text-sm'), { color: '#eb6a7c' }]}>
              {item.trackingItems.items.length} x
            </Text>
            <Icon style={tw('ml-2')} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
