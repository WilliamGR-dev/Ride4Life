import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './ChatBubbleButton.styles';

import {useNavigator} from '../../../hooks';

const ChatBubbleButton = props => {
  //return null;

  const {goToChatHome} = useNavigator();

  return (
    <TouchableOpacity onPress={goToChatHome}>
      <Image
        source={require('../../../assets/images/icons/chat-bubble.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default ChatBubbleButton;
