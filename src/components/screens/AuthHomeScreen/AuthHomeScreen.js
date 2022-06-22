import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './AuthHomeScreen.styles';

import useController from './AuthHomeScreen.controller';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';

const image = {
  uri: 'https://cdn.discordapp.com/attachments/672504727199678486/986714730964062208/unknown.png',
};
const logo = {
  uri: 'https://cdn.discordapp.com/attachments/672504727199678486/986715689761005608/unknown.png',
};

const AuthHomeScreen = props => {
  const {loginSampler, registerSampler} = useController(props);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.screen}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.container}>
          <View style={styles.section}>
            <SubmitButton
              onPress={loginSampler}
              label={t('auth_home_screen.login')}
              width={'80%'}
              light
              text_outline
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
