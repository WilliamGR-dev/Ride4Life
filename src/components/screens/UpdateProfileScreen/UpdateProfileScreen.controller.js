import {useCallback, useEffect, useState} from 'react';

import {usePreventMultipleSubmit} from '../../../hooks';
import {useSelector} from 'react-redux';
import imagePickerHelper from '../../../helpers/imagePickerHelper';
import apiHelper from '../../../helpers/apiHelper';
import {dispatch} from '../../../redux/store';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState();
  const [hasError, setHasError] = useState(false);

  const userAuth = useSelector(s => s.userAuth);

  const [isSubmitting, preventMultipleSubmit] = usePreventMultipleSubmit();

  const addPicture = useCallback(async source => {
    const options = {
      includeBase64: true,
      compressImageMaxWidth: 1024,
      mediaType: 'photo',
      forceJpg: true,
    };

    try {
      const result = await imagePickerHelper.getImageFromPicker(
        options,
        source,
      );

      setPicture(result);
    } catch {}
  }, []);

  const submit = useCallback(async () => {
    const res = await apiHelper.updateProfileRider(
      username,
      firstname,
      lastname,
      email,
      picture,
    );
    console.log(res);
    if (res.status !== 200) {
      return setHasError(true);
    }
    dispatch('userAuth', {
      ...res.content,
    });
    return res;
  }, [email, firstname, lastname, picture, username]);

  useEffect(() => {
    //-- Mount
    setUsername(userAuth.username);
    setFirstname(userAuth.firstname);
    setLastname(userAuth.lastname);
    setEmail(userAuth.email);
    setPicture(userAuth.profile_picture);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  return {
    data,
    username,
    setUsername,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    addPicture,
    isSubmitting,
    submit,
  };
};

export default useController;
