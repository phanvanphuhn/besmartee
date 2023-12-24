import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CreateOrderScreenProps {}

const CreateOrderScreen = (props: CreateOrderScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>CreateOrderScreen</Text>
    </View>
  );
};

export default CreateOrderScreen;

const styles = StyleSheet.create({
  container: {},
});
