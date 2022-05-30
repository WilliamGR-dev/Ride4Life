import {useCallback, useEffect, useState} from 'react';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';
import {Alert} from 'react-native';
import {dispatch, store} from '../../../redux/store';
let fallingDate = null;

const useController = ({}) => {
  const [isFalling, setIsFalling] = useState(false);
  useEffect(() => {
    const sub = checkIfFall();

    return () => {
      if (sub && sub.unsubscribe != undefined) {
        sub && sub.unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIfFall = useCallback(async () => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
    const sub = accelerometer.subscribe(({x, y, z}) => {
      let isFalling = Math.abs(x) < 1 && Math.abs(y) < 1 && Math.abs(z) < 1;
      if (isFalling && !fallingDate) {
        fallingDate = new Date();
      } else if (!isFalling && fallingDate) {
        fallingDate = null;
      } else if (isFalling && fallingDate) {
        let currentDate = new Date();
        if (currentDate - fallingDate >= 300) {
          fallingDate = null;
          dispatch('isFalling', {
            status: true,
          });
          console.log(store.getState().isFalling);
        }
      }
    });
    return sub;
  }, []);

  return {isFalling, setIsFalling};
};

export default useController;
