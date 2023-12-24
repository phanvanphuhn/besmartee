import {ParamListBase, RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainParamList} from './service/NavigationParams';
import {CompositeNavigationProp} from '@react-navigation/native';

export interface BaseNavigationProps<
  P extends ParamListBase,
  R extends keyof ParamListBase = string,
> {
  navigation: NativeStackNavigationProp<P, R>;
  route: RouteProp<P, R>;
}

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? {screen: K; params?: ParamList[K]}
    : {screen: K; params: ParamList[K]};
}[keyof ParamList];

export type BaseRouteProps<RouteName extends keyof MainParamList> = RouteProp<
  MainParamList,
  RouteName
>;
