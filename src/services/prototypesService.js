/* eslint-disable no-extend-native */

import {info} from './loggerService';

export const init = () => {
  info('Init prototypeService');

  Array.prototype.distinct = function () {
    const j = {};
    this.forEach(function (v) {
      j[`${v}::${typeof v}`] = v;
    });
    return Object.keys(j).map(function (v) {
      return j[v];
    });
  };

  Array.prototype.mix = function () {
    this.forEach(function (item) {
      item._r = Math.random();
    });

    this.sort(function (a, b) {
      return a._r - b._r;
    });

    this.forEach(function (item) {
      delete item._r;
    });

    return this;
  };

  Array.prototype.asyncForEach = async function (callback) {
    for (let index = 0; index < this.length; index++) {
      await callback(this[index], index, this);
    }
  };
};

export default {init};
