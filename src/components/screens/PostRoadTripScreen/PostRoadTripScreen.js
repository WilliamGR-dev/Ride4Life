import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {t} from 'react-i18nify';

import styles from './PostRoadTripScreen.styles';

import useController from './PostRoadTripScreen.controller';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import NewsCard from '../../cards/NewsCard/NewsCard';
import CommentsCard from '../../cards/CommentsCard/CommentsCard';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import {RNCamera} from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../inputs/FormTextInput/FormTextInput';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';

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

const PostRoadTripScreen = props => {
  const {
    title,
    setTitle,
    roadTrip,
    createStep,
    setDestination,
    onChangeDestination,
    predictions,
    setRoadMapPlaceId,
    setPredictions,
    InputSelected,
    setInputSelected,
    refreshing,
    onRefresh,
    showMapPreview,
    initialRegion,
    waypoint,
    markerCoordinates,
    shortDescription,
    setShortDescription,
    description,
    setDescription,
    submit,
  } = useController(props);

  const isFalling = useSelector(s => s.isFalling);

  const predictionsView = predictions.map(prediction => (
    <TouchableOpacity
      onPress={() => {
        setRoadMapPlaceId(prediction);
        setPredictions([]);
        setInputSelected(null);
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
  const renderItem = ({item, index}) => {
    console.log('InputSelected:', InputSelected);
    if (index === 0) {
      return (
        <View>
          {!InputSelected || InputSelected === index ? (
            <FormTextInput
              onFocus={() => setInputSelected(index)}
              style={styles.destination}
              value={roadTrip[index].input}
              onChangeText={value => {
                setDestination(value, index);
                onChangeDestination(value);
              }}
              placeholder="Depart"
              label="Depart"
            />
          ) : undefined}
          {InputSelected === roadTrip.indexOf(item)
            ? predictionsView
            : undefined}
        </View>
      );
    }

    if (index === roadTrip.length - 1 && InputSelected != 0) {
      return (
        <View>
          {!InputSelected || InputSelected === index ? (
            <FormTextInput
              onFocus={() => setInputSelected(roadTrip.indexOf(item))}
              style={styles.destination}
              value={roadTrip[index].input}
              onChangeText={value => {
                setDestination(value, index);
                onChangeDestination(value);
              }}
              placeholder="Arrivée"
              label="Arrivée"
            />
          ) : undefined}

          {InputSelected === roadTrip.indexOf(item)
            ? predictionsView
            : undefined}
        </View>
      );
    }
    if (index !== roadTrip.length - 1 && InputSelected != 0) {
      return (
        <View>
          {!InputSelected || InputSelected === index ? (
            <FormTextInput
              onFocus={() => setInputSelected(index)}
              style={styles.destination}
              value={roadTrip[index].input}
              onChangeText={value => {
                setDestination(value, index);
                onChangeDestination(value);
              }}
              placeholder="Votre Etape"
              label="Etape"
            />
          ) : undefined}

          {InputSelected === roadTrip.indexOf(item)
            ? predictionsView
            : undefined}
        </View>
      );
    }
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.postHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Nouveau RoadTrip</Text>
        <TouchableOpacity style={styles.check} onPress={() => submit()}>
          <Feather name={'check'} size={32} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      {/*{renderImagePicker()}*/}
      <ScrollView style={styles.postBody}>
        <FormTextInput
          style={styles.destination}
          value={title}
          onChangeText={value => {
            setTitle(value);
          }}
          placeholder="Votre titre"
          label="Titre"
        />
        <FormTextInput
          style={styles.destination}
          value={description}
          onChangeText={value => {
            setDescription(value);
          }}
          placeholder="Votre description"
          label="Description"
        />
        <FormTextInput
          style={styles.destination}
          value={shortDescription}
          onChangeText={value => {
            setShortDescription(value);
          }}
          placeholder="Votre petite description"
          label="Petite description"
        />
        <View>
          <View style={styles.labelContainer}>
            <Text style={styles.title}>Itineraires</Text>
            <TouchableOpacity onPress={createStep}>
              <FontAwesome
                name={'plus'}
                size={20}
                color={'#ffffff'}
                style={styles.addStepIcon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <SuperFlatList
              data={roadTrip}
              keyExtractor={item => roadTrip.indexOf(item)}
              renderItem={renderItem}
              style={styles.list}
              isRefreshing={refreshing}
              onRefresh={onRefresh}
            />
          </View>

          {showMapPreview && (
            <View style={styles.mapContainer}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: initialRegion.lat,
                  longitude: initialRegion.lng,
                  latitudeDelta: initialRegion.latD + initialRegion.latD * 0.2,
                  longitudeDelta: initialRegion.lngD + initialRegion.lngD * 0.2,
                }}
                customMapStyle={mapStyle}
                showsUserLocation={true}>
                <MapViewDirections
                  origin={'place_id:' + roadTrip[0].placeId.place_id}
                  destination={
                    'place_id:' + roadTrip[roadTrip.length - 1].placeId.place_id
                  }
                  waypoints={waypoint}
                  apikey={'AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk'}
                  strokeWidth={10}
                  strokeColor="#45a5f7"
                />
                {markerCoordinates.map((marker, index) => (
                  <Marker key={index} coordinate={marker} />
                ))}
              </MapView>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default PostRoadTripScreen;
