import _ from 'lodash';
import utils from './index';

class CommonUtils {
  stringIsEmpty = str => {
    return !str || /^\s*$/.test(str);
  };

  removeEmoji = textString => {
    return textString.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '');
  };

  sanitizeEmail = textString => {
    textString = this.removeEmoji(textString);

    return textString;
  };

  emailRegex = emailToTest => {
    return RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    ).test(emailToTest);
  };

  passwordRegex = () => {
    return RegExp(/^(?=.*\d)(?=._*[a-z])(?=.*[A-Z a-z]).{8,32}$/gm);
  };

  passwordValidation = inputtxt => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    return inputtxt.match(passw);
  };

  phoneRegex = () => {
    return RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
  };

  validIBANregex = () => {
    return RegExp(
      /^[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z0-9]{4}\s?[0-9]{4}\s?[0-9]{3}([a-zA-Z0-9]\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,3})?$/i,
    );
  };
}

export default new CommonUtils();

export function areEqual(prevProps, nextProps) {
  return _.isEqual(prevProps, nextProps);
}
