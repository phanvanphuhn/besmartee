/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import RootApp from 'navigation/RootApp';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import RootView from './src/RootView';

const App = () => {
  return (
    <RootView>
      <RootApp />
      <FlashMessage style={{paddingTop: 20}} />
    </RootView>
  );
};

const styles = StyleSheet.create({});
export default App;
