import {io} from 'socket.io-client';

import Config from '../config';

import {info, warn} from './loggerService';
import authService from './authService';
import chatHelper from '../helpers/chatHelper';

let socket = null;

export const init = async () => {
  info('Init socketService');

  await connectClient();
};

const connectClient = async () => {
  const auth = await authService.authenticate();

  if (!auth || !auth.access) {
    return;
  }

  socket = io(Config.SOCKET_URL + '/app', {
    auth: {
      token: 'JWT ' + auth.access,
    },
  });

  listenEvents(socket);
};

const disconnectClient = () => {
  socket && socket.disconnect();
  socket = null;
};

const listenEvents = currentSocket => {
  currentSocket.on('connect_error', err => {
    warn('connect error', err.message);
  });

  currentSocket.on('disconnect', () => {
    info('[SOCKET] Client disconnected');
  });

  currentSocket.on('connect', () => {
    info('[SOCKET] Client connected');
  });

  currentSocket.on('dong', () => {
    info('[SOCKET] Dong received');
  });

  currentSocket.on('chat.message', data => {
    info('[SOCKET] Message received');

    chatHelper.appendMessages(data.chatId, [data.message]);
  });
};

export default {
  init,
  connectClient,
  disconnectClient,
};
