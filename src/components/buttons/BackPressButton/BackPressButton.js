import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './BackPressButton.styles';

import {useNavigator} from '../../../hooks';
import HitSlopTouchableOpacity from '../../extends/HitSlopTouchableOpacity/HitSlopTouchableOpacity';

const BackPressButton = props => {
  const {goBack} = useNavigator();

  return (
    <HitSlopTouchableOpacity onPress={goBack} style={styles.container}>
      <MaterialIcons name={'arrow-back'} size={40} />
    </HitSlopTouchableOpacity>
  );
};

export default BackPressButton;
