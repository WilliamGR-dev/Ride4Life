import {decode} from 'base-64';

import apiHelper from '../helpers/apiHelper';

import {store, dispatch} from '../redux/store';

let isTokenRefreshing = false;

export const getJwtExpireDate = jwtToken => {
  const [, payload] = jwtToken.split('.');
  const {exp} = JSON.parse(decode(payload));
  return new Date(exp * 1000);
};

export const getAuth = () => {
  return store.getState().userAuth;
};

export const setAuth = auth => {
  dispatch('userAuth', {
    ...auth,
  });
};

export const removeAuth = () => {
  dispatch('userAuth', null);
};

export const authenticate = async () => {
  const auth = getAuth();

  if (!auth) {
    return null;
  }

  return authenticate();
};

export const login = async auth => {
  setAuth(auth);
};

export const logout = async () => {
  removeAuth();
};

export const refreshAuth = async () => {
  isTokenRefreshing = true;

  const auth = await getAuth();

  const res = await apiHelper.refreshAuth(auth.refresh);

  if (res && res.status === 200) {
    const newAuth = {refresh: auth.refresh, ...res.content};
    await setAuth(newAuth);
    isTokenRefreshing = false;
    return newAuth;
  }

  await removeAuth();
  isTokenRefreshing = false;
  return null;
};

export default {
  getJwtExpireDate,
  getAuth,
  setAuth,
  removeAuth,
  authenticate,
  login,
  logout,
  refreshAuth,
};
