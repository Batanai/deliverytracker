import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

type Props = {
  userId: string;
};

const useCustomerOrders = ({ userId }: Props) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createAt: value.createAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Long: value.Long,
      trackingItems: value.trackingItems,
    }));

    const customerOrders = orders.filter(
      order => order.trackingItems.customer_id === userId,
    );
    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrders;
