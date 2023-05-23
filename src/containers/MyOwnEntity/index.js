import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import {LocationHelper} from '../../helpers';
import {MapViewControl} from '../../controls';
// const {request} = itemsActions;

const MyOwnEntity = () => {
  const [locationObject, setLocationObject] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   request({url: 'https://testapi-383516.de.r.appspot.com/api/items'}),
    // );

    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.trackUserLocation(
          locationObject => {
            setLocationObject(locationObject);
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
      <MapViewControl location={locationObject} style={{flex: 1}} />
    </View>
  );
};

export default MyOwnEntity;
