import {t} from 'react-i18nify';

import {alertOk, alertOkCancel} from '../services/alertService';

export const informIncompatibleDevicePermissions = async permissionsText => {
  return alertOk(
    t('permissions.incompatible_device_alert_title'),
    permissionsText +
      '\n\n' +
      t('permissions.incompatible_device_alert_message'),
  );
};

export const informPasswordUpdated = async () => {
  return alertOk(undefined, t('update_password_screen.alert_password_updated'));
};

export const informInvalidQrCode = async () => {
  return alertOk(undefined, t('session_scan_screen.alert_invalid_qr_code'));
};

export const informSidepWrongData = async () => {
  return alertOk(undefined, t('sidep_form_screen.alert_wrong_data'));
};

export const informSidepDuplicate = async () => {
  return alertOk(undefined, t('sidep_form_screen.alert_duplicate'));
};

export const informSidepAdded = async () => {
  return alertOk(undefined, t('sidep_form_screen.alert_sidep_added'));
};

export const informSidepUpdated = async () => {
  return alertOk(undefined, t('sidep_form_screen.alert_sidep_updated'));
};

export const informSidepTested = async () => {
  return alertOk(undefined, t('sidep_test_modal.alert_sidep_tested'));
};

export const informSidepInterpreted = async () => {
  return alertOk(
    undefined,
    t('sidep_diagnostic_modal.alert_sidep_interpreted'),
  );
};

export const informSidepBilled = async () => {
  return alertOk(undefined, t('sidep_bill_modal.alert_sidep_billed'));
};

export const informAccountNotSampler = async () => {
  return alertOk(undefined, t('auth_login_screen.alert_account_not_sampler'));
};

export const informCantRemoveAvailability = async () => {
  return alertOk(
    undefined,
    t('planning_availabilities_tab.alert_cant_remove_availability'),
  );
};

export const informPlanningEventInformed = async () => {
  return alertOk(
    undefined,
    t('inform_planning_screen.alert_planning_event_informed'),
  );
};

export const informProfileUpdated = async () => {
  return alertOk(undefined, t('update_profile_screen.alert_profile_updated'));
};

export const informCloseSessionProofRequired = async () => {
  return alertOk(undefined, t('close_session_screen.alert_proof_required'));
};

export const informSessionClosed = async () => {
  return alertOk(undefined, t('close_session_screen.alert_session_closed'));
};

export const informPlanningEventBooked = async () => {
  return alertOk(undefined, t('book_planning_screen.alert_event_booked'));
};

export const informPlanningEventNotBooked = async () => {
  return alertOk(undefined, t('book_planning_screen.alert_event_not_booked'));
};

export const informTrainingBooked = async () => {
  return alertOk(
    undefined,
    t('onboarding_training_screen.alert_training_booked'),
  );
};

export const informPlanningEventBookingNotAvailable = async () => {
  return alertOk(
    undefined,
    t('book_planning_screen.alert_event_not_available'),
  );
};

export const informOnboardingDocumentsMissing = async () => {
  return alertOk(
    undefined,
    t('onboarding_documents_screen.alert_documents_missing'),
  );
};

export const informOnboardingDocumentsUploaded = async () => {
  return alertOk(
    undefined,
    t('onboarding_documents_screen.alert_documents_uploaded'),
  );
};

export const informBillingDocumentUploaded = async () => {
  return alertOk(undefined, t('billing_upload_tab.alert_document_uploaded'));
};

export const informProfilePictureMissing = async () => {
  return alertOk(
    undefined,
    t('update_profile_screen.alert_profile_picture_missing'),
  );
};

export const informSamplerPictureNeeded = async () => {
  return alertOk(
    undefined,
    t('session_scan_screen.alert_sampler_picture_needed'),
  );
};

export const informSamplerPictureMissing = async () => {
  return alertOk(
    undefined,
    t('session_scan_screen.alert_sampler_picture_missing'),
  );
};

