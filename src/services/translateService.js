import {
  setTranslations,
  setLocale,
  setHandleMissingTranslation,
} from 'react-i18nify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import 'moment/locale/fr';
import 'dayjs/locale/fr';

import {info, warn} from './loggerService';
import contextService from './contextService';

let locales = {};

export const init = async () => {
  info('Init translateService');

  locales = {
    fr: require('../assets/locales/fr'),
  };

  setTranslations(locales);

  let currentLanguage = await AsyncStorage.getItem('app_language');

  if (!currentLanguage || !getAvailableLanguage().includes(currentLanguage)) {
    currentLanguage = 'fr';
  }

  contextService.set('app_language', currentLanguage);

  info(`Current app language : ${currentLanguage}`);

  setLocale(currentLanguage);
  moment.locale(currentLanguage);

  setHandleMissingTranslation(key => {
    warn(`Missing ${currentLanguage} translation : ${key}`);
  });
};

export const setAppLanguage = async languageTag => {
  contextService.set('app_language', languageTag);
  setLocale(languageTag);
  moment.locale(languageTag);
  await AsyncStorage.setItem('app_language', languageTag);
  info(`Set app language : ${languageTag}`);
};

export const getAvailableLanguage = () => {
  return Object.keys(locales);
};

export default {
  init,
  setAppLanguage,
  getAvailableLanguage,
};
