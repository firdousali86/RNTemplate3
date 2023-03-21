import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const TestComponent = () => {
  const cake = useSelector(state => state.cake);

  useEffect(() => {
    console.log(cake);
  }, [cake]);

  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default TestComponent;
