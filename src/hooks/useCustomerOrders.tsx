import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

type Props = {
  userId: string;
};

const useCustomerOrders = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  console.log('USER', userId);
  useEffect(() => {
    if (!data) return;

    const ordersArray: Order[] = data?.getOrders.map(
      ({ value }: OrderResponse) => ({
        carrier: value.carrier,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng,
        trackingItems: value.trackingItems,
      }),
    );

    const customerOrders = ordersArray.filter(
      order => order.trackingItems.customer_id === userId,
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrders;
