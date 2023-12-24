import * as React from 'react';
import {useContext} from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {ScrollContext} from './ScrollWrapper';

interface ItemScrollProps {
  name?: string;
  render?: () => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ItemScroll = ({render, name, style, children}: ItemScrollProps) => {
  const scrollContext = useContext(ScrollContext);
  const handleLayout = (event: LayoutChangeEvent) => {
    if (scrollContext && scrollContext.scrollTracker && name) {
      scrollContext.scrollTracker(event.target, name);
    }
  };
  return (
    <View onLayout={handleLayout} style={style}>
      {render ? render() : children}
    </View>
  );
};

export default ItemScroll;

const styles = StyleSheet.create({
  container: {},
});
