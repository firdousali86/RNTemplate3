/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
import LogHelper from './helpers/LogHelper';

import Navigation from './navigate';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('Initial state: ', store.getState());
    // const unsubscribe = store.subscribe(() => {
    //   // console.log('Updated state: ', store.getState());
    // });
    // return () => {
    //   unsubscribe();
    // };

    // LogHelper.localServerLogging('test mount');

    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      loadingCompleted();
    }
  }, [isLoading]);

  const onBeforeLift = () => {
    // DataHelper.setStore(this.state.store.store);

    setIsLoading(false);
  };

  const loadingCompleted = () => {};

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
          <Navigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

AppRegistry.registerComponent(appName, () => App);
