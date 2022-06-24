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
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';

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
    submit,
  } = useController(props);

  const isFalling = useSelector(s => s.isFalling);

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
          <View style={styles.cardBody}>
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
        <View style={styles.cardBody}>
          <View>
            <View style={styles.proofActionContainer}>
              <SubmitButton
                label={'Ajouter depuis la camera'}
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
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.postHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Nouvelle Publication</Text>
        <TouchableOpacity style={styles.check} onPress={submit}>
          <Feather name={'check'} size={32} color={'#ffffff'} />
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
