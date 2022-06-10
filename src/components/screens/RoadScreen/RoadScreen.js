import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {t} from 'react-i18nify';

import styles from './RoadScreen.styles';

import useController from './RoadScreen.controller';
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
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useNavigator} from '../../../hooks';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RoadScreen = props => {
  const {data, refreshing, onRefresh} = useController(props);
  const isFalling = useSelector(s => s.isFalling);
  const {goToMemberRoad} = useNavigator();

  if (!data) {
    return <LoadingIndicator full />;
  }

  const image = {
    uri: 'https://cdn.fishki.net/upload/post/2019/04/25/2958198/fc0435f65720593c4c14794cc42f2385.jpg',
  };

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <ImageBackground
        style={styles.cardBackGround}
        resizeMode="cover"
        source={image}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['rgba(255,255,255,0.1)', '#000000']}
          style={styles.linearGradient}>
          <BackPressButton color={'#ffffff'} />
          <Text style={styles.cardTitle}>{data.title}</Text>
          <View style={styles.roadInformation}>
            <Text style={styles.cardDistance}>
              <MaterialCommunityIcons name={'map-marker-distance'} size={20} />{' '}
              {data.distance} km
            </Text>

            <Text style={styles.cardDistance}>
              <Ionicons name={'time'} size={20} />{' '}
              {moment(data.date).format('DD/MM/YYYY hh:mm')}
            </Text>

            <Text style={styles.cardDistance}>
              <Fontisto name={'map'} color={'#ffffff'} /> Trajet
            </Text>
          </View>
          <Text style={styles.cardSubtitle}>
            <Feather name={'user'} size={20} />
            {data.owner}
          </Text>
          <Text style={styles.cardSubtitle}>{data.message}</Text>
          <View style={styles.entrantCountainer}>
            <View style={styles.entrants}>
              <TouchableOpacity
                style={styles.entrants}
                onPress={goToMemberRoad}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: 'https://archzine.fr/wp-content/uploads/2015/04/casque-moto-modulable-casque-original-horeur.jpg',
                  }}
                />
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: 'https://www.techno-car.fr/wp-content/uploads/2021/07/4%20Casque%20carbone.jpg',
                  }}
                />
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
                  }}
                />
                <View style={styles.otherEntrants}>
                  <Text style={styles.entrantsText}>+50</Text>
                </View>
              </TouchableOpacity>
            </View>
            <SubmitButton width={150} label={'Rejoindre'} road_trip />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default RoadScreen;
