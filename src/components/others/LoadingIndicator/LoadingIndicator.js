import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './LoadingIndicator.styles';

const LoadingIndicator = props => {
  return (
    <View style={props.full ? styles.full_screen : undefined}>
      <ActivityIndicator
        size={props.small ? 'small' : 'large'}
        color="#1EB4C4"
      />
    </View>
  );
};

export default LoadingIndicator;
