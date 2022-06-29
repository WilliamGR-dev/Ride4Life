import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import {useRefresh} from '../../../hooks';

const useController = road_id => {
  const [data, setData] = useState(null);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getAllMembersRoads(road_id);

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

  return {
    data,
    refreshing,
    onRefresh,
  };
};

export default useController;
