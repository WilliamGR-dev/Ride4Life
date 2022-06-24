import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import AuthNavigator from '../AuthNavigator/AuthNavigator';
// import AppNavigator from '../AppNavigator/AppNavigator';
// import OnboardingNavigator from '../OnboardingNavigator/OnboardingNavigator';

// import IntroScreen from '../../screens/IntroScreen/IntroScreen';
// import UpdateProfileScreen from '../../screens/UpdateProfileScreen/UpdateProfileScreen';
//
// import LoadingIndicator from '../../others/LoadingIndicator/LoadingIndicator';

import useController from './RootNavigator.controller';
import AppNavigator from '../AppNavigator/AppNavigator';

export const navigationRef = createNavigationContainerRef();

const RootNavigator = props => {
  const {userAuth, app, userProfile} = useController(props);

  let NavComponent;
  let navComponentProps;
  if (!userAuth) {
    NavComponent = AuthNavigator;
  } else if (!userAuth) {
    NavComponent = AuthNavigator;
  } else {
    NavComponent = AppNavigator;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <NavComponent {...navComponentProps} />
    </NavigationContainer>
  );
};

export default RootNavigator;
