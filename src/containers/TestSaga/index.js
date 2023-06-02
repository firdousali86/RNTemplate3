import {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import {useDispatch} from 'react-redux';
import {LocalizationHelper} from '../../helpers';

const {request, requestEvery, requestLatest} = itemsActions;

const TestSaga = props => {
  const dispatch = useDispatch();

  const [currLocale, setCurrLocale] = useState(undefined);

  LocalizationHelper.onChange(() => {
    console.log('I18n has changed!');

    setCurrLocale(new Date());
  });

  const buttonstyle = {
    backgroundColor: 'blue',
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View>
      <Text>sss</Text>
      <TouchableOpacity
        style={buttonstyle}
        onPress={() => {
          dispatch(
            request({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}>
        <Text style={{color: 'white'}}>
          {LocalizationHelper.t('takebehavior')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonstyle}
        onPress={() => {
          dispatch(
            requestEvery({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}>
        <Text style={{color: 'white'}}>TAKE EVERY BEHAVIOR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonstyle}
        onPress={() => {
          dispatch(
            requestLatest({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}>
        <Text style={{color: 'white'}}>TAKE LATEST BEHAVIOR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestSaga;
