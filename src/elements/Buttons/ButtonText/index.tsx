import Text, {TextProps} from 'elements/Text';
import React, {memo} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  DimensionValue,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/Theme';

interface ButtonTextProps {
  title?: string;
  style?: ViewStyle;
  titleColor?: string;
  textProps?: TextProps;
  onPress?: () => void;
  borderColor?: ColorValue | string;
  marginLeft?: number;
  backgroundColor?: ColorValue | string;
  white?: boolean;
  hilight?: boolean;
  blueLight?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  height?: DimensionValue;
  boderRadius?: number;
}

const ButtonText = memo(
  ({
    backgroundColor,
    title,
    style,
    titleColor = colors.text,
    onPress,
    marginLeft,
    white,
    hilight,
    disabled,
    isLoading,
    height,
    boderRadius,
    ...textProps
  }: ButtonTextProps) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.container,
          Theme.flexRow,
          {
            marginLeft: marginLeft,
            backgroundColor: disabled
              ? String(backgroundColor) + '70'
              : backgroundColor,
            height: height ? height : 42,
            borderRadius: boderRadius,
          },
          style,
        ]}
        onPress={onPress}
        activeOpacity={0.54}>
        <Text
          color={disabled ? titleColor + '98' : titleColor}
          white={white}
          hilight={hilight}
          {...textProps.textProps}>
          {title}
        </Text>
        {!!isLoading && (
          <ActivityIndicator color={colors.white} style={{marginLeft: 10}} />
        )}
      </TouchableOpacity>
    );
  },
);

export default ButtonText;

const styles = StyleSheet.create({
  container: {
    ...Theme.center,
  },
});
