import React from 'react';
import {Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './BigHeaderBar.styles';

const BigHeaderBar = () => {
  const insets = useSafeAreaInsets();

  const headerBarHeight = 200 + insets.top;

  return (
    // <Image
    //     source={require('../../../assets/images/logos/logo-s.png')}
    //     style={styles.logo}
    // />

    <Text style={styles.logo}>Rider4Life</Text>
  );
};

export default BigHeaderBar;
