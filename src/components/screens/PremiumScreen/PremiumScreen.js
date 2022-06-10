import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {t} from 'react-i18nify';

import styles from './PremiumScreen.styles';

import useController from './PremiumScreen.controller';
import BackPressButton from '../../buttons/BackPressButton/BackPressButton';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import FallingModal from '../../modals/FallingModal/FallingModal';

const PremiumScreen = props => {
  const {passwordConfirm, setpasswordConfirm, password, setPassword} =
    useController(props);
  const isFalling = useSelector(s => s.isFalling);

  return (
    <View style={styles.screen}>
      {isFalling.status && <FallingModal />}
      <View style={styles.postHeader}>
        <BackPressButton color={'#ffffff'} />
        <Text style={styles.title}>Modifier mon mot de passe</Text>
        <TouchableOpacity style={styles.check}>
          <Feather name={'save'} size={32} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

export default PremiumScreen;
