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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const [isSubmitting, preventMultipleSubmit] = usePreventMultipleSubmit();

  const submit = useCallback(async () => {
    dispatch('userAuth', {
      true: true,
    });
    console.log(store.getState().userAuth);
    // await preventMultipleSubmit(async () => {
    //   const res = await apiHelper.login(username, password);
    //
    //   if (res.status !== 200) {
    //     return setHasError(true);
    //   }
    //
    //   if (res.content.type !== 'sampler') {
    //     return alertHelper.informAccountNotSampler();
    //   }
    //
    //   await authService.login(res.content);
    // });
  }, [password, preventMultipleSubmit, username]);

  const linkToRegister = useCallback(() => {
    Linking.openURL(Config.REGISTER_URI);
  }, []);

  return {
    username,
    setUsername,
    password,
    setPassword,
    submit,
    hasError,
    linkToRegister,
    isSubmitting,
  };
};

export default useController;
