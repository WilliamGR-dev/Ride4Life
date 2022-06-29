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
  const {
    isMore,
    setIsMore,
    numOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    likeNews,
    unlikeNews,
  } = useController(props);

  const {goToComment, goToProfileNews, goToNew} = useNavigator();

  return (
    <View style={styles.card}>
      <View style={styles.owner}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: props.news.author.profile_picture,
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => goToProfileNews(props.news.author.id)}>
            <Text style={styles.username}>{props.news.author.username}</Text>
          </TouchableOpacity>
          <Text style={styles.created_at}>
            {moment.duration(props.news.created_at, 'hours').humanize()}
          </Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View>
          <TouchableOpacity onPress={() => goToNew(props.news.id)}>
            <Image
              style={styles.picture}
              source={{
                uri: props.news.picture,
              }}
            />
          </TouchableOpacity>

          <View style={styles.actionCountainer}>
            {isLiked ? (
              <View style={styles.likeCountainer}>
                <TouchableOpacity
                  onPress={() => {
                    setIsLiked(false);
                    unlikeNews(props.news.id);
                  }}>
                  <View style={styles.actionUnlike}>
                    <AntDesign size={22} name={'hearto'} color={'#ffffff'} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.countLikes}>{props.news.likes}</Text>
              </View>
            ) : (
              <View style={styles.likeCountainer}>
                <TouchableOpacity
                  onPress={() => {
                    setIsLiked(true);
                    likeNews(props.news.id);
                  }}>
                  <View style={styles.actionLike}>
                    <AntDesign size={22} name={'hearto'} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.countLikes}>{props.news.likes}</Text>
              </View>
            )}

            <TouchableOpacity onPress={() => goToComment(props.news.id)}>
              <View style={styles.actionComment}>
                <Ionicons size={22} name={'chatbubble-outline'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={styles.cardText}
          onTextLayout={onTextLayout}
          numberOfLines={numOfLines === 0 || isMore ? undefined : 1}>
          {props.news.description}
        </Text>
        {numOfLines > 1 && (
          <HitSlopTouchableOpacity onPress={() => setIsMore(!isMore)}>
            <Text style={styles.cardPlus}>
              {t(isMore ? 'news_card.less' : 'news_card.more')}
            </Text>
          </HitSlopTouchableOpacity>
        )}
        <TouchableOpacity onPress={() => goToComment(props.news.id)}>
          <Text style={styles.created_at}>Voir les commentaires</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
