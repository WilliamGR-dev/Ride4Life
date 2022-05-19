import {useCallback, useState} from 'react';

const useController = ({}) => {
  const onTextLayout = useCallback(e => {}, []);

  return {
    onTextLayout,
  };
};

export default useController;
