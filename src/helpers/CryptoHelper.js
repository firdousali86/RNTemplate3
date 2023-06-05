import {Alert} from 'react-native';
import CryptoJS from 'crypto-js';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

class CryptoHelper {
  encryptString = (
    stringToEncrypt,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    return CryptoJS.AES.encrypt(stringToEncrypt, key).toString();
  };

  decryptString = (
    encryptedString,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    var bytes = CryptoJS.AES.decrypt(encryptedString, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  encryptObject = (
    objectToEncrypt,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    return this.encryptString(JSON.stringify(objectToEncrypt), key).toString();
  };

  decryptObject = (
    encryptedObject,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    var bytes = this.decryptString(encryptedObject, key);
    return JSON.parse(bytes);
  };

  generateSHA1 = (message, key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE2') => {
    return Base64.stringify(CryptoJS.SHA256(message, key));
  };
}

export default new CryptoHelper();
