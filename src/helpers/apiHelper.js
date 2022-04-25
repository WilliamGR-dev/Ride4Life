import {request} from '../services/axiosService';

// -- Auth

export const login = async (username, password) => {
  const route = '/token/';

  const body = {
    username,
    password,
  };

  return request('api', 'post', false, route, null, body);
};

export const refreshAuth = async refresh => {
  const route = '/token/refresh/';

  const body = {
    refresh,
  };

  return request('api', 'post', false, route, null, body);
};

//-- Sessions

export const getSessions = async () => {
  const route = '/sessions/';

  return request('api', 'get', true, route);
};

export const getCurrentSession = async () => {
  const route = '/sessions/get_current_session/';

  return request('api', 'get', true, route);
};

export const holdSession = async sessionId => {
  const route = '/sessions/' + sessionId + '/hold/';

  return request('api', 'put', true, route);
};

export const unholdSession = async sessionId => {
  const route = '/sessions/' + sessionId + '/unhold/';

  return request('api', 'put', true, route);
};

export const createSession = async (mode, identifier, samplerPicture) => {
  const route = '/v2/sessions/open/';

  //-- mode can be daily_id, uuid or unique_id

  const body = {
    [mode]: identifier,
    sampler_picture: samplerPicture,
  };

  return request('api', 'post', true, route, null, body);
};

export const closeSession = async (
  sessionId,
  nbPerformedTests,
  nbPositiveTests,
  imageB64,
) => {
  const route = '/v2/sessions/' + sessionId + '/close/';

  const body = {
    nb_declared_tests: nbPerformedTests,
    nb_positive_declared_tests: nbPositiveTests,
    proof_image: imageB64,
  };

  return request('api', 'patch', true, route, null, body);
};

//-- Profile

export const getSamplerProfile = async () => {
  const route = '/v2/samplers/me/';

  return request('api', 'get', true, route);
};

export const changePassword = async (oldPassword, newPassword) => {
  const route = '/profil/change_password/';

  const body = {
    old_password: oldPassword,
    password: newPassword,
    password2: newPassword,
  };

  return request('api', 'put', true, route, null, body);
};

export const forgottenPassword = async email => {
  const route = '/v2/accounts/forgotten-password/';

  const body = {
    email: email,
  };

  return request('api', 'post', false, route, null, body);
};

export const linkDevice = async onesignalId => {
  const route = '/profil/device/';

  const body = {
    one_signal_id: onesignalId,
  };

  return request('api', 'post', true, route, null, body);
};

export const unlinkDevice = async onesignalId => {
  const route = '/profil/device/';

  const body = {
    one_signal_id: onesignalId,
  };

  return request('api', 'delete', true, route, null, body);
};

export const updateProfile = async (samplerId, firstName, lastName) => {
  const route = '/v2/users/me';

  const body = {
    first_name: firstName,
    last_name: lastName,
  };

  return request('api', 'patch', true, route, null, body);
};

export const updateSamplerProfile = async (
  samplerId,
  address,
  phoneNumber,
  city,
  isVehiculed,
  maxDistance,
  profilePictureB64,
) => {
  const route = '/v2/samplers/' + samplerId + '/';

  const body = {
    address: address,
    phone: phoneNumber,
    city: city,
    is_vehiculed: isVehiculed,
    max_distance_able_to_commute: maxDistance,
    profile_picture: profilePictureB64,
  };

  return request('api', 'patch', true, route, null, body);
};

export const updateSamplerDocketProfile = async (
  samplerId,
  signature,
  nir,
  cpamEmail,
  job,
) => {
  const route = '/v2/samplers/' + samplerId + '/';

  const body = {
    signature: signature,
    nir: nir,
    cpam_email: cpamEmail,
    docket_job: job,
  };

  return request('api', 'patch', true, route, null, body);
};

export const acceptContractRescission = async samplerId => {
  const route = '/v2/samplers/' + samplerId + '/';

  const body = {
    has_accepted_contract_rescission: true,
  };

  return request('api', 'patch', true, route, null, body);
};

export const getProfileCities = async () => {
  const route = '/cities';

  return request('api', 'get', true, route);
};

