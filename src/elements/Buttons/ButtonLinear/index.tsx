import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Theme from 'res/style/Theme';
import ButtonBorder from '../ButtonBorder';
import LinearColors from 'elements/LinearColors';
import Text from 'elements/Text';
import {useTheme} from 'configs/ChangeTheme';
import Colors from 'res/colors';

interface ButtonLinearProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  children?: any;
  leftChildren?: any;
  styleButton?: ViewStyle;
  disabled?: boolean;
  colors?: string[];
  width?: number;
  height?: number;
  paddingHorizontal?: number;
  white?: boolean;
  dark?: boolean;
  hilight?: boolean;
}

const ButtonLinear = ({
  title,
  style,
  onPress,
  children,
  styleButton,
  leftChildren,
  disabled,
  colors,
  width,
  height,
  paddingHorizontal,
  white,
  dark,
  hilight,
}: ButtonLinearProps) => {
  const {theme} = useTheme();
  if (disabled) {
    return (
      <ButtonBorder
        title={title}
        style={styleButton || style}
        backgroundColor={theme.disabled}
        borderColor={Colors.Isabelline}
      />
    );
  }
  return (
    <TouchableOpacity
      style={[
        styleButton,
        {width: width, height: height, paddingHorizontal: paddingHorizontal},
      ]}
      activeOpacity={0.54}
      onPress={onPress}>
      <LinearColors
        style={{...styles.container, ...style}}
        vertical
        locations={[0, 0.75]}
        colors={colors || [Colors.TurquoiseBlue, Colors.TealBlue]}>
        {leftChildren}
        <Text marginLeft={8} type="H5" bold white={white}>
          {title}
        </Text>
        {children}
      </LinearColors>
    </TouchableOpacity>
  );
};

export default ButtonLinear;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 12,
    ...Theme.flexRowCenter,
  },
});
