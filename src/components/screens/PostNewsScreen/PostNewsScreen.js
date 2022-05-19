import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {t} from 'react-i18nify';

import styles from './PostNewsScreen.styles';

import useController from './PostNewsScreen.controller';
import HeaderBar from '../../others/HeaderBar/HeaderBar';
import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';
import SuperFlatList from '../../extends/SuperFlatList/SuperFlatList';
import RoadsCard from '../../cards/RoadsCard/RoadsCard';
import LinearGradient from 'react-native-linear-gradient';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import NewsCard from '../../cards/NewsCard/NewsCard';
import CommentsCard from '../../cards/CommentsCard/CommentsCard';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import {RNCamera} from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostNewsScreen = props => {
  const {
    picture,
    deletePicture,
    addPicture,
    isMore,
    setIsMore,
    numOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    description,
    setDescription,
  } = useController(props);

  const renderImagePicker = () => {
    if (picture) {
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
            <View style={styles.proofImageContainer}>
              <Image source={{uri: picture.path}} style={styles.picture} />
              <TouchableOpacity onPress={deletePicture} style={styles.cancel}>
                <FontAwesome name={'close'} size={20} />
              </TouchableOpacity>
            </View>

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

              <TouchableOpacity>
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
            {description}
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
    }

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
          <View style={styles.proofActionContainer}>
            <SubmitButton
              label={t('close_session_screen.from_camera')}
              onPress={() => addPicture('camera')}
              light
            />
            <SubmitButton
              label={'Ajouter depuis la galerie'}
              onPress={() => addPicture('gallery')}
              light
            />
          </View>
        </View>
        <Text
          style={styles.cardText}
          onTextLayout={onTextLayout}
          numberOfLines={numOfLines === 0 || isMore ? undefined : 1}>
          {description}
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

  return (
    <View style={styles.screen}>
      <View style={styles.postHeader}>
        <BackPressButton />
        <Text style={styles.title}>Nouvelle Publication</Text>
        <TouchableOpacity style={styles.check}>
          <Feather name={'check'} size={32} />
        </TouchableOpacity>
      </View>
      {renderImagePicker()}
      <TextInput
        placeholder={'Ajoutez une légende...'}
        value={description}
        onChangeText={setDescription}
      />
    </View>
  );
};

export default PostNewsScreen;
