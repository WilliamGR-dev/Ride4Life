import {useCallback, useEffect, useState} from 'react';

import {useRefresh} from '../../../hooks';
import {useSelector} from 'react-redux';
import imagePickerHelper from '../../../helpers/imagePickerHelper';
import {store} from '../../../redux/store';
import apiHelper from '../../../helpers/apiHelper';
import authService from '../../../services/authService';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState(null);
  const [hasError, setHasError] = useState(false);

  const userAuth = useSelector(s => s.userAuth);

  const loadNews = useCallback(async () => {
    console.log(userAuth);
    setUsername(userAuth.username);
    setFirstname(userAuth.firstname);
    setLastname(userAuth.lastname);
    setEmail(userAuth.email);
    setPicture(userAuth.profile_picture);

    return;
  }, [userAuth]);

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
    console.log(store.getState().userAuth);
    const res = await apiHelper.updateProfile(
      username,
      firstname,
      lastname,
      email,
      picture,
    );

    if (res.status !== 200) {
      return setHasError(true);
    }
  }, [email, firstname, lastname, picture, username]);

  const [refreshing, onRefresh] = useRefresh(async () => {
    await loadNews();
  }, [loadNews]);

  useEffect(() => {
    //-- Mount
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    refreshing,
    onRefresh,
    username,
    setUsername,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    addPicture,
    submit,
  };
};

export default useController;
