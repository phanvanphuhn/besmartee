import {useTheme} from 'configs/ChangeTheme';
import React from 'react';
import {ColorValue, StyleSheet, Text, TextStyle} from 'react-native';
import colors from 'res/colors';
import scale from 'utils/scale';

type SizeHeight = {
  [key: string]: number;
};

const FontSize: SizeHeight = {
  H1: 30,
  H2: 24,
  H3: 20,
  H4: 16,
  H5: 15,
  H6: 13,
  Body: 14,
  Label: 12,
  P6: 13,
};

const LineHeight: SizeHeight = {
  H1: 38,
  H2: 28,
  H3: 32,
  H4: 24,
  H5: 18,
  H6: 16,
  Body: 22,
  Label: 20,
  P6: 22,
};

export interface TextProps {
  color?: ColorValue | string;
  size?: number;
  style?: TextStyle;
  hilight?: boolean;
  ucfirst?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  white?: boolean;
  children?: any;
  type?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Body' | 'Label' | 'P6';
  left?: boolean;
  text_placeholder?: boolean;
  right?: boolean;
  center?: boolean;
  onPress?: () => void;
  lineHeight?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  maxWidth?: number;
  numberOfLines?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
}

export default ({
  left,
  right,
  center,
  color,
  size,
  style: _style,
  hilight,
  ucfirst,
  uppercase,
  lowercase,
  children,
  onPress,
  numberOfLines,
  type, //H1, H2, H3, H4, Body, Label
  text_placeholder,
  fontWeight,
  white,
  ...props
}: TextProps) => {
  let style: TextStyle = {};
  if (Array.isArray(_style)) {
    style = {...StyleSheet.flatten(_style)};
  } else {
    style = {..._style};
  }

  if (fontWeight) {
    style.fontWeight = fontWeight;
  }

  let _children = '';
  if (typeof children === 'string') {
    if (ucfirst) {
      _children =
        children.charAt(0).toUpperCase() + children.slice(1).toLowerCase();
    } else if (uppercase) {
      _children = children.toUpperCase();
    } else if (lowercase) {
      _children = children.toLowerCase();
    }
  }

  let textSize = size;
  let lineHeight;
  if (type) {
    textSize = FontSize[`${type}`];
    lineHeight = LineHeight[`${type}`];
  }

  let textAlign: 'left' | 'center' | 'right' | 'auto' | 'justify' | undefined =
    'left';

  if (left) {
    textAlign = 'left';
  }
  if (right) {
    textAlign = 'right';
  }
  if (center) {
    textAlign = 'center';
  }

  if (props.lineHeight) {
    lineHeight = props.lineHeight;
  }

  let marginTop;
  let marginLeft;
  let marginRight;
  let marginBottom;
  let marginHorizontal;
  let marginVertical;
  let maxWidth;

  let textDecorationLine:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined = 'none';

  if (props.textDecorationLine) {
    textDecorationLine = props.textDecorationLine;
  }

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
  if (props.maxWidth) {
    maxWidth = props.maxWidth;
  }
  return (
    <Text
      {...props}
      style={[
        {
          // fontFamily: FontFamily + '-' + fontStyle,
          color: hilight
            ? colors.tealBlue
            : text_placeholder
            ? colors.grayBlue
            : white
            ? colors.white
            : color || colors.black,
          fontSize: scale(textSize || 14),
          lineHeight: lineHeight,
          textAlign: textAlign,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          textDecorationLine: textDecorationLine,
          maxWidth: maxWidth,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {_children || children}
    </Text>
  );
};
