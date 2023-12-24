import {
  Image,
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import images from 'res/images';
interface RatingProps {
  onRate?: (value: number) => void;
  max: number;
  editable?: boolean;
  iconWidth?: number;
  iconHeight?: number;
  iconSelected?: ImageSourcePropType;
  iconUnselected?: ImageSourcePropType;
  rating?: number;
  style?: StyleProp<ViewStyle>;
}
function Rating(props: RatingProps) {
  const icons = useMemo(() => {
    const ics = [];
    for (let i = 1; i <= props?.max; i += 1) {
      ics.push(
        <TouchableOpacity
          disabled={!props?.editable}
          key={i}
          style={{height: props?.iconHeight, width: props?.iconWidth}}
          onPress={() => {
            props.onRate && props.onRate(i);
          }}>
          <Image
            style={{
              height: props?.iconHeight,
              width: props?.iconWidth,
              resizeMode: 'contain',
            }}
            source={
              (props.rating || 0) >= i
                ? props?.iconSelected || images.ic_rating_gold
                : props?.iconUnselected || images.ic_rating_unselected
            }
          />
        </TouchableOpacity>,
      );
    }
    return ics;
  }, [
    props.rating,
    props?.max,
    props.onRate,
    props?.iconHeight,
    props?.iconWidth,
    props?.editable,
    props?.iconSelected,
    props?.iconUnselected,
  ]);

  return <View style={[props.style, {flexDirection: 'row'}]}>{icons}</View>;
}

export default Rating;
