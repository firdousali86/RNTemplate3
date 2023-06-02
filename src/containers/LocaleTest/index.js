import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LocalizationHelper} from '../../helpers';

const LocaleTest = () => {
  const [currLocale, setCurrLocale] = useState(undefined);

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
