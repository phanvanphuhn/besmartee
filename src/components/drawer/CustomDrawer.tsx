import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import colors from 'res/colors';
import images from 'res/images';
import sizes from 'res/sizes';
import strings from 'res/strings';
import ExpandableViewSeparate, {
  ExpandableItemComponent,
} from './ExpandableViewSeparate';
import CodePush from 'react-native-code-push';
import {useEffect} from 'react';
import Text from 'elements/Text';
import {useAppDispatch} from 'middlewares/stores';
import {onLogout} from 'middlewares/actions/auth/actionLogin';
import {navigate} from 'navigation/service/RootNavigation';
import {Routes} from 'configs';
import {useNavigation} from '@react-navigation/native';
// import DrawerItemList from './DrawerItemList';

const CustomDrawer = ({progress, ...props}: DrawerContentComponentProps) => {
  const [appVersion, setAppVersion] = React.useState('');
  const [appLabel, setAppLabel] = React.useState('');

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function getUpdateMetadata() {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
      metadata => {
        if (metadata) {
          setAppVersion(metadata.appVersion);
          setAppLabel(metadata.label);
        }
      },
      error => {},
    );
  }

  useEffect(() => {
    getUpdateMetadata();
  }, []);

  const logout = () => {
    dispatch(onLogout());
    props.navigation.closeDrawer();
    navigation.navigate(Routes.LoginScreen, {});
  };

  const onLogin = () => {
    // props.navigation.navigate(Routes.LoginScreen, {typeScreen: 'login'});
  };
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View>
        <View style={{overflow: 'hidden', paddingLeft: 16, paddingRight: 16}}>
          <View style={styles.containerProfile}>
            <Image source={images.ic_setting} />
          </View>
        </View>

        <ExpandableViewSeparate {...props} />
        <ExpandableItemComponent
          onPress={logout}
          item={{
            category_name: strings.logout,
            icon: images.ic_logout,
            isSubMenu: true,
          }}
          {...props}
        />
        {!!appVersion && (
          <TouchableOpacity
            style={{
              padding: 10,
            }}>
            <Text lineHeight={26} center size={12} marginBottom={10}>
              Version :{' '}
              <Text fontWeight={'600'}>
                {appVersion}
                {appLabel}
              </Text>
            </Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageAvatar: {
    height: sizes._50sdp,
    width: sizes._50sdp,
    borderRadius: sizes._25sdp,
  },
  containerProfile: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  txtName: {
    color: colors.white,
    fontSize: sizes._16sdp,
    fontWeight: '600',
    paddingTop: sizes._15sdp,
  },
  icon: {
    height: sizes._20sdp,
    width: sizes._20sdp,
    resizeMode: 'contain',
  },
  container: {},
});
