import {store, dispatch} from '../redux/store';
import {t} from 'react-i18nify';
import moment from 'moment';

import chatApiHelper from './chatApiHelper';

const appendMessages = async (chatId, messages) => {
  chatId = Number(chatId);

  const newMessages = [...(store.getState().chat['messages_' + chatId] || [])];

  let chat = store.getState().chat.chats.find(o => o.id === chatId);

  if (!chat) {
    const res = await chatApiHelper.getChat(chatId);

    if (res.status !== 200) {
      return;
    }

    chat = res.content.data;
  }

  messages
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(item => {
      if (newMessages.some(o => o.id === item.id)) {
        return;
      }

      if (chat.status === 'Pending' && item.type === 'Join') {
        chat.status = 'Active';
      }

      if (chat.status === 'Active' && item.type === 'Archive') {
        chat.status = 'Archived';
      }

      newMessages.push(item);
    });

  newMessages.sort((a, b) => new Date(b.date) - new Date(a.date));

  const state = {
    ['messages_' + chatId]: newMessages,
  };

  dispatch('chat', state);

  chat = {
    ...chat,
    lastMessage: newMessages[0],
    lastEventDate: newMessages[0].date,
  };

  appendChats([chat]);
};

const appendChats = chats => {
  const newChats = [...(store.getState().chat.chats || [])];

  chats.forEach(item => {
    const chatId = Number(item.id);

    let existingChat = {};
    const existingChatIndex = newChats.findIndex(o => o.id === chatId);

    if (existingChatIndex !== -1) {
      existingChat = newChats.splice(existingChatIndex, 1)[0];
    }

    const newChat = {...existingChat, ...item};
    newChat.id = Number(newChat.id);

    if (existingChat.lastEventDate && item.lastEventDate) {
      newChat.lastEventDate = moment
        .max(moment(existingChat.lastEventDate), moment(item.lastEventDate))
        .toISOString();
    }

    if (existingChat.lastSeenDate && item.lastSeenDate) {
      newChat.lastSeenDate = moment
        .max(moment(existingChat.lastSeenDate), moment(item.lastSeenDate))
        .toISOString();
    }

    //-- permet de filtrer les conversations
    newChat.name = newChat.topic || newChat.relativeUser.name;

    newChats.push(newChat);
  });

  newChats.sort((a, b) => {
    return new Date(b.lastEventDate) - new Date(a.lastEventDate);
  });

  const state = {
    chats: newChats,
  };

  dispatch('chat', state);
};

const getChatMessageText = message => {
  let {text, type, author} = message;

  switch (type) {
    case 'Create':
      text = author.isMe
        ? t('chat_helper.message_create_me')
        : t('chat_helper.message_create', {name: author.name});
      break;
    case 'MessageImage':
      text = author.isMe
        ? t('chat_helper.message_image_me')
        : t('chat_helper.message_image', {name: author.name});
      break;
    case 'Join':
      text = author.isMe
        ? t('chat_helper.join_me')
        : t('chat_helper.join', {name: author.name});
      break;
    case 'Archive':
      text = author.isMe
        ? t('chat_helper.archive_me')
        : t('chat_helper.archive', {name: author.name});
      break;
  }

  return text;
};

const markChatAsSeen = async chatId => {
  const res = await chatApiHelper.markChatAsSeen(chatId);

  if (res.status !== 201) {
    return;
  }

  const chat = {
    id: chatId,
    lastSeenDate: res.content.data.lastSeenDate,
  };

  appendChats([chat]);
};

export default {
  appendMessages,
  appendChats,
  getChatMessageText,
  markChatAsSeen,
};
