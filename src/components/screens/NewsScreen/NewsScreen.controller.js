import {useCallback, useEffect, useState} from 'react';

import {useRefresh} from '../../../hooks';
import apiHelper from '../../../helpers/apiHelper';

const useController = ({}) => {
  const [data, setData] = useState(null);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getNews();

    if (res.status !== 200) {
      return;
    }

    console.log(res.content);
    setData(res.content);

    // setData(res.content.results);
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
  };
};

export default useController;
