import {
  checkMultiple,
  requestMultiple,
  openSettings,
  RESULTS,
} from 'react-native-permissions';
import {t} from 'react-i18nify';

import {warn} from './loggerService';
import {
  informIncompatibleDevicePermissions,
  confirmBlockedPermissionsGoToSettings,
} from '../helpers/alertHelper';

export const checkAndRequestMultiplePermissions = async permissions => {
  let statusObject = await checkMultiple(permissions);
  let statusArray = Object.entries(statusObject);

  const unavailableArray = statusArray.filter(
    o => o[1] === RESULTS.UNAVAILABLE,
  );
  const deniedArray = statusArray.filter(o => o[1] === RESULTS.DENIED);
  const blockedArray = statusArray.filter(o => o[1] === RESULTS.BLOCKED);
  let grantedArray = statusArray.filter(
    o => o[1] === RESULTS.GRANTED || o[1] === RESULTS.LIMITED,
  );

  // -- si permissions incompatibles avec le device on informe l'utilisateur, il ne pourra pas utiliser cette fonctionnalité
  if (unavailableArray.length > 0) {
    const permissionsText = unavailableArray
      .map(o => `- ${t(`permissions.${sanitizePermission(o[0])}`)}`)
      .distinct()
      .join('\n');
    await informIncompatibleDevicePermissions(permissionsText);

    return false;
  }

  // -- si permissions bloquées (pas d'autorisation in-app possible) on lui propose d'aller dans les réglages
  if (blockedArray.length > 0) {
    const permissionsText = blockedArray
      .map(o => `- ${t(`permissions.${sanitizePermission(o[0])}`)}`)
      .distinct()
      .join('\n');

    if (await confirmBlockedPermissionsGoToSettings(permissionsText)) {
      await openAppSettings();
    }

    return false;
  }

  // -- si permissions non autorisées on fait la demande in-app et on met à jour les statuts
  if (deniedArray.length > 0) {
    const statusRequestObject = await requestMultiple(
      deniedArray.map(o => o[0]),
    );
    statusObject = {
      ...statusObject,
      ...statusRequestObject,
    };

    statusArray = Object.entries(statusObject);

    grantedArray = statusArray.filter(
      o => o[1] === RESULTS.GRANTED || o[1] === RESULTS.LIMITED,
    );
  }

  // -- toutes les permissions demandées sont autorisées
  if (grantedArray.length === permissions.length) {
    return true;
  }

  // -- certaines permissions sont restées en DENIED ou BLOCKED après la demande in-app
  return false;
};

export const checkMultiplePermissions = async permissions => {
  const statusObject = await checkMultiple(permissions);
  const statusArray = Object.entries(statusObject);

  const grantedArray = statusArray.filter(
    o => o[1] === RESULTS.GRANTED || o[1] === RESULTS.LIMITED,
  );

  return permissions.length === grantedArray.length;
};

export const openAppSettings = async () => {
  try {
    await openSettings();
  } catch (e) {
    warn('App settings cannot be open', e);
  }
};

export const sanitizePermission = permission => {
  return permission && permission.replace(/\./g, '_');
};

export default {
  checkAndRequestMultiplePermissions,
  checkMultiplePermissions,
  openAppSettings,
  sanitizePermission,
};
