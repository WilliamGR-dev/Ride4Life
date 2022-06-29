import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import Config from '../config';

const useNavigator = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const goToMap = useCallback(() => {
    navigation.navigate('Map', {});
  }, [navigation]);

  const goToMemberRoad = useCallback(
    road_id => {
      navigation.navigate('MemberRoad', {road_id: road_id});
    },
    [navigation],
  );

  const goToAuthLogin = useCallback(() => {
    navigation.navigate('AuthLogin', {});
  }, [navigation]);

  const goToAuthForgotPassword = useCallback(() => {
    navigation.navigate('AuthForgotPassword', {});
  }, [navigation]);

  const goToRoadTrip = useCallback(
    road_id => {
      navigation.navigate('RoadTrip', {road_id: road_id});
    },
    [navigation],
  );

  const goToComment = useCallback(
    id => {
      navigation.navigate('Comment', {news_id: id});
    },
    [navigation],
  );

  const goToPostNews = useCallback(() => {
    navigation.navigate('PostNews', {});
  }, [navigation]);

  const goToNew = useCallback(
    news_id => {
      navigation.navigate('New', {news_id: news_id});
    },
    [navigation],
  );

  const goToPremium = useCallback(() => {
    navigation.navigate('Premium', {});
  }, [navigation]);

  const PostRoadTrip = useCallback(() => {
    navigation.navigate('PostRoadTrip', {});
  }, [navigation]);

  const goToAuthRegister = useCallback(() => {
    navigation.navigate('AuthRegister', {});
  }, [navigation]);

  const goToProfileNews = useCallback(
    user_id => {
      navigation.navigate('ProfileNews', {user_id: user_id});
    },
    [navigation],
  );

  const goToUpdatePassword = useCallback(() => {
    navigation.navigate('UpdatePassword', {});
  }, [navigation]);

  const goToUpdateProfile = useCallback(() => {
    navigation.navigate('UpdateProfile');
  }, [navigation]);

  return {
    goBack,
    goToMap,
    goToMemberRoad,
    goToAuthLogin,
    goToAuthForgotPassword,
    goToRoadTrip,
    goToComment,
    goToPostNews,
    goToPremium,
    goToNew,
    goToProfileNews,
    PostRoadTrip,
    goToAuthRegister,
    goToUpdateProfile,
  };
};

export default useNavigator;
