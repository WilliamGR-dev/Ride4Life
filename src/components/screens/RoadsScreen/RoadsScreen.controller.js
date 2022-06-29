import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import {useRefresh} from '../../../hooks';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getRoads();

    if (res.status !== 200) {
      return;
    }

    console.log(res.content);

    setData(res.content);
    return;
  }, []);

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
    showFilterModal,
    setShowFilterModal,
  };
};

export default useController;
