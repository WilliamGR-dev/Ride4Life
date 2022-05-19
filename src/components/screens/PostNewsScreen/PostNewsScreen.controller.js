import {useCallback, useEffect, useState} from 'react';
import imagePickerHelper from '../../../helpers/imagePickerHelper';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState('');

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
  };
};

export default useController;
