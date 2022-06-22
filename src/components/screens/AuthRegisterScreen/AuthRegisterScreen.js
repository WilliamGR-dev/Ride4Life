import React from 'react';
import {View, Text, Platform, ScrollView, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './AuthRegisterScreen.styles';

import useController from './AuthRegisterScreen.controller';

import AuthTextInput from '../../inputs/AuthTextInput/AuthTextInput';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';

const AuthRegisterScreen = props => {
  const {
    email,
    setEmail,
    firstname,
    setFirstName,
    lastname,
    setLastName,
    username,
    setUserName,
    password,
    setPassword,
    hasError,
    submit,
    isSubmitting,
  } = useController(props);

  return (
    <ScrollView scrollEnabled={false} style={styles.screen}>
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
          <Text style={styles.sectionText}>
            {t('auth_register_screen.title')}
          </Text>
          <AuthTextInput
            value={firstname}
            onChangeText={setFirstName}
            label={t('auth_register_screen.firstname')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <AuthTextInput
            value={lastname}
            onChangeText={setLastName}
            label={t('auth_register_screen.lastname')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <AuthTextInput
            value={username}
            onChangeText={setUserName}
            label={t('auth_register_screen.username')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <AuthTextInput
            value={email}
            onChangeText={setEmail}
            label={t('auth_register_screen.email')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <AuthTextInput
            value={password}
            onChangeText={setPassword}
            label={t('auth_register_screen.password')}
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            error={hasError}
          />
          <SubmitButton
            onPress={submit}
            label={t('auth_register_screen.submit')}
            width={'80%'}
            disabled={!email || !password}
            isSubmitting={isSubmitting}
            text_outline
            light
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthRegisterScreen;
