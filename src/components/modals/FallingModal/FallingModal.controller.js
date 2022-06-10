import {useCallback, useEffect, useState} from 'react';
import {dispatch, store} from '../../../redux/store';

const useController = () => {
  const [choice, setChoice] = useState();
  const [choiceList, setChoiceList] = useState([]);
  useEffect(() => {
    setChoiceList([
      {label: 'Bordeaux', value: 'Bordeaux'},
      {label: 'Paris', value: 'Paris'},
    ]);
    return false;
  }, []);

  return {choice, setChoice, choiceList};
};

export default useController;
