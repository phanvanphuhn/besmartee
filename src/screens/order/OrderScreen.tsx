import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from 'elements/Layout/Container';

interface OrderScreenProps {}

const OrderScreen = (props: OrderScreenProps) => {
  const [state, setState] = useState();
  return (
    <Container style={styles.container}>
      <Text>OrderScreen</Text>
    </Container>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {},
});
