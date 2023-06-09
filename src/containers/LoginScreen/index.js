// @flow
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
// import {authActions} from '../../features/auth/authSlice';
import {userActions} from '../../features/user/userSlice';
import {AnalyticsHelper} from '../../helpers';
import {kApiLogin} from '../../config/WebServices';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

const {request, clear} = userActions;

import styles from './styles';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());

    const subscriber = auth().onAuthStateChanged(user => {
      console.log(user);
    });

    return subscriber;
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
          AnalyticsHelper.logEvent('login', {email});

          dispatch(
            request({
              apiType: 'login',
              uri: kApiLogin,
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

      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}>
        <Text>Firebase Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}>
        <Text>Firebase Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => {
          console.log('logout.');
        }}
      />

      <ActivityIndicator
        animating={user.isFetching}
        hidesWhenStopped
        size={'large'}
      />
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
