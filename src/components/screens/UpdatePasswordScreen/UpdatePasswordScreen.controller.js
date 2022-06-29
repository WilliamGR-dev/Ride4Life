import {useCallback, useEffect, useState} from 'react';

import {useNavigator, useRefresh} from '../../../hooks';
import apiHelper from '../../../helpers/apiHelper';
import alertHelper from '../../../helpers/alertHelper';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const {goBack} = useNavigator();

  const loadNews = useCallback(async () => {
    return;
  }, []);

  const [refreshing, onRefresh] = useRefresh(async () => {
    await loadNews();
  }, [loadNews]);

  const submit = useCallback(async () => {
    const res = await apiHelper.changePassword(password);

    console.log(res.status);
    console.log(res.content);
    if (res.status !== 200) {
      return setHasError(true);
    }

    goBack();
  }, [goBack, password]);

  useEffect(() => {
    //-- Mount
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    refreshing,
    onRefresh,
    passwordConfirm,
    setPasswordConfirm,
    password,
    setPassword,
    submit,
  };
};

export default useController;
