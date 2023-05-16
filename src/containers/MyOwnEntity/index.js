import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {itemsActions} from '../../features/items/itemsSlice';

const {request} = itemsActions;

const MyOwnEntity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      request({url: 'https://testapi-383516.de.r.appspot.com/api/items'}),
    );
  }, []);

  return (
    <View>
      <Text>myownentity</Text>
    </View>
  );
};

export default MyOwnEntity;
