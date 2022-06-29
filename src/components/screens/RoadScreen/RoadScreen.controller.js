import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import {useRefresh} from '../../../hooks';
import {store} from '../../../redux/store';
import authService from '../../../services/authService';
import {Linking} from 'react-native';
import Config from '../../../config';

const useController = road_id => {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getRoad(road_id);

    if (res.status !== 200) {
      return;
    }

    setData(res.content);
    return;
  }, [road_id]);

  const [refreshing, onRefresh] = useRefresh(async () => {
    await loadNews();
  }, [loadNews]);

  useEffect(() => {
    //-- Mount
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = useCallback(async () => {
    const res = await apiHelper.joinRoad(road_id);

    if (res.status !== 201) {
      return setHasError(true);
    }
  }, [road_id]);
  return {
    data,
    refreshing,
    onRefresh,
    submit,
  };
};

export default useController;
