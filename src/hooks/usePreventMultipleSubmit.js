import {useState} from 'react';

import systemService from '../services/systemService';

const usePreventMultipleSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preventMultipleSubmit = async (fn, extraTime = 500) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    await fn();

    await systemService.sleep(extraTime);

    setIsSubmitting(false);
  };

  return [isSubmitting, preventMultipleSubmit];
};

export default usePreventMultipleSubmit;
