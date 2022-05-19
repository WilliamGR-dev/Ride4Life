import React from 'react';
import {t} from 'react-i18nify';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './NewsCard.styles';

import useController from './NewsCard.controller';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigator} from '../../../hooks';

const NewsCard = props => {
  const {isMore, setIsMore, numOfLines, onTextLayout, isLiked, setIsLiked} =
    useController(props);

  const {goToComment} = useNavigator();

  return (
    <View style={styles.card}>
      <View style={styles.owner}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
          }}
        />
        <View>
          <Text style={styles.username}>Spartan_25</Text>
          <Text style={styles.created_at}>il y a 2 heures</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/672504727199678486/976464626457927710/IMG-20220508-WA0013.jpg',
          }}
        />

        <View style={styles.actionCountainer}>
          {isLiked ? (
            <TouchableOpacity onPress={() => setIsLiked(false)}>
              <View style={styles.actionUnlike}>
                <AntDesign size={26} name={'heart'} color={'#ffffff'} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsLiked(true)}>
              <View style={styles.actionLike}>
                <AntDesign size={26} name={'heart'} />
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={goToComment}>
            <View style={styles.actionComment}>
              <Ionicons size={26} name={'chatbubble-outline'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={styles.cardText}
        onTextLayout={onTextLayout}
        numberOfLines={numOfLines === 0 || isMore ? undefined : 1}>
        {props.news.message}
      </Text>
      {numOfLines > 1 && (
        <HitSlopTouchableOpacity onPress={() => setIsMore(!isMore)}>
          <Text style={styles.cardPlus}>
            {t(isMore ? 'news_card.less' : 'news_card.more')}
          </Text>
        </HitSlopTouchableOpacity>
      )}
      <TouchableOpacity>
        <Text style={styles.created_at}>Voir les commentaires</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;
