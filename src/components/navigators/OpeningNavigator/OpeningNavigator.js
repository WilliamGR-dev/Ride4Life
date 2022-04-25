import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OpeningScreen from '../../screens/OpeningScreen/OpeningScreen';

import useController from './OpeningNavigator.controller';

const Stack = createNativeStackNavigator();

const OpeningNavigator = props => {
  const {} = useController(props);

  return (
    <Stack.Navigator
      initialRouteName="Opening"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Opening" component={OpeningScreen} />
    </Stack.Navigator>
  );
};

export default OpeningNavigator;
