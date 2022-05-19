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
    setData({
      id: 1,
      title: 'Route du 92100',
      subtitle: 'Plaine des fleurs',
      owner: 'William Girard-Reydet',
      countRoadTrip: 20,
      date: '2022-04-13T12:30:00+02:00',
      message:
        'Aenean aliquet justo sed metus sagittis, non tristique lectus sodales. Aliquam at consequat leo, a interdum magna. Nam sed ultricies risus. Nulla eget fermentum ex.',
      distance: 50,
      display_start: '2022-04-13T00:00:00+02:00',
      display_end: '2022-11-13T23:59:59+01:00',
      target: 'EVERYBODY',
      created_at: '2022-04-13T16:45:31.407225+02:00',
    });
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
