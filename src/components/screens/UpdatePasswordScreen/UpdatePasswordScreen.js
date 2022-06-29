import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './UpdatePasswordScreen.styles';

import useController from './UpdatePasswordScreen.controller';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../buttons/SubmitButton/SubmitButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../inputs/FormTextInput/FormTextInput';
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';

const UpdateProfileScreen = props => {
  const {passwordConfirm, setPasswordConfirm, password, setPassword, submit} =
    useController(props);
  const isFalling = useSelector(s => s.isFalling);

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.postHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Modifier mon mot de passe</Text>
        <TouchableOpacity style={styles.check} onPress={() => submit()}>
          <Feather name={'save'} size={32} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      <FormTextInput
        style={styles.form}
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        placeholder="Mot de passe"
        label="Mot de passe"
      />
      <FormTextInput
        style={styles.form}
        value={passwordConfirm}
        onChangeText={value => {
          setPasswordConfirm(value);
        }}
        placeholder="Confirmation mot de passe"
        label="Confirmation mot de passe"
      />
    </View>
  );
};

export default UpdateProfileScreen;
