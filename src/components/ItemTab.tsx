import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/Theme';
import Text from 'elements/Text';

interface ItemTabProps {
  title: string;
  content?: string;
  isFocused?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ItemTab = (props: ItemTabProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.buttonTab,
        props.isFocused ? styles.buttonTabActive : {},
        props.style,
      ]}>
      <Text
        fontWeight={'700'}
        color={props.isFocused ? colors.white : colors.borderColor}>
        {props.title}
      </Text>
      {!!props.content && (
        <Text
          fontWeight={'600'}
          color={props.isFocused ? colors.white : colors.borderColor}>
          {props.content}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ItemTab;

const styles = StyleSheet.create({
  container: {},
  buttonTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    ...Theme.center,
  },
  buttonTabActive: {
    backgroundColor: colors.blue3,
  },
});
