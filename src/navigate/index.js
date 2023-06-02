import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
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
  LocaleTest,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {userActions} from '../features/user/userSlice';
import {NotificationHelper, LocalizationHelper} from '../helpers';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <Stack.Screen name="localeTest" component={LocaleTest} />
        <Stack.Screen name="itemList" component={ItemList} />
        <Stack.Screen name="newHome" component={NewHome} />
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

        <Stack.Screen name="Home" component={HomeScreen} />

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

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              LocalizationHelper.locale = 'en';

              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <Text>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              LocalizationHelper.locale = 'uk';
              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <Text>UK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              LocalizationHelper.locale = 'ur';
              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <Text>UR</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    );
  }

  MyDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="localeTest"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="localeTest" component={LocaleTest} />
        <Drawer.Screen name="TestSaga" component={TestSaga} />
        <Drawer.Screen name="TestUseRef" component={TestUseRef} />
      </Drawer.Navigator>
    );
  };

  //return MyDrawer();

  // return isUserLoggedIn ? (
  //   MyDrawer()
  // ) : (
  //   <Stack.Navigator>{getAuthStack()}</Stack.Navigator>
  // );

  return MyDrawer();

  return (
    <Stack.Navigator>
      {!isUserLoggedIn ? getHomeStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
