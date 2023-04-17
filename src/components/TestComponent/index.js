import React, {useEffect, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bookActions} from '../../features/book/bookSlice';
import {areEqual} from '../../util/commonUtils';

const TestComponent = () => {
  // const cake = useSelector(state => state.cake);
  const book = useSelector(state => state.book);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(cake);
  // }, [cake]);

  return (
    <View>
      <Text>test</Text>
      <Text>{book.numberOfBooks}</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(bookActions.bookOrdered());
        }}>
        <Text>Test Comp Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(TestComponent, areEqual);
