import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './NewScreen.styles';

import useController from './NewScreen.controller';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import NewsCard from '../../cards/NewsCard/NewsCard';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import {t} from 'react-i18nify';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RNCamera} from 'react-native-camera';
import {useNavigator} from '../../../hooks';
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const NewScreen = ({route, navigation}) => {
  const isFalling = useSelector(s => s.isFalling);
  const {
    isMore,
    setIsMore,
    numOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    data,
  } = useController(route.params.news_id);

  const {goToComment, goToProfileNews} = useNavigator();

  return (
    <View style={styles.card}>
      <View style={styles.owner}>
        <BackPressButton color={'#ffffff'} />
        {data && (
          <Image
            style={styles.profilePicture}
            source={{
              uri: data.author.profile_picture,
            }}
          />
        )}
        <View>
          <TouchableOpacity onPress={goToProfileNews}>
            {data && (
              <Text style={styles.username}>{data.author.username}</Text>
            )}
          </TouchableOpacity>
          {data && (
            <Text style={styles.created_at}>
              {moment.duration(data).humanize()}
            </Text>
          )}
        </View>
      </View>
      <View>
        {data && (
          <ImageBackground
            imageStyle={styles.picture}
            style={styles.picture}
            resizeMode="cover"
            source={{
              uri: data.picture,
            }}>
            <LinearGradient
              start={{x: 0, y: 0.75}}
              end={{x: 0, y: 1}}
              colors={['rgba(255,255,255,0.1)', '#000000']}
              style={styles.linearGradient}>
              <View style={styles.actionCountainer}>
                {isLiked ? (
                  <View style={styles.likeCountainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setIsLiked(false);
                      }}>
                      <View style={styles.actionUnlike}>
                        <AntDesign
                          size={20}
                          name={'hearto'}
                          color={'#ffffff'}
                        />
                      </View>
                    </TouchableOpacity>
                    {data && (
                      <Text style={styles.countLikes}>{data.likes}</Text>
                    )}
                  </View>
                ) : (
                  <View style={styles.likeCountainer}>
                    <TouchableOpacity onPress={() => setIsLiked(true)}>
                      <View style={styles.actionLike}>
                        <AntDesign size={20} name={'hearto'} />
                      </View>
                    </TouchableOpacity>
                    {data && (
                      <Text style={styles.countLikes}>{data.likes}</Text>
                    )}
                  </View>
                )}

                <TouchableOpacity onPress={() => goToComment(data.id)}>
                  <View style={styles.actionComment}>
                    <Ionicons size={20} name={'chatbubble-outline'} />
                  </View>
                </TouchableOpacity>

                <View style={styles.description}>
                  {data && (
                    <Text
                      style={styles.cardText}
                      onTextLayout={onTextLayout}
                      numberOfLines={
                        numOfLines === 0 || isMore ? undefined : 1
                      }>
                      {data.description}
                    </Text>
                  )}
                  {numOfLines > 1 && (
                    <HitSlopTouchableOpacity onPress={() => setIsMore(!isMore)}>
                      <Text style={styles.cardPlus}>
                        {t(isMore ? 'news_card.less' : 'news_card.more')}
                      </Text>
                    </HitSlopTouchableOpacity>
                  )}
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        )}
      </View>
    </View>
  );
};

export default NewScreen;
