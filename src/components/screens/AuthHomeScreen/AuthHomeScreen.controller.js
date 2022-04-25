import {useCallback} from 'react';
import {useNavigator} from '../../../hooks';

const useController = ({}) => {
  const {goToAuthLogin, goToAuthRegister} = useNavigator();

  const loginSampler = useCallback(() => {
    goToAuthLogin();
  }, [goToAuthLogin]);

  const registerSampler = useCallback(() => {
    goToAuthRegister();
  }, [goToAuthRegister]);

  return {loginSampler, registerSampler};
};

export default useController;
