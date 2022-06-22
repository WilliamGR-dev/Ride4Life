import {useCallback, useEffect, useState} from 'react';

import authService from '../../../services/authService';
import alertHelper from '../../../helpers/alertHelper';
import {useSelector} from 'react-redux';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';
import Geolocation from 'react-native-geolocation-service';
import {checkAndRequestMultiplePermissions} from '../../../services/permissionsService';
import {Platform} from 'react-native';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {PERMISSIONS} from 'react-native-permissions';
import {dispatch} from '../../../redux/store';
const useController = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPermissionAuthorized, setIsPermissionAuthorized] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [currentPosition, setCurrentPosition] = useState();
  const [destination, setDestination] = useState();
  const [destinationPlaceId, setDestinationPlaceId] = useState(null);
  const [destinationCoordinate, setDestinationCoordinate] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const userProfile = useSelector(s => s.userProfile);

  const requestPermission = useCallback(async () => {
    const permissions = Platform.select({
      android: [
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.SEND_SMS,
      ],
      ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
    });
    const isAuthorized = await checkAndRequestMultiplePermissions(permissions);
    setIsPermissionAuthorized(isAuthorized);
    if (isAuthorized) {
      Geolocation.getCurrentPosition(
        position => {
          setCurrentPosition(position);

          dispatch('position', {
            position,
          });
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      Geolocation.watchPosition(
        position => {
          setCurrentPosition(position);
          dispatch('position', {
            position,
          });
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          interval: 1000,
        },
      );
    }
  }, []);
  useEffect(() => {
    requestPermission();
    refreshUserProfileData();
    //const sub = checkIfFall();

    return () => {
      //sub && sub.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeDestination = useCallback(async destination => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk
    &input=${destination}&radius=2000`;
    console.log(apiUrl);
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      setPredictions(json.predictions);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getCoordinates = useCallback(async place_id => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk&place_id=${place_id}&fields=geometry`;
    const result = await fetch(apiUrl);
    const json = await result.json();
    setDestinationCoordinate({
      latitude: json.result.geometry.location.lat,
      longitude: json.result.geometry.location.lng,
    });
  }, []);

  return {
    isModalVisible,
    setIsModalVisible,
    userProfile,
    currentPosition,
    isPermissionAuthorized,
    setIsPermissionAuthorized,
    destination,
    setDestination,
    predictions,
    setPredictions,
    onChangeDestination,
    destinationPlaceId,
    setDestinationPlaceId,
    isSearching,
    setSearching,
    destinationCoordinate,
    getCoordinates,
  };
};

export default useController;
