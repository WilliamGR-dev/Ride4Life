import {useCallback, useEffect, useState} from 'react';
import {dispatch} from '../../../redux/store';
import apiHelper from '../../../helpers/apiHelper';

const useController = props => {
  const [isMore, setIsMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const onTextLayout = useCallback(
    e => {
      if (numOfLines === 0) {
        setNumOfLines(e.nativeEvent.lines.length);
      }
    },
    [numOfLines],
  );

  const likeNews = useCallback(
    async news_id => {
      const res = await apiHelper.likeNews(news_id);
      if (res.status !== 201) {
        return;
      }
      props.news.likes = props.news.likes + 1;
      return res;
    },
    [props.news],
  );
  const unlikeNews = useCallback(
    async news_id => {
      const res = await apiHelper.unlikeNews(news_id);
      if (res.status !== 204) {
        return;
      }
      props.news.likes = props.news.likes - 1;
      return res;
    },
    [props.news],
  );

  useEffect(() => {
    //-- Mount
    if (props.news.liked) {
      setIsLiked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isMore,
    setIsMore,
    numOfLines,
    setNumOfLines,
    onTextLayout,
    isLiked,
    setIsLiked,
    likeNews,
    unlikeNews,
  };
};

export default useController;
