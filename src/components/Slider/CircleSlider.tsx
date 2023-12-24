import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Skia,
  useSharedValueEffect,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
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
import {number} from 'yup';
import colors from 'res/colors';
interface CircleSliderProps {
  width: number;
  thumbRadius: number;
  strokeWidth: number;
  max?: number;
  value: number;
  children?: React.ReactNode;
  onUpdate: (value: number) => void;
  disabled?: boolean;
  isHideCircle?: boolean;
  linearGradientBackgroundColor?: string[];
  linearGradientColor?: string[];
}
interface IState {
  percentTop?: number;
  percentBottom?: number;
}
const CircleSlider: React.FC<CircleSliderProps> = ({
  width,
  strokeWidth,
  thumbRadius,
  max,
  value,
  onUpdate,
  isHideCircle,
  disabled,
  linearGradientColor,
  linearGradientBackgroundColor,
  children,
}) => {
  const center = width / 2;
  const r = (width - strokeWidth) / 2 - 10;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const x1 = center - r * Math.cos(startAngle);
  const y1 = -r * Math.sin(startAngle) + center;
  const x2 = center - r * Math.cos(endAngle);
  const y2 = -r * Math.sin(endAngle) + center;
  const skiaBackgroundPath = Skia.Path.Make();
  skiaBackgroundPath.addCircle(r + 20, r + 20, r);
  const skiaForegroundPath = Skia.Path.Make();
  skiaForegroundPath.addCircle(r + 20, r + 20, r);

  const movableCx = useSharedValue(x2);
  const movableCy = useSharedValue(y2);
  const previousPositionX = useSharedValue(x2);
  const previousPositionY = useSharedValue(y2);
  const percentComplete = useSharedValue(value / (max || 1) || 0);

  const skiaCx = useValue(x2);
  const skiaCy = useValue(y2);
  const skiaPercentComplete = useValue(percentComplete.value);

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

      if (absoluteX < width / 2 && rawTheta < 0) {
        newTheta = Math.PI;
      } else if (absoluteX > width / 2 && rawTheta <= 0) {
        newTheta = 0;
      } else {
        newTheta = rawTheta;
      }

      const percent = 1 - newTheta / Math.PI;
      percentComplete.value = percent;

      const newCoords = polar2Canvas(
        {
          theta: newTheta,
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
      skiaCx.current = movableCx.value;
      skiaCy.current = movableCy.value;
      skiaPercentComplete.current = percentComplete.value;
      let percentBottom = parseInt((percentComplete.value * 100).toFixed());
      onUpdate && onUpdate(percentBottom);
    },
    movableCx,
    movableCy,
    percentComplete,
  );

  const style = useAnimatedStyle(() => {
    return {height: 200, width: 300, opacity: percentComplete.value};
  }, [percentComplete]);

  if (!skiaBackgroundPath || !skiaForegroundPath) {
    return <View />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={[{width: width, height: width}]}>
          <Canvas style={styles.canvas}>
            <Group
              origin={vec(r + 20, r + 20)}
              transform={[{rotate: Math.PI * 1.5}]}>
              <Path
                path={skiaBackgroundPath}
                style="stroke"
                strokeWidth={strokeWidth}
                strokeCap="round"
                color={colors.gray2}>
                {!!linearGradientBackgroundColor?.length && (
                  <RadialGradient
                    c={vec(r + 20, r + 20)}
                    r={128}
                    colors={linearGradientBackgroundColor}
                  />
                )}
              </Path>

              <Path
                path={skiaForegroundPath}
                style="stroke"
                strokeWidth={strokeWidth}
                strokeCap="round"
                color={'orange'}
                start={0}
                end={skiaPercentComplete}>
                {!!linearGradientColor?.length && (
                  <LinearGradient
                    start={vec(0, 0)}
                    end={vec(256, 256)}
                    colors={linearGradientColor}
                  />
                )}
              </Path>
              {!isHideCircle && (
                <Group>
                  <Circle
                    cx={skiaCx}
                    cy={skiaCy}
                    r={thumbRadius}
                    color="orange"
                    style="fill"
                  />
                  <Circle
                    cx={skiaCx}
                    cy={skiaCy}
                    r={thumbRadius - 2}
                    color="white"
                    style="fill"
                  />
                </Group>
              )}
            </Group>
          </Canvas>
          <View
            style={{
              position: 'absolute',
              top: strokeWidth + 10,
              bottom: strokeWidth + 10,
              left: strokeWidth + 10,
              right: strokeWidth + 10,
              borderRadius: r,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {children}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
export default CircleSlider;
const styles = StyleSheet.create({
  container: {},
  canvas: {
    flex: 1,
  },
  cursor: {
    backgroundColor: 'green',
  },
  ghost: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
