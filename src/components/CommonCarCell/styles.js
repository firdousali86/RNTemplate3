// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textContainer: {
    height: 80,
    justifyContent: 'center',
  },
  homeContainerStyle: {backgroundColor: 'red'},
  favoriteContainerStyle: {backgroundColor: 'blue'},
});
