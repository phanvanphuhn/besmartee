import {useNavigation} from '@react-navigation/native';
import Text from 'elements/Text';
import React from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import sizes from 'res/sizes';
import Theme from 'res/Theme';
import scale from 'utils/scale';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import {useSelector} from 'hooks/useSelector';

export interface HeaderBaseProps {
  title?: string;
  hideBackButton?: boolean;
  onBack?: () => void;
  buttonRight?: React.ReactNode;
  buttonLeft?: React.ReactNode;
  iconLeft?: ImageSourcePropType;
  hideButtonRight?: boolean;
  titleStyle?: StyleProp<ViewStyle>;
  subTitle?: string | null;
  iconTile?: ImageSourcePropType;
}
const HeaderBase = ({
  title,
  hideBackButton,
  onBack,
  buttonRight,
  buttonLeft,
  iconLeft,
  hideButtonRight,
  titleStyle,
  subTitle,
  iconTile,
}: HeaderBaseProps) => {
  const router = useNavigation();

  const onPressBack = () => (onBack ? onBack() : router.goBack());
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.groupHeader}>
        <View style={styles.button}>
          {hideBackButton ? null : buttonLeft ? (
            buttonLeft
          ) : (
            <ButtonIcon
              onPress={onPressBack}
              icon={iconLeft ? iconLeft : images.ic_back}
            />
          )}
        </View>
        <View
          style={[
            styles.containerTitle,
            titleStyle,
            iconTile ? {flexDirection: 'row', alignItems: 'center'} : {},
          ]}>
          {iconTile && (
            <Image
              source={iconTile}
              style={{height: 23, width: 23, marginRight: 8}}
            />
          )}
          <View>
            <Text
              size={21}
              fontWeight={'700'}
              color={colors.white}
              lineHeight={28}>
              {title}
            </Text>
            {subTitle && (
              <Text
                size={14}
                fontWeight={'300'}
                color={colors.white}
                lineHeight={28}>
                {subTitle}
              </Text>
            )}
          </View>
        </View>
        {buttonRight ? (
          buttonRight
        ) : hideButtonRight ? null : (
          <View style={[Theme.flexRowSpaceAround]} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HeaderBase);

const styles = StyleSheet.create({
  buttonHeader: {},
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {flex: 1},
  txtTitle: {
    fontSize: sizes._14sdp,
    color: colors.white,
    fontWeight: 'bold',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  iconBack: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: scale(10),
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(15),
    paddingHorizontal: scale(16),
  },
  container: {
    backgroundColor: colors.primary,
    paddingTop: sizes._statusbar_height + 15,
  },
});
