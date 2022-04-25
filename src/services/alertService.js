import {Alert} from 'react-native';
import {t} from 'react-i18nify';
//import crashlytics from '@react-native-firebase/crashlytics';
//import ShareHelper from './ShareHelper';

export const alert = (title, message, buttonsResolve, dismissResolve) => {
  return new Promise(resolve => {
    let buttons;

    if (buttonsResolve) {
      buttons = buttonsResolve.map(item => {
        return {
          text: item.text,
          onPress: () => {
            resolve(item.resolve);
          },
        };
      });
    }

    Alert.alert(title, message, buttons, {
      onDismiss: () => {
        resolve(dismissResolve);
      },
    });
  });
};

export const alertOk = async (title, message) => {
  return alert(
    title,
    message,
    [
      {
        text: t('global.ok'),
        resolve: true,
      },
    ],
    false,
  );
};

export const alertOkCancel = async (title, message) => {
  return alert(
    title,
    message,
    [
      {
        text: t('global.cancel'),
        resolve: false,
      },
      {
        text: t('global.ok'),
        resolve: true,
      },
    ],
    false,
  );
};

export default {
  alert,
  alertOk,
  alertOkCancel,
};
