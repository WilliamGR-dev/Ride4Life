import React from 'react';
import {t} from 'react-i18nify';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './CommentsCard.styles';

import useController from './CommentsCard.controller';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigator} from '../../../hooks';

const CommentsCard = props => {
  const {isMore, setIsMore, numOfLines, onTextLayout, isLiked, setIsLiked} =
    useController(props);

  console.log(props);
  return (
    <View>
      <View style={styles.owner}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
          }}
        />
        <View style={styles.container}>
          <Text style={styles.username}>{props.comment.user_id}</Text>
          <Text style={styles.cardText}>{props.comment.text}</Text>
          <Text style={styles.created_at}>
            {moment.duration(props.comment.created_at).humanize()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsCard;
