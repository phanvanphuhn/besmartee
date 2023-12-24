import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Path,
  Rect,
  Skia,
  Text,
  TextPath,
  useFont,
  useSharedValueEffect,
  useValue,
  vec,
  TouchHandler,
  useTouchHandler,
} from '@shopify/react-native-skia';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {polar2Canvas} from 'react-native-redash';
import images from 'res/images';
import colors from 'res/colors';
import useStateCustom from 'hooks/useStateCustom';
import {number} from 'yup';

interface CircleMultipleSliderProps {
  width: number;
  thumbRadius: number;
  strokeWidth: number;
  maxTop?: number;
  valueTop: number;
  maxBottom?: number;
  valueBottom: number;
  children?: React.ReactNode;
  onUpdate: (value: number) => void;
  disabled?: boolean;
  disabledMax?: number;
}
interface IState {
  percentTop?: number;
  percentBottom?: number;
}
const CircleMultipleSlider: React.FC<CircleMultipleSliderProps> = ({
  width,
  thumbRadius,
  strokeWidth,
  children,
  maxTop,
  valueTop,
  maxBottom,
  valueBottom,
  onUpdate,
  disabled,
  disabledMax,
}) => {
  const [state, setState] = useStateCustom<IState>({
    percentTop: valueTop / (maxTop || 1) || 0,
    percentBottom: valueBottom / (maxBottom || 1) || 0,
  });

  useEffect(() => {
    setState({percentTop: valueTop / (maxTop || 1) || 0});
    percentCompleteTop.value = valueTop / (maxTop || 1) || 0;
  }, [valueTop]);
  const center = width / 2;
  const r = (width - strokeWidth) / 2 - 10;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const polarToCartesian = (
    width: number,
    angle: number,
    strokeWidth: number,
  ) => {
    const center = width / 2;
    const r = (width - strokeWidth) / 2 - 10;

    const x = center - r * Math.cos(angle);
    const y = -r * Math.sin(angle) + center;
    return [x, y];
  };
  const [x1, y1] = polarToCartesian(width, startAngle, strokeWidth);
  const [x2, y2] = polarToCartesian(width, endAngle, strokeWidth);
  const rawBottomPath = `M ${x2} ${y1} A ${r} ${r} 1 1 0 ${x1} ${y2}`;
  const rawTopPath = `M ${x2} ${y2} A ${r} ${r} 0 1 1 ${x1} ${y1}`;
  const skiaTopPath = Skia.Path.MakeFromSVGString(rawTopPath);
  const skiaBottomPath = Skia.Path.MakeFromSVGString(rawBottomPath);
  const movableCx = useSharedValue(x2 + r * 2);
  const movableCy = useSharedValue(y2);
  const movablePerCx = useValue(x2);
  const movablePerCy = useValue(y2);
  const previousPositionX = useSharedValue(x2 + r * 2);
  const previousPositionY = useSharedValue(y2);
  const percentCompleteBottom = useSharedValue<number>(
    state.percentBottom || 1,
  );
  const percentCompleteTop = useSharedValue<number>(state.percentTop || 0);

  const skiaCx = useValue(x2);
  const skiaCy = useValue(y2);
  const skiaFontCx = useValue(x2);
  const skiaFontCy = useValue(y2);
  const skiaPercentComplete = useValue(percentCompleteBottom.value);
  const skiaPercentComplete1 = useValue(percentCompleteTop.value);

  const gesture = Gesture.Pan()
    .onUpdate(({translationX, translationY, absoluteX}) => {
      if (disabled) {
        return;
      }
      const oldCanvasX = translationX + previousPositionX.value;
      const oldCanvasY = translationY + previousPositionY.value;
      const xPrime = oldCanvasX - center;
      const yPrime = -(oldCanvasY - center);
      const rawTheta = Math.atan2(yPrime, xPrime);

      let newTheta;

      if (absoluteX < width / 2 && rawTheta > 0) {
        newTheta = Math.PI;
      } else if (absoluteX > width / 2 && rawTheta >= 0) {
        newTheta = 0;
      } else {
        newTheta = -rawTheta;
      }

      const percent = 1 - newTheta / Math.PI;
      let percentBottom = Math.round(100 - percent * 100 + 100);
      if (disabledMax && disabledMax < percentBottom) {
        newTheta = Math.PI * (1 - (100 - disabledMax + 100) / 100);
      } else {
        percentCompleteBottom.value = percent;
      }
      const newCoords = polar2Canvas(
        {
          theta: -newTheta,
          radius: r,
        },
        {
          x: center,
          y: center,
        },
      );

      movableCx.value = newCoords.x;
      movableCy.value = newCoords.y;
    })
    .onEnd(() => {
      previousPositionX.value = movableCx.value;
      previousPositionY.value = movableCy.value;
    });

  useSharedValueEffect(
    () => {
      let percentBottom = parseInt(
        (100 - percentCompleteBottom.value * 100 + 100).toFixed(),
      );
      skiaCx.current = movableCx.value;
      skiaCy.current = movableCy.value;
      skiaFontCx.current = movableCx.value - thumbRadius / 2 - 5;
      skiaFontCy.current = movableCy.value + thumbRadius / 3;
      skiaPercentComplete.current = percentCompleteBottom.value;
      skiaPercentComplete1.current = percentCompleteTop.value;
      const newCoords = polar2Canvas(
        {
          theta: (1 - percentCompleteTop.value) * Math.PI,
          radius: r,
        },
        {
          x: center,
          y: center,
        },
      );
      movablePerCx.current = newCoords.x - thumbRadius / 2 - 5;
      movablePerCy.current = newCoords.y + 5;
      setState({
        percentBottom: percentBottom,
        percentTop: parseInt((percentCompleteTop.value * 100).toFixed()),
      });
      onUpdate && onUpdate(percentBottom);
    },
    movableCx,
    movableCy,
    percentCompleteBottom,
    percentCompleteTop,
  );
  const insideBounds = (rect, x, y) => {
    return x >= rect.x && y >= rect.y;
  };
  const touchHandler = useTouchHandler({
    onStart: ({x, y}) => {
      const rect = {
        x: x1 - thumbRadius,
        y: y1 - thumbRadius,
        width: thumbRadius,
        height: thumbRadius,
      };
      if (insideBounds(rect, x, y)) {
      }
    },
  });
  const font = useFont(require('assets/fonts/Roboto-Medium.ttf'), 14);

  if (!skiaTopPath || !skiaBottomPath || !font) {
    return <View />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={[styles.container, {width: width, height: width}]}>
          <Canvas onTouch={touchHandler} style={styles.canvas}>
            <Circle
              color={colors.gray2}
              strokeWidth={strokeWidth}
              cx={center}
              cy={center}
              style={'stroke'}
              r={r}
            />
            <Path
              path={skiaBottomPath}
              style="stroke"
              strokeWidth={strokeWidth}
              strokeCap="round"
              color={colors.borderColor}
              start={0}
              end={skiaPercentComplete}
            />
            <Path
              path={rawTopPath}
              style="stroke"
              strokeWidth={strokeWidth}
              strokeCap="round"
              start={0}
              end={skiaPercentComplete1}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(256, 256)}
                colors={[
                  '#e6b3ff',
                  '#c44dff',
                  '#9900e6',
                  '#7700b3',
                  '#609',
                  '440066',
                ]}
              />
            </Path>

            <Circle
              cx={skiaCx}
              cy={skiaCy}
              r={thumbRadius}
              color={colors.pink3}
              style="fill"
            />
            <Circle
              cx={skiaCx}
              cy={skiaCy}
              r={thumbRadius - 2}
              color="white"
              style="fill"
            />
            <Text
              text={state.percentBottom + '%'}
              font={font}
              x={skiaFontCx}
              y={skiaFontCy}
            />
            <Text
              text={state.percentTop + '%'}
              font={font}
              x={movablePerCx}
              color={colors.white}
              y={movablePerCy}
            />
          </Canvas>
          <View
            style={[
              styles.containerContent,
              {
                top: strokeWidth + 10,
                bottom: strokeWidth + 10,
                left: strokeWidth + 10,
                right: strokeWidth + 10,
                borderRadius: r,
              },
            ]}>
            {children}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default CircleMultipleSlider;
const styles = StyleSheet.create({
  container: {},
  containerContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    flex: 1,
  },
  cursor: {
    backgroundColor: 'green',
  },
  ghost: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
