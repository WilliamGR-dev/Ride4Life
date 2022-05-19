import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from '../TabNavigator/TabNavigator';

import UpdateProfileScreen from '../../screens/UpdateProfileScreen/UpdateProfileScreen';
import RoadScreen from '../../screens/RoadScreen/RoadScreen';

import useController from './AppNavigator.controller';
import CommentScreen from '../../screens/CommentScreen/CommentScreen';
import PostNewsScreen from '../../screens/PostNewsScreen/PostNewsScreen';
import PostRoadTripScreen from '../../screens/PostRoadTripScreen/PostRoadTripScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
  const {} = useController(props);

  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="RoadTrip" component={RoadScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="PostNews" component={PostNewsScreen} />
      <Stack.Screen name="PostRoadTrip" component={PostRoadTripScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
