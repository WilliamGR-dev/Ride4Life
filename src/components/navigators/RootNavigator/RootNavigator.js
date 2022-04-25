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

export const navigationRef = createNavigationContainerRef();

const RootNavigator = props => {
  const {userAuth, app, userProfile} = useController(props);

  let NavComponent;
  let navComponentProps;

  // if (app && !app.isIntroScreenShowed) {
  //   NavComponent = IntroScreen;
  // } else if (!userAuth) {
  //   NavComponent = AuthNavigator;
  // } else if (!userProfile) {
  //   NavComponent = LoadingIndicator;
  //   navComponentProps = {full: true};
  // } else if (!userProfile.validated_documents || !userProfile.done_training) {
  //   NavComponent = OnboardingNavigator;
  // } else if (
  //   !userProfile.user ||
  //   !userProfile.user.first_name ||
  //   !userProfile.user.last_name ||
  //   !userProfile.address ||
  //   !userProfile.phone ||
  //   !userProfile.city ||
  //   !userProfile.profile_picture
  // ) {
  //   NavComponent = UpdateProfileScreen;
  //   navComponentProps = {outsideNavigator: true};
  //   // } else if (!userProfile.has_accepted_contract_rescission) {
  //   //   NavComponent = OpeningNavigator;
  // } else {
  //   NavComponent = AppNavigator;
  // }

  NavComponent = AuthNavigator;

  return (
    <NavigationContainer ref={navigationRef}>
      <NavComponent {...navComponentProps} />
    </NavigationContainer>
  );
};

export default RootNavigator;
