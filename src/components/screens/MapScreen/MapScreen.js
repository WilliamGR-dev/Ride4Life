import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './MapScreen.styles';

import {useNavigator} from '../../../hooks';

import useController from './MapScreen.controller';

const MapScreen = props => {
  const {} = useController(props);

  const {} = useNavigator();

  return (
      <Text>Map</Text>
  );
};

export default MapScreen;
