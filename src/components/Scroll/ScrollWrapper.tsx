import {FormikErrors} from 'formik';
import React, {createContext, useContext, useEffect, useRef} from 'react';
import {Dimensions} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

interface IProps extends KeyboardAwareScrollViewProps {
  formik: FormikProps2;
  children: React.ReactNode;
}
interface PositionProps {
  y?: number;
  ref?: any;
}
interface FormikProps2 {
  isSubmitting: boolean;
  isValidating: boolean;
  errors: FormikErrors<any>;
  setSubmitting: (isSubmitting: boolean) => void;
}
interface CoordinateProps {
  [key: string]: PositionProps;
}

export const ScrollContext = createContext({
  setScrollRef: (ref: any) => {},
  scrollTracker: (ref: any, inputKey: string, index?: number) => {},
  captureRef: (ref: any) => {},
});
export const useScroll = () => {
  return useContext(ScrollContext);
};
const ScrollWrapper = ({formik, children, ...props}: IProps) => {
  useEffect(() => {
    const {isSubmitting, isValidating, errors, setSubmitting} = formik;
    const keys = Object.keys(errors || {});
    if (keys.length > 0 && isSubmitting && !isValidating) {
      setSubmitting(false);
      scrollTo && scrollTo(errors);
    }
  }, [formik.isSubmitting, formik.isValidating, formik.errors]);
  const yCoordinates = useRef<CoordinateProps>({});

  const scrollRef = useRef<any>();

  const setScrollRef = (ref: any) => {
    if (ref) {
      scrollRef.current = ref;
    }
  };
  const getFirstConditionalKey = (errors: any): string => {
    let position = Infinity;
    let firstKey = '';
    let key: string;
    let input: any;
    for ([key, input] of Object.entries(yCoordinates.current)) {
      let key2 = Object.keys(errors || {}).find(firstKey => key == firstKey);
      if (key2) {
        if (input.y < position) {
          position = input.y;
          firstKey = key2;
        }
      }
    }

    return firstKey || '';
  };
  const scrollTo = (errors: any) => {
    const firstInvalidKey = getFirstConditionalKey(errors);

    if (
      scrollRef.current &&
      firstInvalidKey &&
      yCoordinates.current?.[firstInvalidKey]
    ) {
      scrollRef.current.scrollTo({
        x: 0,
        y: yCoordinates.current[firstInvalidKey].y,
        animated: true,
      });
    }
  };

  const captureRef = (inputKey: string) => (ref: any) => {
    if (ref) {
      if (yCoordinates.current[inputKey]) {
        yCoordinates.current[inputKey].ref = ref;
      } else {
        yCoordinates.current[inputKey] = {};
        yCoordinates.current[inputKey].ref = ref;
      }
    }
  };

  const scrollTracker = (ref: any, inputKey: string, index?: number) => {
    const getScrollToY = (py: number) =>
      py - Dimensions.get('window').height / 5.5;

    const getCoordinates = () => {
      ref.measure(
        (
          fx: number,
          fy: number,
          width: number,
          height: number,
          px: number,
          py: number,
        ) => {
          if (yCoordinates.current[inputKey]) {
            if (!yCoordinates.current[inputKey].y) {
              yCoordinates.current[inputKey].y = getScrollToY(py);
            }
          } else {
            yCoordinates.current[inputKey] = {};
            yCoordinates.current[inputKey].y = getScrollToY(py);
          }
        },
      );
    };
    getCoordinates();
  };
  return (
    <ScrollContext.Provider
      value={{
        setScrollRef,
        scrollTracker,
        captureRef,
      }}>
      <KeyboardAwareScrollView
        innerRef={ref => (scrollRef.current = ref)}
        {...props}>
        {children}
      </KeyboardAwareScrollView>
    </ScrollContext.Provider>
  );
};

export default ScrollWrapper;
