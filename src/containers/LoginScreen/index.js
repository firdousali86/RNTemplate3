// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={() => {}}
        value={''}
        placeholder="Email/Username"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={() => {}}
        value={''}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
