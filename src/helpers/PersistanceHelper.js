import userDefaults from 'react-native-user-defaults';
var SharedPreferences = require('react-native-shared-preferences');
import {Platform} from 'react-native';

class PersistanceHelper {
  setter = (key, value, successCallback, failureCallback) => {
    if (Platform.OS === 'ios') {
      userDefaults
        .set(key, value)
        .then(data => {
          if (successCallback) {
            successCallback(data);
          }
        })
        .catch(error => {
          failureCallback(error);
        });
    } else {
      SharedPreferences.setItem(key, value);
    }
  };

  getter = (key, successCallback, failureCallback) => {
    if (Platform.OS === 'ios') {
      userDefaults
        .get(key)
        .then(data => {
          if (successCallback) {
            successCallback(data);
          }
        })
        .catch(error => {
          if (failureCallback) {
            failureCallback(error);
          }
        });
    } else {
      //use shared prefs
      SharedPreferences.getItem(key, function (data) {
        if (successCallback) {
          successCallback(data);
        }
      });
    }
  };
}

export default new PersistanceHelper();
