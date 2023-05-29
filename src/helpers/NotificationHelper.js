import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

class NotificationHelper {
  getToken = () => {
    messaging()
      .getToken()
      .then(token => {
        console.log('here is token');
        console.log(token);
      });
  };

  refreshToken = () => {
    messaging().onTokenRefresh(token => {
      console.log('here is the updated token');
      console.log(token);
    });
  };

  initializeFCM = (onRecieve, onTap) => {
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);

      if (onRecieve) {
        onRecieve(remoteMessage);
      }
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);

      if (onTap) {
        onTap(remoteMessage);
      }
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(remoteMessage);
    });

    messaging()
      .subscribeToTopic('karachipeople')
      .then(() => {
        console.log('Subscribed to topic!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  checkFCMPermission = async () => {
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission({
        sound: true,
        announcement: true,
        alert: true,
        badge: true,
        carPlay: true,
        provisional: true,
      });

      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('enabled');
      } else {
        console.log('disabled');
      }
    }
  };

  getInitialNotification = () => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(remoteMessage);
      });
  };

  appMount = () => {
    this.initializeFCM();
    this.checkFCMPermission();
  };

  unMount = () => {
    this.messageListener();
  };
}

export default new NotificationHelper();
