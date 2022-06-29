import {useCallback, useState} from 'react';

const useController = roads => {
  const onTextLayout = useCallback(e => {}, []);

  return {
    onTextLayout,
  };
};

export default useController;
