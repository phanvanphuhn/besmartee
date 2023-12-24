import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {BackHandler, NativeEventSubscription} from 'react-native';
import {BaseProps, BaseState} from './BaseComponent';

export default class BasePureComponent<
  P extends BaseProps<any>,
  S extends BaseState,
> extends React.PureComponent<P, S> {
  // This initialize is required to set before you want to use this.context
  // Preference link : https://reactjs.org/docs/context.html
  // With this setup, all child component that extends BaseComponent will be usable this.context without setup
  // static contextType = LocalizationContext;

  /** **********************************************************************************************************************
   * Default
   * Implement default methods
   *
   *********************************************************************************************************************** */

  componentDidMount() {
    if (this.isBackHandlerEnabled() == true) {
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        this.hardwareBackPress,
      );
    }
  }

  componentWillUnmount() {
    console.log('BaseComponent_componentWillUnmountt');
    if (this.backHandler != undefined) {
      this.backHandler.remove();
    }
  }

  /** **********************************************************************************************************************
   * Navigation
   * Implement navigation methods
   *
   *********************************************************************************************************************** */

  backHandler?: NativeEventSubscription;

  hardwareBackPress = () => {
    if (this.props.navigation.isFocused()) {
      this.onBackPressCallBack();
      return true;
    }
    return false;
  };

  /**
   * Nếu muốn thực hiện lắng nghe nút back vật lý trên điện thoại android ở màn hình nào thì màn hình đó
   * cần thiết đặt 2 điều kiện
   * 1. Override và xét biến isBackHandlerEnabled = true
   * 2. Override lại hàm componentDidMount và để super.componentDidMount()
   */
  isBackHandlerEnabled() {
    return false;
  }

  onBackPressCallBack() {}

  goHome() {
    this.props.navigation.popToTop();
  }

  /**
   *
   * @param routeName
   * @param params
   */
  reset(routeName: string, params?: object) {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName, params}],
      }),
    );
  }

  /**
   *
   * @param screenName
   * @param params
   */
  openScreen(screenName: string, params?: object) {
    this.props.navigation.navigate(screenName, params ?? {});
  }

  /**
   *
   */
  getDataFromPreviousScreen = <T extends object>() => {
    if (this.props && this.props.route.params) {
      const data = this.props.route.params as T;
      return data;
    }
    return {};
  };
}
