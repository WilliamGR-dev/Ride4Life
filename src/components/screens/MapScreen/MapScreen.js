import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FormTextInput from '../../inputs/FormTextInput/FormTextInput';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigator} from '../../../hooks';

import useController from './MapScreen.controller';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  placeview: {
    position: 'absolute',
    padding: 5,
    zIndex: 4,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  searchHeader: {
    flexDirection: 'row',
  },
  destination: {
    width: '80%',
    marginBottom: '8%',
    height: '10%',
  },
  suggestionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestions: {
    backgroundColor: 'white',
    padding: 5,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  informationContainer: {
    width: '90%',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationImage: {
    height: 21,
    width: 16,
  },
  searchButton: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 10,
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 10,
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#ffe605',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];

const MapScreen = props => {
  const {
    isPermissionAuthorized,
    currentPosition,
    destination,
    setDestination,
    onChangeDestination,
    predictions,
    setPredictions,
    destinationPlaceId,
    setDestinationPlaceId,
    isSearching,
    setSearching,
  } = useController(props);

  const {} = useNavigator();

  const predictionsView = predictions.map(prediction => (
    <TouchableOpacity
      onPress={() => {
        setDestinationPlaceId(prediction.place_id);
        setDestination(prediction.description);
        setPredictions([]);
        setSearching(false);
      }}
      key={prediction.place_id}>
      <View style={styles.suggestionsContainer}>
        <Image
          style={styles.locationImage}
          source={require('../../../assets/images/icons/location-dot-solid.png')}
        />
        <Text style={styles.suggestions}>
          {prediction.structured_formatting.main_text}
          {prediction.structured_formatting.secondary_text}
        </Text>
      </View>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {isSearching && (
        <View style={styles.placeview}>
          <View style={styles.searchHeader}>
            <TouchableOpacity
              onPress={() => {
                setSearching(false);
              }}>
              <MaterialIcons name={'arrow-back'} size={40} />
            </TouchableOpacity>
            <FormTextInput
              style={styles.destination}
              value={destination}
              onChangeText={value => {
                setDestination(value);
                onChangeDestination(value);
              }}
              placeholder="Votre destination"
            />
          </View>
          {predictionsView}
        </View>
      )}
      {isPermissionAuthorized && currentPosition && (
        <>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: currentPosition.coords.latitude,
              longitude: currentPosition.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            customMapStyle={mapStyle}
            showsUserLocation={true}>
            {destinationPlaceId && (
              <MapViewDirections
                origin={
                  currentPosition.coords.latitude.toString() +
                  ',' +
                  currentPosition.coords.longitude.toString()
                }
                destination={'place_id:' + destinationPlaceId}
                apikey={'AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk'}
                strokeWidth={3}
                strokeColor="hotpink"
              />
            )}
          </MapView>
          <View style={styles.informationContainer}>
            <View style={styles.searchButton}>
              <TouchableOpacity
                onPress={() => {
                  setSearching(true);
                }}>
                <FontAwesome size={32} name={'search'} />
              </TouchableOpacity>
            </View>
            <View style={styles.speedContainer}>
              <Text>{Math.round(currentPosition.coords.speed) * 3.6}</Text>
              <Text>Km/h</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default MapScreen;
