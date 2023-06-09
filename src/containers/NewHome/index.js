import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  NativeModules,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {carActions} from '../../features/car/carSlice';
import {authActions} from '../../features/auth/authSlice';
import {PersistanceHelper, AnalyticsHelper} from '../../helpers';
import {CommonCarCell} from '../../components';
import firestore from '@react-native-firebase/firestore';

const {CalendarModule} = NativeModules;

const NewHome = props => {
  useEffect(() => {
    fetchCars();

    AnalyticsHelper.logTest();

    PersistanceHelper.setter(
      'mycommonkey',
      'this is to check both the modules at once running one by one on each platform',
    );

    setTimeout(() => {
      PersistanceHelper.getter('mycommonkey', data => {
        console.log(data);
      });
    }, 5000);

    // Keychain.setInternetCredentials(
    //   'org.reactjs.native.abcd',
    //   'username',
    //   'password',
    // )
    //   .then(() => {
    //     console.log('success');

    //     Keychain.getInternetCredentials('org.reactjs.native.abcd')
    //       .then(credentials => {
    //         console.log(credentials);
    //         console.log('success');
    //       })
    //       .catch(error => {
    //         console.log('failure');
    //       });
    //   })
    //   .catch(() => {
    //     console.log('failure');
    //   });
  }, []);

  const dispatch = useDispatch();

  const [carBrand, setCarBrand] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const car = useSelector(state => state.car);

  const fetchCars = async () => {
    const cars = await firestore().collection('car').get();

    console.log(cars);
  };

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
            firestore()
              .collection('car')
              .add({
                brand: carBrand,
                name: carName,
                model: carModel,
              })
              .then(() => {
                console.log('Item added!');
              });

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

  const renderCarItem = ({item, index}) => {
    return (
      <CommonCarCell
        item={item}
        index={index}
        onCarCellPress={() => {
          dispatch(
            carActions.deleteCar({
              brand: item.brand,
              name: item.name,
              model: item.model,
            }),
          );
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderCarForm()}
      <View style={{flex: 1}}>
        <FlatList data={car.carCollection} renderItem={renderCarItem} />
      </View>

      <TouchableOpacity
        style={{marginBottom: 50}}
        onPress={() => {
          // props.navigation.navigate('favoriteCarScreen', {
          //   carData: car.carCollection,
          // });
          CalendarModule.createCalendarEvent('testName', 'testLocation');
        }}>
        <Text>Favorite screen</Text>
      </TouchableOpacity>
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
