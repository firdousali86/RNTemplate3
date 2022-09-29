// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

export default class Empty extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <View style={[styles.container]}></View>;
  }
}
