import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import styles from './ProfileScreen.styles';

import {useNavigator} from '../../../hooks';

import useController from './ProfileScreen.controller';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FallingModal from '../../modals/FallingModal/FallingModal';
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = props => {
  const isFalling = useSelector(s => s.isFalling);
  const userAuth = useSelector(s => s.userAuth);
  const {logout} = useController(props);

  const {goToUpdateProfile, goToUpdatePassword, goToPremium} = useNavigator();

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.profile}>
        <View style={styles.container_picture}>
          <Image
            style={styles.profile_picture}
            source={{
              uri: userAuth.profile_picture,
            }}
          />
        </View>
        <Text style={styles.name}>{userAuth.username}</Text>
        <Text style={styles.join_date}>Rejoint le 26 avr. 2022</Text>
      </View>
      <View style={styles.account_container}>
        <TouchableOpacity
          style={styles.button_container}
          onPress={goToUpdateProfile}>
          <Feather size={26} name={'user'} color={'#ffffff'} />
          <Text style={styles.title_container}>Mon profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_container}
          onPress={goToUpdatePassword}>
          <FontAwesome size={26} name={'cog'} color={'#ffffff'} />
          <Text style={styles.title_container}>Modifier le mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_container}>
          <FontAwesome5 size={26} name={'money-bill-wave'} color={'#ffffff'} />
          <Text style={styles.title_container}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_container} onPress={logout}>
          <MaterialIcons size={26} name={'logout'} color={'#ffffff'} />
          <Text style={styles.title_container}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
