import axios from 'axios';

import authService from './authService';
import loggerService from './loggerService';
import systemService from './systemService';

import Config from '../config';

const serviceBaseUrlMapping = {
  api: Config.API_URL,
};

export const request = async (
  service,
  method,
  needAuth,
  route,
  query,
  body,
  isMultipart = false,
) => {
  loggerService.info(
    '[AXIOS] (' + service + ') ' + method.toUpperCase() + ' ' + route,
  );

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const headers = {
    ...defaultHeaders,
  };

  if (needAuth) {
    const auth = await authService.authenticate();

    if (auth && auth.access) {
      headers.Authorization = `JWT ${auth.access}`;
    } else {
      return null;
    }
  }

  try {
    const res = await axios.request({
      method,
      baseURL: serviceBaseUrlMapping[service],
      url: route,
      headers,
      params: query,
      data: body,
      validateStatus: status => {
        return status < 500;
      },
    });

    console.log(res);

    if (res.status === 403 && ['user_not_found'].includes(res.data.code)) {
      await authService.removeAuth();

      return null;
    }

    return {
      status: res.status,
      content: res.data,
    };
  } catch (err) {
    if (err.response) {
      await systemService.showError(
        `${err.response.status} - ${JSON.stringify(err.response.data)}`,
      );
      return {
        status: err.response.status,
      };
    }
    await systemService.showError(err);

    return {};
  }
};

export default {request};
