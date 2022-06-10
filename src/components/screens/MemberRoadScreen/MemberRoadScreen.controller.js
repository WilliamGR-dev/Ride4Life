import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import {useRefresh} from '../../../hooks';

const useController = ({}) => {
  const [data, setData] = useState(null);

  const loadNews = useCallback(async () => {
    // const res = await apiHelper.getNews();

    // if (res.status !== 200) {
    //   return;
    // }

    // setData(res.content.results);
    setData([
      {
        id: 1,
        title: null,
      },
      {
        id: 2,
        title: null,
      },
      {
        id: 3,
        title: null,
      },
      {
        id: 4,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
      {
        id: 1,
        title: null,
      },
      {
        id: 2,
        title: null,
      },
      {
        id: 3,
        title: null,
      },
      {
        id: 4,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
      {
        id: 1,
        title: null,
      },
      {
        id: 2,
        title: null,
      },
      {
        id: 3,
        title: null,
      },
      {
        id: 4,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
      {
        id: 5,
        title: null,
      },
    ]);
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
