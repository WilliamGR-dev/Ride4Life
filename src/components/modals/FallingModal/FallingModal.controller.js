import {useCallback, useEffect, useState} from 'react';
import {dispatch, store} from '../../../redux/store';

const useController = () => {
  const [remainingTime, setRemainingTime] = useState(60);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let time = remainingTime;
      setRemainingTime(time - 1);
    }, 1000);
    return () => clearTimeout(intervalId);
  });
  const noProblem = useCallback(() => {
    dispatch('isFalling', {
      status: false,
    });
  }, []);

  return {noProblem, remainingTime};
};

export default useController;
