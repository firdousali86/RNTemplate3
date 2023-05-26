import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, Text, Alert} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';

const markersArray = [
  {
    lat: 0,
    lon: 0,
  },
  {
    lat: 0.5,
    lon: 0.5,
  },
  {
    lat: 1,
    lon: 1,
  },
  {
    lat: 1.5,
    lon: 1.5,
  },
  {
    lat: 2,
    lon: 2,
  },
  {
    lat: 2.5,
    lon: 2.5,
  },
];

const MapViewControl = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    something: () => {
      console.log('something is happening');
    },
  }));

  const renderMarkers = () => {
    return markersArray.map((item, index) => {
      return (
        <Marker
          onPress={() => {
            // Alert.alert('onclicked', 'you clicked a map marker');
          }}
          coordinate={{
            latitude: item.lat,
            longitude: item.lon,
          }}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 19}}>{index}</Text>
          </View>
        </Marker>
      );
    });
  };

  return (
    <View style={props.style}>
      <MapView
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: props?.location?.latitude ? props?.location?.latitude : 0,
          longitude: props?.location?.longitude
            ? props?.location?.longitude
            : 0,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {renderMarkers()}
      </MapView>
    </View>
  );
});

export default MapViewControl;
