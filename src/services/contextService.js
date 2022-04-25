const data = {};

export const set = (key, value) => {
  data[key] = value;
};

export const get = key => {
  return data[key];
};

export default {get, set};
