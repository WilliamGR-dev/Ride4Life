import {t} from 'react-i18nify';
import {Linking} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import SpInAppUpdates, {IAUUpdateKind} from 'sp-react-native-in-app-updates';

import {navigationRef} from '../components/navigators/RootNavigator/RootNavigator';

import {alert} from './alertService';
import authService from './authService';

import Config from '../config';

const inAppUpdates = new SpInAppUpdates(false);

export const sleep = m => new Promise(r => setTimeout(r, m));

export const showError = async error => {
  let errorShort;
  let errorLong;

  if (error instanceof Error) {
    errorShort = error.toString();
    errorLong = `${error.toString()}\r\n${error.stack}`;

    if (/Network Error/.test(errorLong)) {
      return;
    }

    // crashlytics().recordError(error);
  } else if (typeof error === 'string' || error instanceof String) {
    errorShort = error;
    errorLong = error;

    //crashlytics().recordError(new Error(error));
  } else {
    errorShort = JSON.stringify(error);
    errorLong = JSON.stringify(error);

    //crashlytics().recordError(new Error(errorLong));
  }

  const report = await alert(
    t('errors.error_occurred'),
    errorShort,
    [
      {
        text: t('global.cancel'),
        resolve: false,
      },
      {
        text: t('errors.report_error'),
        resolve: true,
      },
    ],
    false,
  );

  if (report) {
    let body = '';
    body += t('errors.report_email_info') + '\r\n\r\n';
    body += `OS : ${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}\r\n`;
    body += `Model : ${DeviceInfo.getBrand()} / ${DeviceInfo.getModel()} / ${DeviceInfo.getDeviceId()}\r\n`;
    body += `App version : ${DeviceInfo.getVersion()}\r\n`;
    body += `Screen : ${navigationRef.getCurrentRoute().name}\r\n`;

    const auth = await authService.getAuth();

    if (auth && auth.userId) {
      body += `User id : ${auth.userId}\r\n`;
    }

    body += `\r\n${errorLong}`;

    const subject = '[SI-DAPP APP ERROR]';

    Linking.openURL(
      `mailto:${Config.SUPPORT_EMAIL}?subject=${subject}&body=${body}`,
    );
  }
};

export const checkAppUpdate = async () => {
  try {
    const res = await inAppUpdates.checkNeedsUpdate();

    if (res.shouldUpdate) {
      const updateOptions = {
        updateType: IAUUpdateKind.IMMEDIATE,
        title: t('app_update.alert_ios_title'),
        message: t('app_update.alert_ios_message'),
        buttonUpgradeText: t('app_update.alert_upgrade_btn'),
        buttonCancelText: t('app_update.alert_cancel_btn'),
      };

      await inAppUpdates.startUpdate(updateOptions);
    }
  } catch (e) {}
};

export default {sleep, showError, checkAppUpdate};
