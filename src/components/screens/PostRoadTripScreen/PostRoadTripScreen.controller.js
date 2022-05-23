import {useCallback, useEffect, useState} from 'react';
import imagePickerHelper from '../../../helpers/imagePickerHelper';
import {useRefresh} from '../../../hooks';

const useController = ({}) => {
  const [data, setData] = useState();
  const [roadTrip, setRoadTrip] = useState([
    {input: '', placeId: ''},
    {input: '', placeId: ''},
  ]);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [InputSelected, setInputSelected] = useState();
  const [showMapPreview, setShowMapPreview] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    lat: '',
    lng: '',
    latD: '',
    lngD: '',
  });
  const [title, setTitle] = useState('');
  const [waypoint, setWaypoint] = useState();

  const addPicture = useCallback(async source => {
    const options = {
      includeBase64: true,
      compressImageMaxWidth: 1024,
      mediaType: 'photo',
      forceJpg: true,
    };

    try {
      const result = await imagePickerHelper.getImageFromPicker(
        options,
        source,
      );

      setPicture(result);
    } catch {}
  }, []);

  const onChangeDestination = useCallback(async destination => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk
    &input=${destination}&radius=2000&fields=geometry`;
    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      setPredictions(json.predictions);
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [refreshing, onRefresh] = useRefresh(async () => {
    setRoadTrip(roadTrip);
  }, []);

  const deletePicture = useCallback(async () => {
    setPicture(null);
  }, []);

  const onTextLayout = useCallback(
    e => {
      if (numOfLines === 0) {
        setNumOfLines(e.nativeEvent.lines.length);
      }
    },
    [numOfLines],
  );

  const createStep = useCallback(() => {
    let array = roadTrip;
    array.join();
    array.splice(array.length - 1, 0, {input: ''});
    array.join();
    setRoadTrip([...array]);
  }, [roadTrip]);

  const setDestination = useCallback(
    (value, index) => {
      let array = roadTrip;
      array[index].input = value;
      setRoadTrip(array);
    },
    [roadTrip],
  );

  const setRoadMapPlaceId = useCallback(
    async value => {
      let array = roadTrip;
      array[InputSelected].placeId = value;
      array[InputSelected].input = value.description;
      if (array[0].placeId != '' && array[array.length - 1].placeId != '') {
        const apiUrlOrigin = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk&place_id=${array[0].placeId.place_id}&fields=geometry`;
        const apiUrlDestination = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk&place_id=${
          array[array.length - 1].placeId.place_id
        }&fields=geometry`;
        try {
          const resultOrigin = await fetch(apiUrlOrigin);
          const resultDestination = await fetch(apiUrlDestination);
          const jsonOrigin = await resultOrigin.json();
          const jsonDestination = await resultDestination.json();
          setShowMapPreview(false);
          let region = initialRegion;
          if (
            jsonOrigin.result.geometry.location.lat >
            jsonDestination.result.geometry.location.lat
          ) {
            region.latD =
              jsonOrigin.result.geometry.location.lat -
              jsonDestination.result.geometry.location.lat;
          } else {
            region.latD =
              jsonDestination.result.geometry.location.lat -
              jsonOrigin.result.geometry.location.lat;
          }
          if (
            jsonOrigin.result.geometry.location.lng >
            jsonDestination.result.geometry.location.lng
          ) {
            region.lngD =
              jsonOrigin.result.geometry.location.lng -
              jsonDestination.result.geometry.location.lng;
          } else {
            region.lngD =
              jsonDestination.result.geometry.location.lng -
              jsonOrigin.result.geometry.location.lng;
          }

          region.lat =
            (jsonOrigin.result.geometry.location.lat +
              jsonDestination.result.geometry.location.lat) /
            2;
          region.lng =
            (jsonOrigin.result.geometry.location.lng +
              jsonDestination.result.geometry.location.lng) /
            2;
          setInitialRegion(region);
          setShowMapPreview(true);
        } catch (err) {
          console.error(err);
        }
      }
      let allWaypoint = array.slice(1, -1);
      let waypointCoordinates = [];
      setWaypoint(undefined);
      for (const element of allWaypoint) {
        const apiUrlWaypoint = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCvTx4sUz4AYNZFfYfoaanpdKZ3DbvWeWk&place_id=${element.placeId.place_id}&fields=geometry`;

        const resultWaypoint = await fetch(apiUrlWaypoint);
        const jsonWaypoint = await resultWaypoint.json();
        waypointCoordinates.push({
          latitude: jsonWaypoint.result.geometry.location.lat,
          longitude: jsonWaypoint.result.geometry.location.lng,
        });
      }
      console.log(waypointCoordinates);
      setWaypoint(waypointCoordinates);
      setRoadTrip(array);
    },
    [InputSelected, initialRegion, roadTrip],
  );

  useEffect(() => {
    //-- Mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    picture,
    deletePicture,
    addPicture,
    isMore,
    setIsMore,
    numOfLines,
    setNumOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    description,
    setDescription,
    title,
    setTitle,
    roadTrip,
    setRoadTrip,
    createStep,
    setDestination,
    predictions,
    setPredictions,
    onChangeDestination,
    setRoadMapPlaceId,
    InputSelected,
    setInputSelected,
    refreshing,
    onRefresh,
    showMapPreview,
    waypoint,
    initialRegion,
  };
};

export default useController;
