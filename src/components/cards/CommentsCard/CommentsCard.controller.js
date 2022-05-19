import {useCallback, useState} from 'react';
import {dispatch} from '../../../redux/store';
import apiHelper from '../../../helpers/apiHelper';

const useController = ({}) => {
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const onTextLayout = useCallback(
    e => {
      if (numOfLines === 0) {
        setNumOfLines(e.nativeEvent.lines.length);
      }
    },
    [numOfLines],
  );

  return {
    isMore,
    setIsMore,
    numOfLines,
    setNumOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
  };
};

export default useController;
