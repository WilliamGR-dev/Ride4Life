import {request} from '../services/axiosService';

// -- Auth

export const login = async (email, password) => {
  const route = '/login';

  const body = {
    email,
    password,
  };

  return request('api', 'post', false, route, null, body);
};

export const register = async (
  firstname,
  lastname,
  username,
  email,
  password,
) => {
  const route = '/register';

  const body = {
    firstname,
    lastname,
    username,
    email,
    password,
  };

  return request('api', 'post', false, route, null, body);
};

export const updateProfileRider = async (
  username,
  firstname,
  lastname,
  email,
  picture,
) => {
  const route = '/profile';

  const body = {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    profile_picture: picture === null ? undefined : picture.data,
  };

  console.log(body);

  return request('api', 'patch', true, route, null, body);
};

export const postNews = async (description, picture) => {
  const route = '/news';

  const body = {
    description: description,
    picture: picture === null ? undefined : picture.data,
  };

  return request('api', 'post', true, route, null, body);
};

export const getNews = async () => {
  const route = '/news';

  return request('api', 'get', true, route);
};

export default {
  login,
  register,
  updateProfileRider,
  postNews,
  getNews,
};
