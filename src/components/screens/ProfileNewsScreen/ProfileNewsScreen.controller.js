import {useCallback, useEffect, useState} from 'react';

import authService from '../../../services/authService';
import alertHelper from '../../../helpers/alertHelper';
import {useSelector} from 'react-redux';
import apiHelper from '../../../helpers/apiHelper';

const useController = user_id => {
  const [data, setData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userProfile = useSelector(s => s.userProfile);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getNewsByUserId(user_id);
    if (res.status !== 200) {
      return;
    }

    setData(res.content);
    return;
  }, [user_id]);

  useEffect(() => {
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    data,
    isModalVisible,
    setIsModalVisible,
    userProfile,
    goToFromModal,
    logout,
  };
};

export default useController;
