import {useEffect, useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import {LocationHelper} from '../../helpers';
import {MapViewControl} from '../../controls';
// const {request} = itemsActions;

const MyOwnEntity = () => {
  const [locationObject, setLocationObject] = useState(undefined);
  const dispatch = useDispatch();
  const mapRef = useRef(null);

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
      <MapViewControl
        ref={mapRef}
        location={locationObject}
        style={{flex: 1}}
      />
      <TouchableOpacity
        style={{height: 44}}
        onPress={() => {
          mapRef.current.something();
        }}>
        <Text>test ref</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyOwnEntity;
