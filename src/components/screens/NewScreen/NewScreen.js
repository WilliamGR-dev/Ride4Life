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

const NewScreen = props => {
  const isFalling = useSelector(s => s.isFalling);
  const {
    isMore,
    setIsMore,
    numOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    data,
  } = useController(props);

  const {goToComment, goToProfileNews} = useNavigator();

  return (
    <View style={styles.card}>
      <View style={styles.owner}>
        <BackPressButton color={'#ffffff'} />
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
          }}
        />
        <View>
          <TouchableOpacity onPress={goToProfileNews}>
            <Text style={styles.username}>Spartan_25</Text>
          </TouchableOpacity>
          <Text style={styles.created_at}>il y a 2 heures</Text>
        </View>
      </View>
      <View>
        <ImageBackground
          imageStyle={styles.picture}
          style={styles.picture}
          resizeMode="cover"
          source={{
            uri: 'https://cdn.discordapp.com/attachments/672504727199678486/976464626457927710/IMG-20220508-WA0013.jpg',
          }}>
          <LinearGradient
            start={{x: 0, y: 0.75}}
            end={{x: 0, y: 1}}
            colors={['rgba(255,255,255,0.1)', '#000000']}
            style={styles.linearGradient}>
            <View style={styles.actionCountainer}>
              {isLiked ? (
                <View style={styles.likeCountainer}>
                  <TouchableOpacity onPress={() => setIsLiked(false)}>
                    <View style={styles.actionUnlike}>
                      <AntDesign size={20} name={'hearto'} color={'#ffffff'} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.countLikes}>4,558</Text>
                </View>
              ) : (
                <View style={styles.likeCountainer}>
                  <TouchableOpacity onPress={() => setIsLiked(true)}>
                    <View style={styles.actionLike}>
                      <AntDesign size={20} name={'hearto'} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.countLikes}>4,558</Text>
                </View>
              )}

              <TouchableOpacity onPress={goToComment}>
                <View style={styles.actionComment}>
                  <Ionicons size={20} name={'chatbubble-outline'} />
                </View>
              </TouchableOpacity>

              <View style={styles.description}>
                <Text
                  style={styles.cardText}
                  onTextLayout={onTextLayout}
                  numberOfLines={numOfLines === 0 || isMore ? undefined : 1}>
                  {'azfazfazf'}
                </Text>
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
      </View>
    </View>
  );
};

export default NewScreen;
