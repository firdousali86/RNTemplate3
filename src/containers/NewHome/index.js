import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {carActions} from '../../features/car/carSlice';

const NewHome = () => {
  const dispatch = useDispatch();

  const [carBrand, setCarBrand] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const car = useSelector(state => state.car);

  return (
    <View>
      <Text>new home</Text>

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
          }
        }}>
        <Text>ADD</Text>
      </TouchableOpacity>

      <FlatList
        data={car.carCollection}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.brand}</Text>
              <Text>{item.name}</Text>
              <Text>{item.model}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewHome;
