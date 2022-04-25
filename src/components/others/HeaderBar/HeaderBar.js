import React from 'react';
import {View, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './HeaderBar.styles';

const HeaderBar = () => {
  const insets = useSafeAreaInsets();

  const headerBarHeight = 65 + insets.bottom;

  return (
    <View
      style={{
        ...styles.container,
        height: headerBarHeight,
      }}>
      <Image
        source={require('../../../assets/images/logos/logo-sidapp.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default HeaderBar;
