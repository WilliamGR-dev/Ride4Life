import {useCallback, useEffect, useState} from 'react';

import {useRefresh} from '../../../hooks';
import apiHelper from '../../../helpers/apiHelper';

const useController = news_id => {
  const [data, setData] = useState(null);
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getNew(news_id);

    if (res.status !== 200) {
      return;
    }

    if (res.content.liked) {
      setIsLiked(true);
    }
    setData(res.content);
    return;
  }, [news_id]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

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
