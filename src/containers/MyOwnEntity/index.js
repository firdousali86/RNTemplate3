import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {LocationHelper} from '../../helpers';
// const {request} = itemsActions;

const MyOwnEntity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   request({url: 'https://testapi-383516.de.r.appspot.com/api/items'}),
    // );

    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.fetchLocation(
          locationObject => {
            console.log(locationObject);
          },
          error => {},
        );
      },
      () => {},
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>myownentity</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
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
