import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import prototypesService from '../../services/prototypesService';
import loggerService from '../../services/loggerService';
import translateService from '../../services/translateService';
// import onesignalService from '../../../services/onesignalService';
import appStateService from '../../services/appStateService';
import socketService from '../../services/socketService';

const useController = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      prototypesService.init();
      loggerService.init();
      // await onesignalService.init();
      await translateService.init();
      await appStateService.init();
      socketService.init();

      setIsReady(true);

      SplashScreen.hide();
    };

    init();
  }, []);

  return {isReady};
};

export default useController;
