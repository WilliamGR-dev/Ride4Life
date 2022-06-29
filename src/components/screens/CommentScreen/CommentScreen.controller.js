import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import {useRefresh} from '../../../hooks';
import {dispatch} from '../../../redux/store';

const useController = news_id => {
  const [data, setData] = useState(null);
  const [comment, setComment] = useState('');

  const loadNews = useCallback(async () => {
    const res = await apiHelper.getComments(news_id);
    if (res.status !== 200) {
      return;
    }

    setData(res.content);
    return;
  }, [news_id]);

  const [refreshing, onRefresh] = useRefresh(async () => {
    await loadNews();
  }, [loadNews]);

  const postComment = useCallback(async () => {
    const res = await apiHelper.postComment(comment, news_id);
    console.log(res);
    if (res.status !== 201) {
      return false;
    }

    loadNews();
    return res;
  }, [comment, loadNews, news_id]);

  useEffect(() => {
    //-- Mount
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    refreshing,
    onRefresh,
    postComment,
    comment,
    setComment,
  };
};

export default useController;
