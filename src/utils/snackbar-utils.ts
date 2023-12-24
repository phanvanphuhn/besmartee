// import { Toast } from 'native-base';
import {Icon, MessageType, showMessage} from 'react-native-flash-message';

export default {
  showShort(message: string, type: MessageType) {
    this.show(message, type, 3000);
  },
  showLong(message: string, type: MessageType) {
    this.show(message, type, 6000);
  },
  show(message: string, type: MessageType, duration?: number) {
    if (duration != 0 && !duration) {
      duration = 3000;
    }
    this.showWithTitle('BeSmartee', message, type, duration, type);
  },
  showWithTitle(
    message: string,
    description?: string,
    type?: MessageType,
    duration?: number,
    icon?: Icon,
  ) {
    showMessage({
      message,
      description,
      type,
      duration,
      icon,
    });
  },
};