export const getOnboardingDocuments = async () => {
  const route = '/v2/documents/';

  return request('api', 'get', true, route);
};

export const uploadOnboardingDocument = async (
  type,
  fileName,
  fileMime,
  filePath,
) => {
  const route = '/v2/documents/';

  const data = new FormData();

  const mimeMapping = {
    'image/jpeg': 'Jpeg',
    'image/png': 'Jpeg',
    'application/pdf': 'pdf',
  };

  data.append('type', type);
  data.append('file_format', mimeMapping[fileMime]);
  data.append('file_name', fileName);
  data.append('file', {
    name: fileName,
    uri: filePath,
    type: fileMime,
  });

  return request('api', 'post', true, route, null, data, true);
};

export const uploadBillingDocument = async (fileName, fileMime, filePath) => {
  const route = '/v2/invoices/';

  const data = new FormData();

  const mimeMapping = {
    'image/jpeg': 'Jpeg',
    'image/png': 'Jpeg',
    'application/pdf': 'pdf',
  };

  data.append('file_format', mimeMapping[fileMime]);
  data.append('file_name', fileName);
  data.append('file', {
    name: fileName,
    uri: filePath,
    type: fileMime,
  });

  return request('api', 'post', true, route, null, data, true);
};

export const getBills = async () => {
  const route = '/v2/invoices/';

  return request('api', 'get', true, route);
};

//-- Sideps

export const getSideps = async () => {
  const route = '/v2/sideps/';

  return request('api', 'get', true, route);
};

export const createSidep = async (
  nir,
  firstname,
  lastname,
  sexe,
  email,
  phone,
  street,
  cp,
  city,
  country,
  birthdate,
  is_medic,
  accomodation,
  symptoms,
  travel,
  have_traveled,
) => {
  const route = '/sideps/';

  const body = {
    nir,
    firstname,
    lastname,
    sexe,
    email,
    phone,
    street,
    cp,
    city,
    country,
    birthdate,
    is_medic,
    accomodation,
    symptoms,
    travel,
    have_traveled,
  };

  return request('api', 'post', true, route, null, body);
};

export const updateSidep = async (
  sidepId,
  nir,
  firstname,
  lastname,
  sexe,
  email,
  phone,
  street,
  cp,
  city,
  country,
  birthdate,
  is_medic,
  accomodation,
  symptoms,
  travel,
  have_traveled,
) => {
  const route = '/sideps/' + sidepId + '/';

  const body = {
    nir,
    firstname,
    lastname,
    sexe,
    email,
    phone,
    street,
    cp,
    city,
    country,
    birthdate,
    is_medic,
    accomodation,
    symptoms,
    travel,
    have_traveled,
  };

  return request('api', 'put', true, route, null, body);
};

export const patchSidepMaterial = async (sidepId, material) => {
  const route = '/sideps/' + sidepId + '/';

  const body = {
    material,
  };

  return request('api', 'patch', true, route, null, body);
};

export const patchSidepPicture = async (sidepId, picture) => {
  const route = '/v2/sideps/' + sidepId + '/';

  const body = {
    picture,
  };

  return request('api', 'patch', true, route, null, body);
};

export const turnDoneSidep = async sidepId => {
  const route = '/sideps/' + sidepId + '/turn_done/';

  return request('api', 'put', true, route);
};

export const diagnosticSidep = async (sidepId, result) => {
  const route = '/v2/sideps/diagnostic/' + sidepId + '/';

  const body = {
    result,
  };

  return request('api', 'put', true, route, null, body);
};

export const billSidep = async (sidepId, method) => {
  const route = '/v2/sideps/' + sidepId + '/bill/';

  const body = {
    method,
  };

  return request('api', 'post', true, route, null, body);
};

export const deleteSidep = async sidepId => {
  const route = '/sideps/' + sidepId + '/';

  return request('api', 'delete', true, route);
};

export const cancelSidepDiagnostic = async sidepId => {
  const route = '/v2/sideps/diagnostic/' + sidepId + '/cancel/';

  return request('api', 'put', true, route);
};

//-- Material

export const getMaterialBrands = async () => {
  const route = '/v2/materials/brands/';

  return request('api', 'get', true, route);
};

