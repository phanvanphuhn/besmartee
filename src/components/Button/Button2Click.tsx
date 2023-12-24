import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';

interface IPros {
  rightTitle: string;
  leftTile: string;
  bgc?: string;
  onLeftPress: () => void;
  onRightPress: () => void;
}

const Button2Click = (props: IPros) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={props?.onLeftPress}>
        <Text style={styles.leftTitle}>{props?.leftTile}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.rightContainer}
        onPress={props.onRightPress}>
        <Text style={styles.rightTitle}>{props?.rightTitle}</Text>
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
    bottom: 0,
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
  leftContainer: {
    backgroundColor: colors.white,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.blue3,
  },
  rightContainer: {
    backgroundColor: colors.blue3,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  leftTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.blue3,
  },
  rightTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
});

export default Button2Click;
