import * as React from 'react';
import {StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import useNotification from 'screens/Common/notification/useNotification';

interface NotificationConfigProps {
  children: React.ReactNode;
}

const NotificationConfig = ({children}: NotificationConfigProps) => {
  const {onOpen, checkPermission} = useNotification();

  React.useEffect(() => {
    const firebaseAppConfig = async () => {
      console.log('useEffect: useNotification');
      await checkPermission();

      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage,
        );
        onOpen();
      });

      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          console.log('remoteMessage: ', remoteMessage);
          if (remoteMessage) {
            onOpen();
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage,
            );
          }
        });
    };
    firebaseAppConfig();
    const unsubscribe = messaging().onMessage(
      async (remoteMessage: any): Promise<void> => {
        console.log('FCM Message Data:', remoteMessage);
        // let data = JSON.parse(remoteMessage.data.data);
        // console.log('data: ', data);
      },
    );
    return unsubscribe;
  }, []);
  return <>{children}</>;
};

export default NotificationConfig;

const styles = StyleSheet.create({
  container: {flex: 1},
});