export const getMaterials = async brand => {
  const route = '/v2/materials/';

  const query = {
    name: brand,
  };

  return request('api', 'get', true, route, query);
};

export const createMaterial = async (name, lot_number, expiration_date) => {
  const route = '/v2/materials/';

  const body = {
    name,
    lot_number,
    expiration_date,
    from_staff: false,
  };

  return request('api', 'post', true, route, null, body);
};

//-- Planning

export const getPlanningAvailabilities = async day => {
  const route = '/planning/availabilities/';

  const query = {
    day,
  };

  return request('api', 'get', true, route, query);
};

export const createPlanningAvailability = async (day, matin, apresmidi) => {
  const route = '/planning/availabilities/';

  const body = {
    day,
    matin,
    apresmidi,
  };

  return request('api', 'post', true, route, null, body);
};

export const updatePlanningAvailability = async (
  planningId,
  day,
  matin,
  apresmidi,
) => {
  const route = '/planning/availabilities/' + planningId + '/';

  const body = {
    day,
    matin,
    apresmidi,
  };

  return request('api', 'put', true, route, null, body);
};

export const getPlanning = async day => {
  const route = '/planning/';

  return request('api', 'get', true, route);
};

export const informPlanningEvent = async (
  eventId,
  response,
  delay,
  type,
  confirmNumber,
  notifId,
) => {
  const route = '/planning/inform/';

  const body = {
    event_id: eventId,
    response: response,
    delay: delay,
    type: type,
    confirm_number: confirmNumber,
    notif_id: notifId,
  };

  return request('api', 'post', true, route, null, body);
};

export const bookPlanningEvent = async (
  eventId,
  eventDate,
  response,
  confirmNumber,
  notifId,
  notifType,
  acceptDelay,
) => {
  const route = '/planning/book/';

  const body = {
    event_id: eventId,
    event_date: eventDate,
    response: response,
    confirm_number: confirmNumber,
    notif_id: notifId,
    notif_type: notifType,
    accept_delay: acceptDelay,
  };

  return request('api', 'post', true, route, null, body);
};

//-- Billing

export const getBilling = async (month, year) => {
  const route = '/v2/accounting/';

  const query = {
    month,
    year,
  };

  return request('api', 'get', true, route, query);
};

export const getTraining = async () => {
  const route = '/v2/training/';

  return request('api', 'get', true, route);
};

export const bookTraining = async (samplerId, training) => {
  const route = '/v2/samplers/me/book-training/';

  const body = {
    training,
  };

  return request('api', 'patch', true, route, null, body);
};

export const sendDocket = async docketId => {
  const route = '/v2/dockets/' + docketId + '/send/';

  return request('api', 'put', true, route);
};

export const getDockets = async isValidated => {
  const route = '/v2/dockets/';

  const query = {
    is_validated: isValidated,
  };

  return request('api', 'get', true, route, query);
};

//-- News
export const getNews = async () => {
  const route = '/v2/alerts/';

  const query = {
    ordering: '-id',
  };

  return request('api', 'get', true, route, query);
};

export default {
  login,
  refreshAuth,

  getSessions,
  getCurrentSession,
  holdSession,
  unholdSession,
  createSession,
  closeSession,

  getSamplerProfile,
  changePassword,
  forgottenPassword,
  linkDevice,
  unlinkDevice,
  updateProfile,
  updateSamplerProfile,
  updateSamplerDocketProfile,
  acceptContractRescission,
  getProfileCities,

  getOnboardingDocuments,
  uploadOnboardingDocument,

  uploadBillingDocument,
  getBills,

  getSideps,
  createSidep,
  updateSidep,
  patchSidepMaterial,
  patchSidepPicture,
  turnDoneSidep,
  diagnosticSidep,
  billSidep,
  deleteSidep,
  cancelSidepDiagnostic,

  getMaterialBrands,
  getMaterials,
  createMaterial,

  getPlanningAvailabilities,
  createPlanningAvailability,
  updatePlanningAvailability,
  getPlanning,
  informPlanningEvent,
  bookPlanningEvent,

  getBilling,

  getTraining,
  bookTraining,

  getDockets,
  sendDocket,

  getNews,
};
