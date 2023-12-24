import {
  CommonActions,
  DrawerActions,
  DrawerNavigationState,
  ParamListBase,
  useLinkBuilder,
} from '@react-navigation/native';
import * as React from 'react';

import {DrawerItem} from '@react-navigation/drawer';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {View} from 'react-native';
import {Routes} from 'configs/Routes';

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList(props: Props) {
  const buildLink = useLinkBuilder();

  // Add your logic here
  const visibleRoutes = [Routes.HomeScreen, 'profile', 'resources', 'faq'];

  const drawerList = props.state.routes.map((route: any, i: number) => {
    const focused = i === props.state.index;
    const {title, drawerLabel, drawerIcon} =
      props.descriptors[route.key].options;

    if (!visibleRoutes.includes(route.name)) {
      return <View key={route.key} />;
    }

    return (
      <DrawerItem
        {...props}
        key={route.key}
        label={
          drawerLabel !== undefined
            ? drawerLabel
            : title !== undefined
            ? title
            : route.name
        }
        icon={drawerIcon}
        focused={focused}
        activeTintColor={props.activeTintColor}
        inactiveTintColor={props.inactiveTintColor}
        activeBackgroundColor={props.activeBackgroundColor}
        inactiveBackgroundColor={props.inactiveBackgroundColor}
        labelStyle={props.labelStyle}
        style={props.itemStyle}
        // to={buildLink(route.name, route.params)}
        onPress={() => {
          props.navigation.dispatch({
            ...(focused
              ? DrawerActions.closeDrawer()
              : CommonActions.navigate(route.name)),
            target: props.state.key,
          });
        }}
      />
    );
  });
  console.log('drawerList: ', drawerList);
  return drawerList;
}
