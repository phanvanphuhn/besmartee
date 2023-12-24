import React from 'react';
import Modal from 'react-native-modal';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Components
// Styles
import colors from 'res/colors';
import scale from 'utils/scale';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Animated from 'react-native-reanimated';

interface Props {
  isVisibleModal: boolean;
  children?: React.ReactNode;
  onCloseModal: () => void;
  lineTop?: boolean;
  scrollEnabled?: boolean;
  isTransaction?: boolean;
}
function ModalBottom({
  isVisibleModal,
  children,
  onCloseModal,
  lineTop,
  scrollEnabled,
  isTransaction,
}: Props) {
  // const {transOutY, transOutStyle} = useKeyboardShowTranslation();
  const ContainerView = scrollEnabled ? KeyboardAwareScrollView : View;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Modal
        isVisible={isVisibleModal}
        style={styles.container}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.6}
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        onBackButtonPress={onCloseModal}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <ContainerView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
          {lineTop && <View style={styles.lineTop} />}
          <Animated.View
            style={[
              styles.content,
              // isTransaction && Platform.OS == 'ios' && transOutStyle,
            ]}>
            {children && children}
          </Animated.View>
        </ContainerView>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </TouchableWithoutFeedback>
  );
}

ModalBottom.defaultProps = {
  onCloseModal: () => {},
  styleTitle: {},
  styleDescription: {},
};

export default ModalBottom;

const styles = StyleSheet.create({
  lineTop: {
    backgroundColor: colors.White,
    height: scale(5),
    width: scale(50),
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  container: {
    justifyContent: 'flex-end',
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
  },

  content: {},
});
