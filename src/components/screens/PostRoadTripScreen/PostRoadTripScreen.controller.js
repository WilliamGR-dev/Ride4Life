import {useCallback, useEffect, useState} from 'react';
import imagePickerHelper from '../../../helpers/imagePickerHelper';
import {useRefresh} from '../../../hooks';

const useController = ({}) => {
  const [data, setData] = useState();
  const [roadTrip, setRoadTrip] = useState([{input: ''}, {input: ''}]);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [InputSelected, setInputSelected] = useState(null);
  const [title, setTitle] = useState('');

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
    &input=${destination}&radius=2000`;
    console.log(apiUrl);
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
    value => {
      let array = roadTrip;
      array[InputSelected].placeId = value;
      array[InputSelected].input = value.description;
      setRoadTrip(array);
    },
    [InputSelected, roadTrip],
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
  };
};

export default useController;
