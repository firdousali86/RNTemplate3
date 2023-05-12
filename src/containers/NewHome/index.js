import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {carActions} from '../../features/car/carSlice';
import {authActions} from '../../features/auth/authSlice';

import analytics from '@react-native-firebase/analytics';

const NewHome = () => {
  useEffect(() => {
    analytics().logEvent('basket', {
      id: 3745092,
      item: 'mens grey t-shirt',
      description: ['round neck', 'long sleeved'],
      size: 'L',
    });
  }, []);

  const dispatch = useDispatch();

  const [carBrand, setCarBrand] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const car = useSelector(state => state.car);

  const renderCarForm = () => {
    return (
      <>
        <TextInput
          value={carBrand}
          onChangeText={changedText => {
            setCarBrand(changedText);
          }}
          placeholder="Car Brand"
        />
        <TextInput
          value={carName}
          onChangeText={changedText => {
            setCarName(changedText);
          }}
          placeholder="Car Name"
        />
        <TextInput
          value={carModel}
          onChangeText={changedText => {
            setCarModel(changedText);
          }}
          placeholder="Car Model"
        />
        <TouchableOpacity
          onPress={() => {
            if (carBrand && carName && carModel) {
              dispatch(
                carActions.addNewCar({
                  brand: carBrand,
                  name: carName,
                  model: carModel,
                }),
              );

              setCarBrand('');
              setCarName('');
              setCarModel('');
            }
          }}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderListItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 80,
            justifyContent: 'center',
          }}>
          <Text>{item.brand}</Text>
          <Text>{item.name}</Text>
          <Text>{item.model}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              carActions.deleteCar({
                brand: item.brand,
                name: item.name,
                model: item.model,
              }),
            );
          }}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {renderCarForm()}
      <View style={{flex: 1}}>
        <FlatList data={car.carCollection} renderItem={renderListItem} />
      </View>

      <TouchableOpacity
        style={{marginBottom: 50}}
        onPress={() => {
          dispatch(authActions.onLogout());
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewHome;
