// @flow
import {Platform, Alert} from 'react-native';
import moment from 'moment';

class Util {
  getPlatform = () => Platform.OS;

  isPlatformAndroid() {
    return Platform.OS === 'android';
  }

  isJSDebugMode() {
    return typeof atob !== 'undefined';
  }

  isRelease() {
    return !(this.isJSDebugMode() || __DEV__);
  }

  showAlertWithDelay(title, message, delay = 500) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {
              text: 'OK',
              onPress: () => {
                this.alertPresent = false;
              },
            },
          ],
          {
            cancelable: false,
          },
        );
      }, delay);
    }
  }

  showYesNoMessage(title, message, onYes, onNo) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {
              text: 'Yes',
              onPress: () => {
                if (onYes) {
                  onYes();
                }

                this.alertPresent = false;
              },
            },
            {
              text: 'No',
              onPress: () => {
                if (onNo) {
                  onNo();
                }

                this.alertPresent = false;
              },
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }, 500);
    }
  }

  getDateFrom(givenDate: string) {
    return moment(givenDate).add(timeZone, 'hours').fromNow();
  }

  extractIntegers(text) {
    if (/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(text) || text == '') {
      return text;
    }

    return '';
  }

  extractFloat = toParse => {
    return toParse.replace(/[^\d.]/g, '');
  };

  parseAlphabets = toParse => {
    return toParse.replace(/[^a-z\s\.]/gi, '');
  };

  consoleLog = data => {
    if (!this.isRelease()) {
      console.log(data);
    }
  };
}

export default new Util();
