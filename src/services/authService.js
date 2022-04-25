import {decode} from 'base-64';

import systemService from './systemService';

import apiHelper from '../helpers/apiHelper';
import deviceHelper from '../helpers/deviceHelper';

import {store, dispatch} from '../redux/store';
import socketService from './socketService';

let isTokenRefreshing = false;

export const getJwtExpireDate = jwtToken => {
  const [, payload] = jwtToken.split('.');
  const {exp} = JSON.parse(decode(payload));
  return new Date(exp * 1000);
};

export const getJwtUserId = jwtToken => {
  const [, payload] = jwtToken.split('.');
  const {user_id} = JSON.parse(decode(payload));
  return user_id;
};

export const getAuth = () => {
  return store.getState().userAuth;
};

export const setAuth = auth => {
  dispatch('userAuth', {
    ...auth,
    userId: getJwtUserId(auth.access),
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

  const currentDate = new Date();

  //-- si token access valide
  const accessExpDate = getJwtExpireDate(auth.access);
  if (currentDate < accessExpDate) {
    return auth;
  }

  //-- si token refresh non valide
  const refreshExpDate = getJwtExpireDate(auth.refresh);
  if (currentDate >= refreshExpDate) {
    await removeAuth();
    return null;
  }

  ///-- si token pas en cours de refresh
  if (!isTokenRefreshing) {
    return refreshAuth();
  }

  //-- tant que token en cours de refresh (par une autre requete)
  while (isTokenRefreshing) {
    await systemService.sleep(200);
  }

  return authenticate();
};

export const login = async auth => {
  setAuth(auth);

  await socketService.connectClient();
  await deviceHelper.linkDevice();
};

export const logout = async () => {
  await socketService.disconnectClient();
  await deviceHelper.unlinkDevice();

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
