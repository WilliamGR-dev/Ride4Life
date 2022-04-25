import React, {useRef} from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
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
    username,
    setUsername,
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
        <View style={styles.section}>
          <BackPressButton />
          <Text style={styles.sectionText}>{t('auth_login_screen.title')}</Text>
          <AuthTextInput
            testID="AuthLoginScreen.email"
            value={username}
            onChangeText={setUsername}
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
            disabled={!username || !password}
            isSubmitting={isSubmitting}
            text_outline
            dark
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
