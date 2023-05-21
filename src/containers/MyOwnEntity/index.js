import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import {
  request,
  PERMISSIONS,
  check,
  RESULTS,
  checkLocationAccuracy,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

// const {request} = itemsActions;

const MyOwnEntity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   request({url: 'https://testapi-383516.de.r.appspot.com/api/items'}),
    // );

    checkLocationPermission(
      () => {
        Geolocation.getCurrentPosition(
          position => {
            const locationObject = {
              ...position.coords,
              timestamp: position.timestamp,
              mocked: position.mocked,
            };

            console.log(position);

            // this.setLocation(locationObject);
          },
          error => {
            // See error code charts below.
          },
          {
            showLocationDialog: true,
            forceRequestLocation: true,
            distanceFilter: 0.5,
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 1000,
          },
        );
      },
      () => {},
    );
  }, []);

  const checkLocationPermission = (successCallback, errorCallback) => {
    check(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            requestPermission(successCallback, errorCallback);
            break;
          case RESULTS.DENIED:
            requestPermission(successCallback, errorCallback);
            break;
          case RESULTS.GRANTED:
            successCallback();
            break;
          case RESULTS.BLOCKED:
            requestPermission(successCallback, errorCallback);
            break;
        }
      })
      .catch(error => {
        errorCallback();
      });
  };

  const requestPermission = (successCallback, errorCallback) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        if (successCallback) successCallback();
      })
      .catch(error => {
        if (errorCallback) errorCallback(error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Text>myownentity</Text>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MyOwnEntity;
