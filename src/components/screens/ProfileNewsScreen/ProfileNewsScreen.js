import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import styles from './ProfileNewsScreen.styles';

import {useNavigator} from '../../../hooks';

import useController from './ProfileNewsScreen.controller';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';

const ProfileNewsScreen = props => {
  const isFalling = useSelector(s => s.isFalling);

  const {goToNew, goToUpdatePassword} = useNavigator();

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.header}>
        <BackPressButton color={'white'} />
        <Text style={styles.name}>Spartan_25</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.container_picture}>
          <Image
            style={styles.profile_picture}
            source={{
              uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
            }}
          />
        </View>
        <View style={styles.stat}>
          <Text style={styles.stat_text}>3</Text>
          <Text style={styles.stat_text}>Publication</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.stat_text}>3</Text>
          <Text style={styles.stat_text}>Abonnés</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.stat_text}>3</Text>
          <Text style={styles.stat_text}>Like</Text>
        </View>
      </View>
      <View style={styles.account_container}>
        <TouchableOpacity style={styles.news} onPress={goToNew}>
          <Image
            style={styles.news_image}
            source={{
              uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.news} onPress={goToNew}>
          <Image
            style={styles.news_image}
            source={{
              uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.news} onPress={goToNew}>
          <Image
            style={styles.news_image}
            source={{
              uri: 'https://cafe-racer-only.com/IMG/jpg/casque-moto-vintage-ruroc-atlas-3.0-fujin-2.jpg',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileNewsScreen;
