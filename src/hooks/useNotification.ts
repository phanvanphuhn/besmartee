import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';

const useNotification = () => {
  async function requestPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  const [shown, setShown] = useState(false);
  useEffect(() => {
    console.log('useEffect: useNotification');
    requestPermission();
    const unsubscribe = messaging().onMessage(
      async (remoteMessage: any): Promise<void> => {
        console.log('FCM Message Data:', remoteMessage);
        let data = JSON.parse(remoteMessage.data.data);
        console.log('data: ', data);
      },
    );

    return unsubscribe;
  }, []);

  return {
    requestPermission,
  };
};

export default useNotification;