export const informOnboardingTrainingFull = async () => {
  return alertOk(
    undefined,
    t('onboarding_training_screen.alert_training_full'),
  );
};

export const informFileTooLarge = async () => {
  return alertOk(undefined, t('file_picker.alert_file_too_large'));
};

export const informForgotPasswordMailSent = async () => {
  return alertOk(undefined, t('auth_forgot_password_screen.alert_mail_sent'));
};

export const informDocketProfileUpdated = async () => {
  return alertOk(undefined, t('docket_profile_screen.alert_updated'));
};

export const informDocketSend = async () => {
  return alertOk(undefined, t('docket_card.alert_send'));
};

export const confirmBlockedPermissionsGoToSettings = async permissionsText => {
  return alertOkCancel(
    t('permissions.permission_blocked_alert_title'),
    permissionsText +
      '\n\n' +
      t('permissions.permission_blocked_alert_message'),
  );
};

export const confirmSidepAbsent = async () => {
  return alertOkCancel(
    t('global.confirmation'),
    t('sidep_card.confirm_sidep_absent'),
  );
};

export const confirmCancelSidepDiagnostic = async () => {
  return alertOkCancel(
    t('global.confirmation'),
    t('sidep_card.confirm_cancel_sidep_diagnostic'),
  );
};

export const confirmLogout = async () => {
  return alertOkCancel(
    t('global.confirmation'),
    t('profile_screen.alert_confirm_logout'),
  );
};

export const confirmHoldSession = async () => {
  return alertOkCancel(
    t('global.confirmation'),
    t('session_screen.alert_confirm_hold_session'),
  );
};

export const confirmStopSession = async numberOfPatients => {
  return alertOkCancel(
    t('global.confirmation'),
    t('session_screen.alert_confirm_stop_session', {
      count: numberOfPatients,
      value: numberOfPatients,
    }),
  );
};

export const confirmSidepDiagnostic = async resultText => {
  return alertOkCancel(
    t('global.confirmation'),
    t('sidep_diagnostic_modal.confirm_sidep_diagnostic', {value: resultText}),
  );
};

export const confirmDocketSend = async resultText => {
  return alertOkCancel(t('global.confirmation'), t('docket_card.confirm_send'));
};

export const confirmAgendaCancellation = async resultText => {
  return alertOkCancel(
    t('global.confirmation'),
    t('planning_agenda_card.confirm_cancel'),
  );
};

export const confirmCancelInformPlanning = async resultText => {
  return alertOkCancel(
    t('global.confirmation'),
    t('inform_planning_screen.confirm_cancel'),
  );
};

export default {
  informIncompatibleDevicePermissions,
  informPasswordUpdated,
  informInvalidQrCode,
  informSidepWrongData,
  informSidepDuplicate,
  informSidepAdded,
  informSidepUpdated,
  informSidepTested,
  informSidepInterpreted,
  informSidepBilled,
  informAccountNotSampler,
  informCantRemoveAvailability,
  informPlanningEventInformed,
  informProfileUpdated,
  informCloseSessionProofRequired,
  informSessionClosed,
  informPlanningEventBooked,
  informPlanningEventNotBooked,
  informPlanningEventBookingNotAvailable,
  informTrainingBooked,
  informOnboardingDocumentsMissing,
  informOnboardingDocumentsUploaded,
  informBillingDocumentUploaded,
  informProfilePictureMissing,
  informSamplerPictureNeeded,
  informSamplerPictureMissing,
  informOnboardingTrainingFull,
  informFileTooLarge,
  informForgotPasswordMailSent,
  informDocketProfileUpdated,
  informDocketSend,

  confirmBlockedPermissionsGoToSettings,
  confirmSidepAbsent,
  confirmCancelSidepDiagnostic,
  confirmLogout,
  confirmHoldSession,
  confirmStopSession,
  confirmSidepDiagnostic,
  confirmDocketSend,
  confirmAgendaCancellation,
  confirmCancelInformPlanning,
};
