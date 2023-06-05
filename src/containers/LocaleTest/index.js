import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LocalizationHelper, CryptoHelper} from '../../helpers';

const LocaleTest = () => {
  const [currLocale, setCurrLocale] = useState(undefined);

  useEffect(() => {
    // const ourOriginalMessage =
    //   'hey this is simple readable message, lets encrypt it!';
    // const encryptedMessage = CryptoHelper.encryptString(ourOriginalMessage);
    // console.log(encryptedMessage);

    const depcryptedMessage1 = CryptoHelper.decryptString(
      'U2FsdGVkX1+e0NMtUnkl/Qwx2rAXFQ7aeCuc+fWjWIa4HLhCm5DdB6196N/y/JKsu7X7CQ0RMtrfBzIzDIkSbBxTKpDvKp6dgpm64vzJXGA=',
    );
    const depcryptedMessage2 = CryptoHelper.decryptString(
      'U2FsdGVkX1+49yr/xxmUt42AGsAPvME4YWqBSNP0E5CLstEdgJSNry1QiLzKgTmycCsAifKAFq6ELj/gMm16TfLGYwvRvJ5z28neylIgqGw=',
    );
    const depcryptedMessage3 = CryptoHelper.decryptString(
      'U2FsdGVkX188Io7On9Qif3MgEAKAZ4+AHaz2QUvDqa9tmp8Ld/MOmpgJYEDhP7GBM5MqFyrwxYvGr3qzdV0kKVK6Ptz8OBpB4ffrje15uoQ=',
    );

    console.log(depcryptedMessage1);
    console.log(depcryptedMessage2);
    console.log(depcryptedMessage3);

    console.log('lets now calculate hash of the same string');

    const hashedString = CryptoHelper.generateSHA1(
      'hey this is simple readable message, lets encrypt it!!',
    );

    console.log(hashedString);
  }, []);

  LocalizationHelper.onChange(() => {
    console.log('I18n has changed!');

    setCurrLocale(new Date());
  });

  console.log('render is fired');

  return (
    <View>
      <Text>{LocalizationHelper.t('hello')}</Text>
      <Text>{LocalizationHelper.t('bye')}</Text>

      <TouchableOpacity
        onPress={() => {
          LocalizationHelper.locale = 'en';
        }}>
        <Text>CHANGE TO ENGLISH</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          LocalizationHelper.locale = 'uk';
        }}>
        <Text>CHANGE TO UKRANIAN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          LocalizationHelper.locale = 'ur';
        }}>
        <Text>CHANGE TO HINDI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocaleTest;
