import {useCallback, useEffect, useState} from 'react';

import authService from '../../../services/authService';
import alertHelper from '../../../helpers/alertHelper';
import {useSelector} from 'react-redux';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';

const useController = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userProfile = useSelector(s => s.userProfile);

  useEffect(() => {
    refreshUserProfileData();
  }, []);

  const goToFromModal = useCallback(goToScreen => {
    setIsModalVisible(false);
    setTimeout(() => {
      goToScreen();
    }, 200);
  }, []);

  const logout = useCallback(async () => {
    if (!(await alertHelper.confirmLogout())) {
      return;
    }

    setIsModalVisible(false);
    setTimeout(() => {
      authService.logout();
    }, 200);
  }, []);

  return {
    isModalVisible,
    setIsModalVisible,
    userProfile,
    goToFromModal,
    logout,
  };
};

export default useController;
