import React from 'react';
import {View, Text} from 'react-native';
import {useIsConnected} from 'react-native-offline';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {t} from 'react-i18nify';

import styles from './NetworkAlert.styles';

const NetworkAlert = () => {
  const isConnected = useIsConnected();
  const insets = useSafeAreaInsets();

  if (isConnected !== false) {
    return null;
  }

  return (
    <View
      style={{
        paddingTop: insets.top,
        ...styles.container,
      }}>
      <Text style={styles.text}>{t('network_alert.text')}</Text>
    </View>
  );
};

export default NetworkAlert;
