import HeaderBase, {HeaderBaseProps} from 'components/Header/HeaderBase';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';

interface Props extends HeaderBaseProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  style?: StyleProp<ViewStyle>;
  translucent?: boolean;
  dark?: boolean;
  hideBackground?: boolean;
  title?: string;
  [key: string]: any;
}
const Container = ({
  children,
  hideHeader,
  style,
  translucent = true,
  dark,
  hideBackground,
  title,
  ...props
}: Props) => {
  const ContainerComponent = translucent ? View : SafeAreaView;
  return (
    <View style={[styles.flex, {backgroundColor: colors.white}]}>
      <StatusBar
        backgroundColor={colors.transparent}
        translucent={true}
        barStyle={dark ? 'dark-content' : 'light-content'}
      />
      {hideHeader ? null : <HeaderBase title={title} {...props} />}
      <ContainerComponent
        style={[styles.flex, translucent ? {} : styles.styleTranslucent]}>
        <View style={[styles.flex, style]}>{children}</View>
      </ContainerComponent>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  // circle: {
  //   height: heightPercentageToDP(30),
  //   width: heightPercentageToDP(30),
  //   borderRadius: heightPercentageToDP(30) / 2,
  //   backgroundColor: '#f4511e30',
  //   position: 'absolute',
  //   bottom: -heightPercentageToDP(30) / 2 + 60,
  //   right: -heightPercentageToDP(30) / 2 + 30,
  //   // zIndex: 10,
  // },
  // circle1: {
  //   height: heightPercentageToDP(20),
  //   width: heightPercentageToDP(20),
  //   borderRadius: heightPercentageToDP(20) / 2,
  //   backgroundColor: '#f4511e60',
  //   position: 'absolute',
  //   bottom: -heightPercentageToDP(20) / 2,
  //   left: -heightPercentageToDP(20) / 2,
  //   // zIndex: 10,
  // },
  styleTranslucent: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  flex: {
    flex: 1,
  },
});
