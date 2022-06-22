import React, {useRef} from 'react';
import {View, Text, Platform, ScrollView, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './AuthLoginScreen.styles';

import useController from './AuthLoginScreen.controller';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AuthTextInput from '../../inputs/AuthTextInput/AuthTextInput';
import {useNavigator} from '../../../hooks';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';

const AuthLoginScreen = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    submit,
    hasError,
    isSubmitting,
  } = useController(props);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const {goToAuthForgotPassword} = useNavigator();

  return (
    <ScrollView
      scrollEnabled={false}
      style={styles.screen}
      testID="AuthLoginScreen">
      <View style={styles.container}>
        <View style={styles.goBackBtn}>
          <BackPressButton color={'#ffffff'} />
          <Image
            source={{
              uri: 'https://cdn.discordapp.com/attachments/672504727199678486/986721250028163112/unknown.png',
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>{t('auth_login_screen.title')}</Text>
          <AuthTextInput
            testID="AuthLoginScreen.email"
            value={email}
            onChangeText={setEmail}
            label={t('auth_login_screen.email')}
            style={styles.input}
            error={hasError}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            returnKeyType={'next'}
            inputRef={usernameInputRef}
            onSubmitEditing={() => passwordInputRef?.current?.focus()}
          />
          <AuthTextInput
            testID="AuthLoginScreen.password"
            value={password}
            onChangeText={setPassword}
            label={t('auth_login_screen.password')}
            style={styles.input}
            error={hasError}
            secureTextEntry
            autoCapitalize={'none'}
            autoCorrect={false}
            inputRef={passwordInputRef}
          />
          <SubmitButton
            testID="AuthLoginScreen.submit"
            onPress={submit}
            label={t('auth_login_screen.submit')}
            width={'80%'}
            disabled={!email || !password}
            isSubmitting={isSubmitting}
            text_outline
            light
          />
          <HitSlopTouchableOpacity
            onPress={goToAuthForgotPassword}
            style={styles.forgotPasswordBtn}>
            <Text style={styles.forgotPasswordText}>
              {t('auth_login_screen.forgot_password')}
            </Text>
          </HitSlopTouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthLoginScreen;
