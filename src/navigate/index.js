import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  DetailsScreen,
  LoginScreen,
  ExpMemo,
  NewHome,
  ItemList,
  MyOwnEntity,
  SignupScreen,
  TestUseRef,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native';
import {userActions} from '../features/user/userSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const isUserLoggedIn =
    user?.data?.id &&
    typeof user?.data?.id === 'string' &&
    user?.data?.id.length > 20
      ? true
      : false;

  getHomeStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="myOwnEntity"
          component={MyOwnEntity}
          options={{
            headerRight: () => (
              <Button
                onPress={() => {
                  dispatch(userActions.onLogout());
                }}
                title={'Log out'}
              />
            ),
          }}
        />
        <Stack.Screen name="testUseRef" component={TestUseRef} />
        <Stack.Screen name="newHome" component={NewHome} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="itemList" component={ItemList} />

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="expMemo" component={ExpMemo} />
      </Stack.Group>
    );
  };

  getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen testID="Login" name="Login" component={LoginScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getHomeStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
