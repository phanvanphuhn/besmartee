import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';

interface IProps {
  title: string;
  bgc?: string;
  onPress: () => void;
  isSave: boolean;
}

const Button1Click = (props: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          props?.isSave ? styles.buttonContainerIsSave : styles.buttonContainer
        }
        onPress={props?.onPress}>
        <Text
          style={props?.isSave ? styles.buttonTitleIsSave : styles.buttonTitle}>
          {props?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 86,
    width: '100%',
    position: 'absolute',
    bottom: 16,
    padding: 16,
    backgroundColor: colors.white,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: colors.black,
    elevation: 4,
    shadowOpacity: 0.2,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.blue3,
  },
  buttonContainerIsSave: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: colors.blue3,
  },
  buttonTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.blue3,
  },
  buttonTitleIsSave: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
});

export default Button1Click;
