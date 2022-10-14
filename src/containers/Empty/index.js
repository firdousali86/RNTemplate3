// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';

class Empty extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Empty Screen</Text>
      </View>
    );
  }
}

export default Empty;
