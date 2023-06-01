import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './styles';
import {cartActions} from '../../features/cart/cartSlice';
import {useDispatch} from 'react-redux';

const itemsArray = [
  {name: 'Macbook', details: 'Macbook pro with core i9', price: 2000},
  {name: 'iPhone', details: 'iPhone 14 pro', price: 1000},
  {
    name: 'Vaccum Cleaner',
    details: 'Less power consumption, more cleaning',
    price: 500,
  },
  {name: 'iPod', details: 'Sleek and smart', price: 800},
  {
    name: 'Microwave',
    details: 'less power consumption, more cooking',
    price: 500,
  },
  {
    name: 'Ironbox',
    details: 'less power consumption, more ironing',
    price: 400,
  },
  {name: 'LED TV', details: 'Reliable, True colors', price: 1200},
  {
    name: 'Washing Maching',
    details: 'less power consumption, more cleaning',
    price: 800,
  },
];

const ItemList = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={itemsArray}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemCell}>
              <View>
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'OpenSans-LightItalic',
                  }}>
                  {item.name}
                </Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.addToCart(item));
                  }}>
                  <Text>Purchase</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemList;
