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

export const forgottenPassword = async email => {
  const route = '/recoverypassword';

  const body = {
    email,
  };

  return request('api', 'post', false, route, null, body);
};

export const changePassword = async password => {
  const route = '/password';

  const body = {
    password,
  };

  return request('api', 'patch', true, route, null, body);
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

export const getNew = async news_id => {
  const route = '/news/' + news_id;

  return request('api', 'get', true, route);
};

export const getNewsByUserId = async user_id => {
  const route = '/news/user/' + user_id;

  return request('api', 'get', true, route);
};

export const getComments = async news_id => {
  const route = '/comments/' + news_id;

  return request('api', 'get', true, route);
};

export const postComment = async (comment, id) => {
  const route = '/comments/' + id;

  const body = {
    text: comment,
  };

  return request('api', 'post', true, route, null, body);
};

export const likeNews = async id => {
  const route = '/likes/' + id;

  return request('api', 'post', true, route, null);
};

export const unlikeNews = async id => {
  const route = '/likes/' + id;

  return request('api', 'delete', true, route, null);
};

export const postRoads = async (
  title,
  description,
  short_description,
  roads,
) => {
  const route = '/roads';

  const body = {
    title: title,
    description: description,
    short_description: short_description,
    roads: roads,
  };

  return request('api', 'post', true, route, null, body);
};

export const getRoads = async () => {
  const route = '/roads';

  return request('api', 'get', true, route, null);
};

export const getRoad = async road_id => {
  const route = '/roads/' + road_id;

  return request('api', 'get', true, route, null);
};

export const joinRoad = async road_id => {
  const route = '/roads/members/' + road_id;

  return request('api', 'post', true, route, null);
};

export const getAllMembersRoads = async road_id => {
  const route = '/roads/members/' + road_id;

  return request('api', 'get', true, route, null);
};

export const quitRoad = async road_id => {
  const route = '/roads/members/' + road_id;

  return request('api', 'delete', true, route, null);
};

export default {
  login,
  register,
  forgottenPassword,
  changePassword,
  updateProfileRider,
  postNews,
  getNews,
  getNew,
  getNewsByUserId,
  getComments,
  postComment,
  likeNews,
  unlikeNews,
  postRoads,
  getRoads,
  getRoad,
  joinRoad,
  getAllMembersRoads,
  quitRoad,
};
