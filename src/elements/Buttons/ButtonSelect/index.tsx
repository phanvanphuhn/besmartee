import Text from 'elements/Text';
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/style/Theme';

interface ButtonSelectProps {
  label: string;
  isSelected?: boolean;
  style?: StyleProp<ViewProps>;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
}

const ButtonSelect = (props: ButtonSelectProps) => {
  let marginTop;
  let marginLeft;
  let marginRight;
  let marginBottom;
  let marginHorizontal;
  let marginVertical;
  if (props.marginTop) {
    marginTop = props.marginTop;
  }
  if (props.marginLeft) {
    marginLeft = props.marginLeft;
  }
  if (props.marginRight) {
    marginRight = props.marginRight;
  }
  if (props.marginBottom) {
    marginBottom = props.marginBottom;
  }
  if (props.marginHorizontal) {
    marginHorizontal = props.marginHorizontal;
  }
  if (props.marginVertical) {
    marginVertical = props.marginVertical;
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        Theme.flexRow,
        {
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        },
        styles.container,
        props?.style,
      ]}>
      {props?.isSelected ? (
        <View style={styles.containerSelected}>
          <View style={styles.selected} />
        </View>
      ) : (
        <View style={styles.unSelected} />
      )}
      <Text
        semiBold
        size={14}
        lineHeight={24}
        color={colors.dark}
        marginLeft={11}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSelect;

const styles = StyleSheet.create({
  unSelected: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderColor: colors.inactive,
    borderWidth: 1,
  },
  selected: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  containerSelected: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 2,
  },
  container: {},
});
