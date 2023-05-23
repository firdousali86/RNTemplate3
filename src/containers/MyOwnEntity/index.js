import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';
import {LocationHelper} from '../../helpers';
import {MapViewControl} from '../../controls';
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
      <MapViewControl />
    </View>
  );
};

export default MyOwnEntity;
