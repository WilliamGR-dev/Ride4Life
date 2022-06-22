import {useCallback, useState} from 'react';
import apiHelper from '../../../helpers/apiHelper';
import {useNavigator, usePreventMultipleSubmit} from '../../../hooks';
import alertHelper from '../../../helpers/alertHelper';

const useController = ({}) => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const {goBack} = useNavigator();

  const [isSubmitting, preventMultipleSubmit] = usePreventMultipleSubmit();

  const submit = useCallback(async () => {
    await preventMultipleSubmit(async () => {
      const res = await apiHelper.register(
        firstname,
        lastname,
        username,
        email,
        password,
      );
      console.log(res.content);

      if (res.status !== 200) {
        return setHasError(true);
      }

      await alertHelper.informForgotPasswordMailSent();

      goBack();
    });
  }, [
    email,
    firstname,
    goBack,
    lastname,
    password,
    preventMultipleSubmit,
    username,
  ]);

  return {
    email,
    setEmail,
    firstname,
    setFirstName,
    lastname,
    setLastName,
    username,
    setUserName,
    password,
    setPassword,
    hasError,
    submit,
    isSubmitting,
  };
};

export default useController;
