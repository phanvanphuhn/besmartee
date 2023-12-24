import {useNavigation} from '@react-navigation/core';
import Routes from 'configs/Routes';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import colors from 'res/colors';
import images from 'res/images';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

type TProps = {
  isOpen: boolean;
  setState: ({}) => void;
};

const FloatButton = (props: TProps) => {
  const {isOpen, setState} = props;
  const navigation = useNavigation<BaseUseNavigationProps<MainParamList>>();

  const onPressFloatButton = () => {
    setState({isShowCreateCaseLog: !isOpen});
  };

  const onCreateCaseLog = () => {
    setState({isShowCreateCaseLog: !isOpen});
    navigation.navigate(Routes.CaseLogScreen2, {isCreateNew: true});
  };

  const onCreatePlanCall = () => {
    setState({isShowCreateCaseLog: !isOpen});
    navigation.navigate(Routes.CallLogScreen, {isCreateNew: true});
  };

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 999,
        bottom: 12,
        right: 24,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      {isOpen && (
        <View style={[styles.container]}>
          <Text style={styles.title}>New Plan Call</Text>
          <TouchableOpacity
            style={styles.buttonContainerClose}
            onPress={onCreatePlanCall}>
            <IconAntDesign name="calendar" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}

      {isOpen && (
        <View style={[styles.container]}>
          <Text style={styles.title}>New Case Log</Text>
          <TouchableOpacity
            style={styles.buttonContainerClose}
            onPress={onCreateCaseLog}>
            <IconAntDesign name="addfile" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.container}>
        {isOpen && <Text style={styles.title}>Close</Text>}
        <TouchableOpacity
          style={
            isOpen ? styles.buttonContainerOpen : styles.buttonContainerClose
          }
          onPress={onPressFloatButton}>
          {isOpen ? (
            <IconEntypo name="cross" size={32} color={colors.gray} />
          ) : (
            <Image
              source={images.ic_whitePlus}
              style={{height: 32, width: 32}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainerClose: {
    height: 51,
    width: 51,
    borderRadius: 25,
    backgroundColor: colors.blue3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  buttonContainerOpen: {
    height: 51,
    width: 51,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.black,
  },
});

export default FloatButton;
