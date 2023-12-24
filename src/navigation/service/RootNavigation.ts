import * as React from 'react';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();
export const isReadyRef: any = React.createRef<boolean>();
export function navigate(name: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export function push(screenName: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(screenName, params));
  }
}
export function replace(screenName: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(screenName, params));
  }
}
export function reset(name: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.resetRoot({
      index: 0,
      routes: [{name, params}],
    });
  }
}
