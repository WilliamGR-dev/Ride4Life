import {useCallback, useEffect, useState} from 'react';
import imagePickerHelper from '../../../helpers/imagePickerHelper';

const useController = ({}) => {
  const [data, setData] = useState();
  const [roadTrip, setRoadTrip] = useState([{}, {}]);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState('');
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
    console.log(roadTrip.join());
    let array = roadTrip.splice(roadTrip.length - 1, 0, {});
    console.log(roadTrip.join());
    setRoadTrip(array);
  }, [roadTrip]);

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
  };
};

export default useController;
