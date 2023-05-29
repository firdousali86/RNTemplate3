import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
  TestSaga,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {userActions} from '../features/user/userSlice';
import {NotificationHelper} from '../helpers';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    NotificationHelper.initializeFCM(
      remoteMessage => {
        console.log(remoteMessage);

        navigation.navigate('newHome');
      },
      remoteMessage => {
        console.log(remoteMessage);

        navigation.navigate('newHome');
      },
    );
    NotificationHelper.checkFCMPermission();

    NotificationHelper.getToken();
    NotificationHelper.refreshToken();
  }, []);

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
        <Stack.Screen name="testSaga" component={TestSaga} />
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />
      </Stack.Group>
    );
  };

  MyDrawer = () => {
    return (
      <Drawer.Navigator initialRouteName="TestSaga">
        <Drawer.Screen name="TestSaga" component={TestSaga} />
        <Drawer.Screen name="TestUseRef" component={TestUseRef} />
      </Drawer.Navigator>
    );
  };

  return MyDrawer();

  // return isUserLoggedIn ? (
  //   MyDrawer()
  // ) : (
  //   <Stack.Navigator>{getAuthStack()}</Stack.Navigator>
  // );

  // return (
  //   <Stack.Navigator>
  //     {isUserLoggedIn ? MyDrawer() : getAuthStack()}
  //   </Stack.Navigator>
  // );
};

export default Navigation;
