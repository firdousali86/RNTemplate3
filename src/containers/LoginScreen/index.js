// @flow
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
// import {authActions} from '../../features/auth/authSlice';
import {userActions} from '../../features/user/userSlice';

const {request, clear} = userActions;

import styles from './styles';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, []);

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
        autoCapitalize="none"
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
          dispatch(
            request({
              apiType: 'login',
              uri: 'https://testapi-383516.de.r.appspot.com/api/Users/login',
              body: {
                email,
                password,
              },
            }),
          );
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          props.navigation.navigate('signupScreen');
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
