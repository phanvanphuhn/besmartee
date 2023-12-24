import Image from 'elements/Image';
import Text, {TextProps} from 'elements/Text';
import React, {memo} from 'react';
import {
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/style/Theme';

interface ButtonTextProps {
  title?: string;
  borderColor?: ColorValue | string;
  icon?: ImageSourcePropType;
  tintColor?: string;
  style?: ViewStyle;
  iconStyle?: any;
  titleColor?: string;
  backgroundColor?: string;
  textProps?: TextProps;
  onPress?: () => void;
  disabled?: boolean;
}

const ButtonIconText = memo(
  ({
    title,
    icon,
    style,
    tintColor,
    iconStyle,
    titleColor = colors.text,
    onPress,
    borderColor = colors.transparent,
    backgroundColor,
    disabled,
    ...textProps
  }: ButtonTextProps) => {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          disabled ? {opacity: 0.3} : {},
          {borderColor: borderColor, backgroundColor},
        ]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.54}>
        {icon && (
          <Image tintColor={tintColor} style={[iconStyle]} source={icon} />
        )}
        <Text color={titleColor} marginLeft={8} {...textProps.textProps}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default ButtonIconText;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    ...Theme.center,
    ...Theme.flexRow,
  },
});
