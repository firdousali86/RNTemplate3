// @flow
import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#95a6b7',
    marginHorizontal: Metrics.baseMargin,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin,
    backgroundColor: 'grey',
    height: Metrics.ratio(44),
    marginHorizontal: Metrics.baseMargin,
  },
});
