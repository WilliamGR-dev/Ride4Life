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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';

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
    backgroundColor: '#242D3C',
    height: '100%',
    width: '100%',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destination: {
    marginLeft: 10,
    width: '80%',
    marginBottom: '8%',
    height: '10%',
  },
  suggestionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  suggestions: {
    backgroundColor: '#242D3C',
    color: '#ffffff',
    padding: 5,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  informationContainer: {
    width: '90%',
    paddingBottom: 20,
    marginBottom: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationImage: {
    height: 21,
    width: 16,
  },
  searchButton: {
    backgroundColor: '#0C57E6',
    borderRadius: 32,
    padding: 10,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedContainer: {
    backgroundColor: '#0C57E6',
    borderRadius: 32,
    padding: 10,
    height: 55,
    width: 93,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedText: {
    fontSize: 15,
    color: '#ffffff',
  },
});

const mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 13,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#144b53',
      },
      {
        lightness: 14,
      },
      {
        weight: 1.4,
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#08304b',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 5,
      },
      {
        color: '#ff0000',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#0b434f',
      },
      {
        lightness: 25,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#0b3d51',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        color: '#146474',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#021019',
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
    destinationCoordinate,
    getCoordinates,
  } = useController(props);

  const {} = useNavigator();

  const isFalling = useSelector(s => s.isFalling);

  const predictionsView = predictions.map(prediction => (
    <TouchableOpacity
      onPress={() => {
        console.log(prediction);
        setDestinationPlaceId(prediction.place_id);
        setDestination(prediction.description);
        getCoordinates(prediction.place_id);
        setPredictions([]);
        setSearching(false);
      }}
      key={prediction.place_id}>
      <View style={styles.suggestionsContainer}>
        <Ionicons name={'location-sharp'} color={'#ffffff'} size={32} />
        <Text style={styles.suggestions}>
          {prediction.structured_formatting.main_text}
          {prediction.structured_formatting.secondary_text}
        </Text>
      </View>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {isFalling.status && <FallingModal />}
      {isSearching && (
        <View style={styles.placeview}>
          <View style={styles.searchHeader}>
            <TouchableOpacity
              onPress={() => {
                setSearching(false);
              }}>
              <MaterialIcons name={'arrow-back'} size={40} color={'#ffffff'} />
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
                strokeWidth={10}
                strokeColor="#45a5f7"
              />
            )}
            {destinationCoordinate && (
              <Marker coordinate={destinationCoordinate} />
            )}
          </MapView>
          <View style={styles.informationContainer}>
            <View style={styles.searchButton}>
              <TouchableOpacity
                onPress={() => {
                  setSearching(true);
                }}>
                <FontAwesome size={18} color={'#ffffff'} name={'search'} />
              </TouchableOpacity>
            </View>
            <View style={styles.speedContainer}>
              <Text style={styles.speedText}>
                {Math.round(currentPosition.coords.speed) * 3.6}
              </Text>
              <Text style={styles.speedText}>Km/h</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default MapScreen;
