import {useCallback, useState} from 'react';
import {Linking} from 'react-native';

import Config from '../../../config';

import {
  useDoubleBackPressExit,
  useNavigator,
  usePreventMultipleSubmit,
} from '../../../hooks';

import apiHelper from '../../../helpers/apiHelper';
import authService from '../../../services/authService';
import alertHelper from '../../../helpers/alertHelper';
import {dispatch, store} from '../../../redux/store';

const useController = ({}) => {
  useDoubleBackPressExit();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const [isSubmitting, preventMultipleSubmit] = usePreventMultipleSubmit();

  const submit = useCallback(async () => {
    console.log(store.getState().userAuth);
    await preventMultipleSubmit(async () => {
      const res = await apiHelper.login(email, password);

      if (res.status !== 200) {
        return setHasError(true);
      }

      await authService.login(res.content);
    });
  }, [password, preventMultipleSubmit, email]);

  const linkToRegister = useCallback(() => {
    Linking.openURL(Config.REGISTER_URI);
  }, []);

  return {
    email,
    setEmail,
    password,
    setPassword,
    submit,
    hasError,
    linkToRegister,
    isSubmitting,
  };
};

export default useController;
