import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from 'configs/Routes';
import React, {memo} from 'react';
import OrderScreen from 'screens/order/OrderScreen';
import OrderDetailScreen from 'screens/order/OrderDetailScreen';
import CreateOrderScreen from 'screens/order/CreateOrderScreen';

const Stack = createNativeStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.OrderScreen}>
      <Stack.Screen name={Routes.OrderScreen} component={OrderScreen} />
      <Stack.Screen
        name={Routes.OrderDetailScreen}
        component={OrderDetailScreen}
      />
      <Stack.Screen
        name={Routes.CreateOrderScreen}
        component={CreateOrderScreen}
      />
    </Stack.Navigator>
  );
});

export default RootStack;
