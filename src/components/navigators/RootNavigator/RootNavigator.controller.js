import {useEffect} from 'react';

import systemService from '../../../services/systemService';
import {useSelector} from 'react-redux';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';

const useController = ({}) => {
  const userAuth = useSelector(s => s.userAuth);
  const app = useSelector(s => s.app);
  const userProfile = useSelector(s => s.userProfile);

  useEffect(() => {
    systemService.checkAppUpdate();
  }, []);

  useEffect(() => {
    if (!userAuth || userAuth.type !== 'sampler') {
      return;
    }

    refreshUserProfileData();
  }, [userAuth]);
  return {userAuth, app, userProfile};
};

export default useController;
