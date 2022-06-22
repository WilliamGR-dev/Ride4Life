import {useEffect} from 'react';

import systemService from '../../../services/systemService';
import {useSelector} from 'react-redux';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';

const useController = ({}) => {
  const userAuth = useSelector(s => s.userAuth);
  const app = useSelector(s => s.app);
  const userProfile = useSelector(s => s.userProfile);
  const openFirstTime = useSelector(s => s.openFirstTime);

  useEffect(() => {
    systemService.checkAppUpdate();
  }, []);

  useEffect(() => {
    if (!userAuth) {
      return;
    }

    // refreshUserProfileData();
  }, [userAuth]);
  return {userAuth, app, userProfile, openFirstTime};
};

export default useController;
