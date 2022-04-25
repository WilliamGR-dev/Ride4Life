import {navigationRef} from '../components/navigators/RootNavigator/RootNavigator';
import systemService from '../services/systemService';

const processConfirmAgendaOpened = async openedEvent => {
  const {notification, action} = openedEvent;
  const {event_id, type, confirm_number, notif_id, accept_delay, event_date} =
    notification.additionalData;

  while (!navigationRef.isReady()) {
    await systemService.sleep(200);
  }

  await systemService.sleep(500);

  navigationRef.navigate('InformPlanning', {
    eventId: event_id,
    response: action.actionId,
    type: type,
    confirmNumber: confirm_number,
    notifId: notif_id,
    allowDelay: accept_delay,
    eventDate: event_date,
  });
};

const processPharmaAvailableOpened = async openedEvent => {
  const {notification, action} = openedEvent;
  const {
    event_id,
    event_date,
    confirm_number,
    notif_id,
    notif_type,
    accept_delay,
    start_at,
    end_at,
    pharma_name,
  } = notification.additionalData;

  while (!navigationRef.isReady()) {
    await systemService.sleep(200);
  }

  await systemService.sleep(500);

  navigationRef.navigate('BookPlanning', {
    eventId: event_id,
    eventDate: event_date,
    response: action.actionId,
    confirmNumber: confirm_number,
    notifId: notif_id,
    notifType: notif_type,
    acceptDelay: accept_delay,
    startAt: start_at,
    endAt: end_at,
    pharmaName: pharma_name,
  });
};

const processChatMessageOpened = async openedEvent => {
  const {notification} = openedEvent;

  const {chatId} = notification.additionalData;

  while (!navigationRef.isReady()) {
    await systemService.sleep(200);
  }

  await systemService.sleep(500);

  navigationRef.navigate('ChatMessages', {chatId: Number(chatId)});
};

const processChatMessageReceived = async receivedEvent => {
  const {notification} = receivedEvent;
  const {chatId} = notification.additionalData;

  if (!navigationRef.isReady()) {
    return;
  }

  const currentRoute = navigationRef.getCurrentRoute();

  if (
    currentRoute.name === 'ChatMessages' &&
    currentRoute.params.chatId === Number(chatId)
  ) {
    receivedEvent.complete();
  } else {
    receivedEvent.complete(notification);
  }
};

export const processNotificationOpened = async openedEvent => {
  const {notification} = openedEvent;

  if (!notification.additionalData) {
    return;
  }

  switch (notification.additionalData.notif_type) {
    case 'confirm_agenda':
      processConfirmAgendaOpened(openedEvent);
      break;
    case 'pharma_available':
      processPharmaAvailableOpened(openedEvent);
      break;
    case 'chat_message':
      processChatMessageOpened(openedEvent);
      break;
  }
};

export const processNotificationReceived = async receivedEvent => {
  const {notification} = receivedEvent;

  if (!notification.additionalData) {
    return;
  }

  switch (notification.additionalData.notif_type) {
    case 'chat_message':
      processChatMessageReceived(receivedEvent);
      break;
    default:
      receivedEvent.complete(notification);
  }
};

export default {
  processNotificationOpened,
  processNotificationReceived,
};
