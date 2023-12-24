import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
interface Props {
  onBackdropPress: () => void;
  [key: string]: any;
}
class ModalComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    if (Platform.OS == 'android')
      return <Modal {...this.props}>{this.props.children}</Modal>;
    return (
      <Modal {...this.props}>
        <TouchableWithoutFeedback
          style={StyleSheet.absoluteFillObject}
          onPress={this.props.onBackdropPress}>
          <View />
        </TouchableWithoutFeedback>
        {this.props.children}
      </Modal>
    );
  }
}
export default ModalComponent;
