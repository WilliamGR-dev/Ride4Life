import {Platform, BackHandler, ToastAndroid} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {t} from 'react-i18nify';
import {useCallback} from 'react';

let currentCount = 0;

const backPressHandler = () => {
  if (currentCount < 1) {
    currentCount += 1;

    ToastAndroid.showWithGravity(
      t('back_handler.toast_close_app_android'),
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }

  setTimeout(() => {
    currentCount = 0;
  }, 2000);
};

const useDoubleBackPressExit = () => {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'ios') {
        return;
      }

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (currentCount === 1) {
            subscription.remove();
            return false;
          }

          backPressHandler();
          return true;
        },
      );

      return () => {
        currentCount = 0;
        subscription.remove();
      };
    }, []),
  );
};

export default useDoubleBackPressExit;
