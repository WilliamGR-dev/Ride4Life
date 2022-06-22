import {useCallback, useEffect, useState} from 'react';
import {dispatch, store} from '../../../redux/store';
import SmsAndroid from 'react-native-get-sms-android';
import {useSelector} from 'react-redux';

const useController = () => {
  const [remainingTime, setRemainingTime] = useState(60);
  const position = useSelector(s => s.position);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let time = remainingTime;
      if (time - 1 == 0) {
        SmsAndroid.autoSend(
          '+33652201669',
          'Un motard a eut un accident sur cette position http://maps.google.com/?q=' +
            position.position.coords.latitude +
            ',' +
            position.position.coords.longitude,
          fail => {
            console.log('Failed with this error: ' + fail);
          },
          success => {
            console.log('SMS sent successfully');
          },
        );
        dispatch('isFalling', {
          status: false,
        });
      }
      setRemainingTime(time - 1);
    }, 1000);
    return () => clearTimeout(intervalId);
  });
  const noProblem = useCallback(() => {
    dispatch('isFalling', {
      status: false,
    });
  }, []);
  const gotProblem = useCallback(() => {
    console.log(position);
    SmsAndroid.autoSend(
      '+33652201669',
      'Un motard a eut un accident sur cette position http://maps.google.com/?q=' +
        position.position.coords.latitude +
        ',' +
        position.position.coords.longitude,
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      success => {
        console.log('SMS sent successfully');
      },
    );
    dispatch('isFalling', {
      status: false,
    });
  }, []);

  return {noProblem, gotProblem, remainingTime};
};

export default useController;
