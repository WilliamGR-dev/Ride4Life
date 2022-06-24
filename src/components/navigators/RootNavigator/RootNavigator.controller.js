import {useEffect} from 'react';

import systemService from '../../../services/systemService';
import {useSelector} from 'react-redux';

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
  }, [userAuth]);
  return {userAuth, app, userProfile, openFirstTime};
};

export default useController;
