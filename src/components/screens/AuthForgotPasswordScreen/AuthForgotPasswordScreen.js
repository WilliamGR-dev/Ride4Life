import React from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
import {t} from 'react-i18nify';

import styles from './AuthForgotPasswordScreen.styles';

import useController from './AuthForgotPasswordScreen.controller';

import {useNavigator} from '../../../hooks';

import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';
import AuthTextInput from '../../inputs/AuthTextInput/AuthTextInput';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';

const AuthForgotPasswordScreen = props => {
  const {email, setEmail, hasError, submit, isSubmitting} =
    useController(props);

  const {goBack} = useNavigator();

  return (
    <ScrollView scrollEnabled={false} style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            {t('auth_forgot_password_screen.title')}
          </Text>
          <Text style={styles.infoText}>
            {t('auth_forgot_password_screen.info')}
          </Text>
          <AuthTextInput
            value={email}
            onChangeText={setEmail}
            label={t('auth_forgot_password_screen.email')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <SubmitButton
            onPress={submit}
            label={t('auth_forgot_password_screen.submit')}
            width={'80%'}
            disabled={!email}
            isSubmitting={isSubmitting}
          />
          <HitSlopTouchableOpacity onPress={goBack} style={styles.goBackBtn}>
            <Text style={styles.goBackText}>
              {t('auth_forgot_password_screen.go_back')}
            </Text>
          </HitSlopTouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthForgotPasswordScreen;
