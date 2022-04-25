// import OneSignal from 'react-native-onesignal';
import apiHelper from './apiHelper';
import loggerService from '../services/loggerService';
import {dispatch} from '../redux/store';

export const linkDevice = async () => {
  // const {userId} = await OneSignal.getDeviceState();
  // if (userId) {
  //   const res = await apiHelper.linkDevice(userId);
  //   if (res.status !== 201) {
  //     loggerService.warn('Device link error');
  //   } else {
  //     dispatch('device', {hasLinkedDevice: true});
  //   }
  // }
};

export const unlinkDevice = async () => {
  // const {userId} = await OneSignal.getDeviceState();
  // if (userId) {
  //   await apiHelper.unlinkDevice(userId);
  //   dispatch('device', {hasLinkedDevice: false});
  // }
};

export default {
  linkDevice,
  unlinkDevice,
};
