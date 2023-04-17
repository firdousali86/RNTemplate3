import React, {useEffect, useState, memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Metrics} from '../../themes';
import {areEqual} from '../../util/commonUtils';

let somecount = 0;

const MyComponent = React.memo(function (props) {
  return <ExpMemo backgroundColor={props.color} doEmbed={false} />;
});

const ExpMemo = props => {
  const [number, setNumber] = useState('0');

  useEffect(() => {
    somecount = somecount + 1;
  });

  // const renderEmbed = memo(color => {
  //   return <ExpMemo backgroundColor={color} doEmbed={false} />;
  // });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          margin: Metrics.baseMargin,
          padding: Metrics.smallMargin,
          backgroundColor: '#cccccc',
          height: 44,
        }}
        onChangeText={changedText => {
          setNumber(changedText);
        }}
        value={number}
        placeholder="Enter Number"
        keyboardType="numeric"
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Render Count</Text>
        <Text>{somecount}</Text>
      </View>

      <View
        style={{
          marginVertical: Metrics.baseMargin,
          marginHorizontal: Metrics.smallMargin,
          flex: 1,
        }}>
        {props.doEmbed && (
          <ExpMemo backgroundColor={'#f397b1'} doEmbed={false} />
        )}
        {props.doEmbed && <MyComponent color={'#9ff7a3'} />}
      </View>
    </View>
  );
};

export default ExpMemo;

ExpMemo.propTypes = {
  backgroundColor: PropTypes.string,
  doEmbed: PropTypes.bool,
};

ExpMemo.defaultProps = {
  backgroundColor: 'white',
  doEmbed: true,
};
