/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from './containers';

import {PersistGate} from 'redux-persist/integration/react';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

AppRegistry.registerComponent(appName, () => App);
