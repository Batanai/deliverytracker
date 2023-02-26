import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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
import { Icon } from '@rneui/themed';
import DeliveryCard from '../components/DeliveryCard';
import useCustomerOrders from '../hooks/useCustomerOrders';

type Props = {};

export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, 'myModal'>
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'myModal'>;

const ModalScreen = (props: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { userId, name },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        style={tw('absolute right-5 top-5 z-10')}
        onPress={() => navigation.goBack()}>
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <View style={[tw('py-5 border-b'), { borderColor: '#59c1cc' }]}>
          <Text
            style={[tw('text-center text-xl font-bold'), { color: '#59c1cc' }]}>
            {name}
          </Text>
          <Text style={[tw('text-center italic text-sm')]}>Deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={orders}
        keyExtractor={order => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
