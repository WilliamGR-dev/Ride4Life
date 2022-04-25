import {useState, useCallback} from 'react';

const useRefresh = (cb, deps) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    cb && (await cb());
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [refreshing, onRefresh];
};

export default useRefresh;
