import apiHelper from './apiHelper';
import {dispatch} from '../redux/store';

export const refreshUserProfileData = async () => {
  const res = await apiHelper.getSamplerProfile();

  if (res.status !== 200) {
    return;
  }

  dispatch('userProfile', res.content);
};

export const refreshDockets = async () => {
  const resSent = await apiHelper.getDockets(true);
  const resPending = await apiHelper.getDockets(false);

  if (resSent.status !== 200 || resPending.status !== 200) {
    return;
  }

  dispatch('dockets', {
    sent: resSent.content.results,
    pending: resPending.content.results,
  });
};

export const refreshBills = async () => {
  const res = await apiHelper.getBills();

  if (res.status !== 200) {
    return;
  }

  dispatch('billing', {bills: res.content});
};

export default {
  refreshUserProfileData,
  refreshDockets,
  refreshBills,
};
