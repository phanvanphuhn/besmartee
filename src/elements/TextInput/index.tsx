import Text from 'elements/Text';
import {FormikErrors, FormikTouched, FormikValues} from 'formik';
import React, {Dispatch, SetStateAction} from 'react';
import {
  ColorValue,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import colors from 'res/colors';
import Theme from 'res/Theme';
import _ from 'lodash';
interface Props extends TextInputProps {
  value: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void | Dispatch<SetStateAction<string>>;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  onSelectionChange?: () => void;
  placeholder?: string;
  isShowIcon?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: ViewStyle;
  borderColor?: string;
  iconPress?: () => void;
  autoFocus?: boolean;
  backgroundColor?: ColorValue | string;
  iconLeft?: any;
  isShowIconLeft?: boolean;
  iconPressLeft?: () => void;
  multiline?: boolean;
  editable?: boolean;
  color?: ColorValue;
  errors?: FormikErrors<FormikValues>;
  touched?: FormikTouched<FormikValues>;
  name?: string;
}

export default ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
  onEndEditing,
  onSelectionChange,
  isShowIcon,
  icon,
  iconStyle,
  secureTextEntry,
  style,
  borderColor = colors.border,
  backgroundColor,
  iconPress,
  isShowIconLeft,
  iconLeft,
  iconPressLeft,
  autoFocus,
  onFocus,
  onBlur,
  color,
  errors,
  touched,
  name,
  inputStyle,
  containerStyle,
  ...props
}: Props) => {
  let lineHeight;
  if (props.multiline) {
    lineHeight = 24;
  }
  let height;
  let errorName = _.get(errors, name || '');
  let touchedName = _.get(touched, name || '');
  return (
    <View style={[styles.container2, containerStyle]}>
      <View
        style={[
          styles.container,
          {
            borderColor,
            backgroundColor,
          },
          style,
          !!errorName && touchedName && styles.borderError,
          props.multiline && styles.muli,
        ]}>
        {!!isShowIconLeft && !!iconLeft && (
          <TouchableOpacity
            style={styles.iconLeftView}
            onPress={iconPressLeft}
            disabled={!iconPressLeft}>
            {iconLeft}
          </TouchableOpacity>
        )}
        {props.editable ? (
          <TextInput
            numberOfLines={1}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            onSubmitEditing={onSubmitEditing}
            onEndEditing={onEndEditing}
            onSelectionChange={onSelectionChange}
            style={[
              styles.textInput,
              {
                lineHeight: lineHeight,
                color: colors.text,
              },
              inputStyle,
            ]}
            placeholderTextColor={
              props.placeholderTextColor || colors.borderColor
            }
            secureTextEntry={secureTextEntry}
            editable={props.editable}
            autoFocus={autoFocus}
            {...props}
          />
        ) : (
          <Text
            size={15}
            lineHeight={24}
            text_placeholder={!value}
            semiBold
            style={[{flex: 1}, inputStyle]}>
            {value || placeholder}
          </Text>
        )}
        {isShowIcon && !!icon && (
          <TouchableOpacity
            style={[styles.iconView, iconStyle]}
            onPress={iconPress}
            disabled={!iconPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {!!errorName && touchedName && (
        <Text size={12} marginTop={5} color={colors.red}>
          {errorName}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borderError: {
    borderColor: colors.red,
  },
  container2: {},
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    ...Theme.flexRow,
  },
  iconView: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 12,
    ...Theme.center,
  },
  iconLeftView: {
    width: 24,
    height: 24,
    ...Theme.center,
    marginRight: 13,
  },
  muli: {
    paddingBottom: 11,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    height: '100%',
    minHeight: 48,
    color: colors.text,
  },
});
