import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './RoadsCard.styles';

import useController from './RoadsCard.controller';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigator} from '../../../hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = {
  uri: 'https://cdn.fishki.net/upload/post/2019/04/25/2958198/fc0435f65720593c4c14794cc42f2385.jpg',
};

const RoadsCard = props => {
  const {} = useController(props);

  const {goToRoadTrip} = useNavigator();

  return (
    <ImageBackground
      style={styles.cardBackGround}
      resizeMode="cover"
      source={image}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['rgba(255,255,255,0.1)', '#000000']}
        style={styles.linearGradient}>
        <Text style={styles.cardTitle}>{props.news.title}</Text>
        <Text style={styles.cardSubtitle}>{props.news.subtitle}</Text>
        <View style={styles.roadInformation}>
          <Text style={styles.cardDistance}>
            <MaterialCommunityIcons name={'map-marker-distance'} size={20} />{' '}
            {props.news.distance} km
          </Text>
          <Text style={styles.cardDistance}>
            <Ionicons name={'location-outline'} size={20} /> {props.news.city}
          </Text>
          <TouchableOpacity onPress={goToRoadTrip}>
            <Image
              style={styles.moreInformation}
              source={require('../../../assets/images/icons/right-arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default RoadsCard;
