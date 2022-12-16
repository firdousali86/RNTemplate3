/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ActivityLoader} from './components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from './containers';
import {cakeActions} from './features/cake/cakeSlice';
import {icecreamActions} from './features/icecream/icecreamSlice';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  useEffect(() => {
    // console.log('Initial state: ', store.getState());

    const unsubscribe = store.subscribe(() => {
      // console.log('Updated state: ', store.getState());
    });

    store.dispatch(cakeActions.ordered());
    store.dispatch(cakeActions.ordered());
    store.dispatch(cakeActions.ordered());
    store.dispatch(cakeActions.restocked(3));

    store.dispatch(icecreamActions.ordered());
    store.dispatch(icecreamActions.ordered());
    store.dispatch(icecreamActions.restocked(2));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

AppRegistry.registerComponent(appName, () => App);
