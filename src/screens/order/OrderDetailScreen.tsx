import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface OrderDetailScreenProps {}

const OrderDetailScreen = (props: OrderDetailScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>OrderDetailScreen</Text>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {},
});
