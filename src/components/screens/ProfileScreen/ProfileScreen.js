import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './ProfileScreen.styles';

import {useNavigator} from '../../../hooks';

import useController from './ProfileScreen.controller';
import SubmitButton from "../../buttons/SubmitButton/SubmitButton";

const ProfileScreen = props => {
  const {logout} = useController(props);

  const {} = useNavigator();

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.profile}>
          <View style={styles.container_picture}>
            <Text style={styles.profile_picture}>W</Text>
          </View>
          <Text style={styles.name}>William</Text>
          <Text style={styles.join_date}>Joined 26 avr. 2022</Text>
        </View>
        <View style={styles.account_container}>
          <Text style={styles.title_container}>Account</Text>
          <Text style={styles.button_container}>Account Information</Text>
          <Text style={styles.button_container}>Change Password</Text>
        </View>
        <View style={styles.account_container}>
          <Text style={styles.title_container}>Settings</Text>
          <Text style={styles.button_container}>FAQ</Text>
          <Text style={styles.button_container}>Contact Us</Text>
          <Text style={styles.button_container}>Terms and Conditions</Text>
          <Text style={styles.button_container}>Privacy Policy</Text>
          <TouchableOpacity
              onPress={logout}>
            <Text style={styles.button_container}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text>Rider4Life</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
