import {request} from '../services/axiosService';

export const createThread = async (topic, tags) => {
  const route = '/chats/threads';

  const body = {
    topic,
    tags,
  };

  return request('chat', 'post', true, route, null, body);
};

export const getChats = async (status, limit, offsetDate) => {
  const route = '/chats';

  const query = {
    status,
    limit,
    offsetDate,
  };

  return request('chat', 'get', true, route, query);
};

export const getChat = async chatId => {
  const route = '/chats/' + chatId;

  return request('chat', 'get', true, route);
};

export const getChatMessages = async (chatId, limit, offsetDate) => {
  const route = '/chats/' + chatId + '/messages';

  const query = {
    limit,
    offsetDate,
  };

  return request('chat', 'get', true, route, query);
};

export const addChatMessage = async (chatId, text) => {
  const route = '/chats/' + chatId + '/messages';

  const body = {
    text,
  };

  return request('chat', 'post', true, route, null, body);
};

export const addChatMessageImage = async (chatId, filePath) => {
  const route = '/chats/' + chatId + '/messages/image';

  const data = new FormData();

  data.append('file', {
    name: 'file',
    uri: filePath,
    type: 'image/jpeg',
  });

  return request('chat', 'post', true, route, null, data, true);
};

export const markChatAsSeen = async chatId => {
  const route = '/chats/' + chatId + '/seen';

  return request('chat', 'put', true, route, null);
};

export default {
  createThread,
  getChats,
  getChat,
  getChatMessages,
  addChatMessage,
  addChatMessageImage,
  markChatAsSeen,
};
