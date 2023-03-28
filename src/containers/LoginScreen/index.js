// @flow
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {authActions} from '../../features/auth/authSlice';

import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
        placeholder="Email/Username"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setPassword(text);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(authActions.onLogin({email: email}));
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
