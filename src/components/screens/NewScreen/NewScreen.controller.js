import {useCallback, useEffect, useState} from 'react';

import {useRefresh} from '../../../hooks';

const useController = ({}) => {
  const [data, setData] = useState(null);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const loadNews = useCallback(async () => {
    // const res = await apiHelper.getNews();

    // if (res.status !== 200) {
    //   return;
    // }

    // setData(res.content.results);
    setData({
      id: 1,
      title: null,
      message: 'Lorem ipsum dolor.',
      display_start: '2022-04-13T00:00:00+02:00',
      display_end: '2022-11-13T23:59:59+01:00',
      target: 'EVERYBODY',
      created_at: '2022-04-13T16:45:31.407225+02:00',
    });
    return;
  }, []);

  const onTextLayout = useCallback(
    e => {
      if (numOfLines === 0) {
        setNumOfLines(e.nativeEvent.lines.length);
      }
    },
    [numOfLines],
  );

  return {
    isMore,
    setIsMore,
    numOfLines,
    setNumOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    data,
  };
};

export default useController;
