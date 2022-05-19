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
        title: 'Route du 92100',
        subtitle: 'Plaine des fleurs',
        message: 'Lorem ipsum dolor.',
        distance: 50,
        display_start: '2022-04-13T00:00:00+02:00',
        display_end: '2022-11-13T23:59:59+01:00',
        target: 'EVERYBODY',
        city: 'Toulouse',
        created_at: '2022-04-13T16:45:31.407225+02:00',
      },
      {
        id: 2,
        title: 'Route du 75000',
        subtitle: 'Descente de montagne',
        distance: 100,
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum!',
        display_start: '2022-04-01T00:00:00+02:00',
        display_end: '2022-04-30T23:59:59+02:00',
        target: 'PHARMACIES',
        city: 'Paris',
        created_at: '2022-04-26T12:57:38.988157+02:00',
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
