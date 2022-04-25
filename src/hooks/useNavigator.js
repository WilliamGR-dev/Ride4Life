import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import Config from '../config';

const useNavigator = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const goToAuthLogin = useCallback(() => {
    navigation.navigate('AuthLogin', {});
  }, [navigation]);

  const goToAuthForgotPassword = useCallback(() => {
    navigation.navigate('AuthForgotPassword', {});
  }, [navigation]);

  const goToAuthRegister = useCallback(() => {
    navigation.navigate('AuthRegister', {});
  }, [navigation]);

  const goToSidepForm = useCallback(
    sidep => {
      navigation.navigate('SidepForm', {sidep});
    },
    [navigation],
  );

  const goToChatHome = useCallback(() => {
    navigation.navigate('ChatHome', {});
  }, [navigation]);

  const goToChatMessages = useCallback(
    chatId => {
      navigation.navigate('ChatMessages', {chatId: Number(chatId)});
    },
    [navigation],
  );

  const replaceToChatMessages = useCallback(
    chatId => {
      navigation.replace('ChatMessages', {chatId: Number(chatId)});
    },
    [navigation],
  );

  const goToChatCreation = useCallback(() => {
    navigation.navigate('ChatCreation');
  }, [navigation]);

  const goToSessionHistory = useCallback(() => {
    navigation.navigate('SessionHistory', {});
  }, [navigation]);

  const goToLegalTos = useCallback(() => {
    const props = {
      uri: Config.LEGAL_TOS_SAMPLER_URI,
    };
    navigation.navigate('WebDocument', props);
  }, [navigation]);

  const goToLegalPolicy = useCallback(() => {
    const props = {
      uri: Config.LEGAL_POLICY_SAMPLER_URI,
    };
    navigation.navigate('WebDocument', props);
  }, [navigation]);

  const goToLegalCompensation = useCallback(() => {
    const props = {
      uri: Config.LEGAL_COMPENSATION_URI,
    };
    navigation.navigate('WebDocument', props);
  }, [navigation]);

  const goToUpdatePassword = useCallback(() => {
    navigation.navigate('UpdatePassword', {});
  }, [navigation]);

  const goToInformPlanning = useCallback(() => {
    navigation.navigate('InformPlanning', {});
  }, [navigation]);

  const goToUpdateProfile = useCallback(
    data => {
      navigation.navigate('UpdateProfile', {data});
    },
    [navigation],
  );

  const goToBilling = useCallback(
    data => {
      navigation.navigate('Billing', {data});
    },
    [navigation],
  );

  const goToCloseSession = useCallback(
    data => {
      navigation.navigate('CloseSession', {data});
    },
    [navigation],
  );

  const goToOnboardingDocuments = useCallback(() => {
    navigation.navigate('OnboardingDocuments');
  }, [navigation]);

  const goToOnboardingTraining = useCallback(() => {
    navigation.navigate('OnboardingTraining');
  }, [navigation]);

  const goToUserDocuments = useCallback(() => {
    navigation.navigate('UserDocuments');
  }, [navigation]);

  const goToDockets = useCallback(() => {
    navigation.navigate('Dockets');
  }, [navigation]);

  const goToDocketProfile = useCallback(() => {
    navigation.navigate('DocketProfile');
  }, [navigation]);

  return {
    goBack,
    goToAuthLogin,
    goToAuthForgotPassword,
    goToAuthRegister,
    goToSidepForm,
    goToChatHome,
    goToChatMessages,
    replaceToChatMessages,
    goToChatCreation,
    goToSessionHistory,
    goToLegalTos,
    goToLegalPolicy,
    goToLegalCompensation,
    goToUpdatePassword,
    goToInformPlanning,
    goToUpdateProfile,
    goToBilling,
    goToCloseSession,
    goToOnboardingDocuments,
    goToOnboardingTraining,
    goToUserDocuments,
    goToDockets,
    goToDocketProfile,
  };
};

export default useNavigator;
