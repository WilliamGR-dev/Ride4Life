import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {t} from 'react-i18nify';

import styles from './AuthHomeScreen.styles';

import useController from './AuthHomeScreen.controller';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';

const image = {
  uri: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/273626040_1566103870438695_3692224413013186961_n.jpg?stp=dst-webp_e15_p480x480&cb=9ad74b5e-95d2b877&_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=O26PhYj2594AX9YZNc2&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=Mjc2OTE4MzU3Mjk0MzI5MTQ4NQ%3D%3D.2-ccb7-4&oh=00_AT_2vrJfOA2djnqjmzECE8jHR-E0ZVlozBRLklLdYA5QEg&oe=626CD39D&_nc_sid=83d603',
};

const AuthHomeScreen = props => {
  const {loginSampler, registerSampler} = useController(props);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.section}>
            <SubmitButton
              onPress={loginSampler}
              label={t('auth_home_screen.login')}
              width={'80%'}
              light
            />
            <SubmitButton
              onPress={registerSampler}
              label={t('auth_home_screen.register')}
              width={'80%'}
              light_outline
              text_outline
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthHomeScreen;
