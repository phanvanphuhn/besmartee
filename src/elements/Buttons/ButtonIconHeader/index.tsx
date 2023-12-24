import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'configs/ChangeTheme';
import Image from 'elements/Image';
import Text from 'elements/Text';
import React, {memo, useCallback} from 'react';
import {
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import Theme from 'res/style/Theme';
import scale from 'utils/scale';

interface ButtonIconHeaderProps {
  onPress?: () => void;
  marginLeft?: number;
  marginRight?: number;
  icon?: ImageSourcePropType;
  tintColor?: ColorValue;
  backgroundColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  isLeft?: boolean;
  count?: number;
}

const ButtonIconHeader = memo(
  ({
    onPress,
    style,
    marginLeft,
    marginRight,
    icon = images.ic_back,
    tintColor,
    isLeft,
    count,
  }: ButtonIconHeaderProps) => {
    const {goBack, canGoBack} = useNavigation();
    const _onPress = useCallback(() => {
      if (onPress) {
        onPress();
      } else {
        goBack();
      }
    }, [onPress]);
    const {theme} = useTheme();
    if (!canGoBack() && isLeft) {
      return null;
    }
    return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          {
            marginLeft: marginLeft ? marginLeft : 0,
            marginRight: marginRight ? marginRight : 0,
            backgroundColor: colors.lightGray,
          },
        ]}
        onPress={_onPress}>
        <Image source={icon} tintColor={tintColor} />
        {!!count && (
          <View style={[styles.containerCount, Theme.center]}>
            <Text size={12} color={colors.White}>
              {count}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export default ButtonIconHeader;

const styles = StyleSheet.create({
  containerCount: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -10,
    right: -10,
    borderRadius: 11,
    height: scale(22),
    width: scale(22),
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    ...Theme.center,
  },
});
