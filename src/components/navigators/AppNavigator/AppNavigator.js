import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from '../TabNavigator/TabNavigator';

import UpdateProfileScreen from '../../screens/UpdateProfileScreen/UpdateProfileScreen';

import useController from './AppNavigator.controller';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
  const {} = useController(props);

  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
