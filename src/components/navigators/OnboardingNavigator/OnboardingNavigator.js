import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingHomeScreen from '../../screens/OnboardingHomeScreen/OnboardingHomeScreen';
import OnboardingDocumentsScreen from '../../screens/OnboardingDocumentsScreen/OnboardingDocumentsScreen';
import OnboardingTrainingScreen from '../../screens/OnboardingTrainingScreen/OnboardingTrainingScreen';
import UpdateProfileScreen from '../../screens/UpdateProfileScreen/UpdateProfileScreen';
import UpdatePasswordScreen from '../../screens/UpdatePasswordScreen/UpdatePasswordScreen';

import useController from './OnboardingNavigator.controller';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = props => {
  const {} = useController(props);

  return (
    <Stack.Navigator
      initialRouteName="OnboardingHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingHome" component={OnboardingHomeScreen} />
      <Stack.Screen
        name="OnboardingDocuments"
        component={OnboardingDocumentsScreen}
      />
      <Stack.Screen
        name="OnboardingTraining"
        component={OnboardingTrainingScreen}
      />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
