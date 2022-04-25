import {info} from './loggerService';
import {AppState} from 'react-native';
// import sessionService from './sessionService';
import {store} from '../redux/store';

let prevAppState;

export const init = async () => {
  info('Init appStateService');

  prevAppState = AppState.currentState;

  AppState.addEventListener('change', nextAppState => {
    if (
      ['inactive', 'background'].includes(prevAppState) &&
      nextAppState === 'active'
    ) {
      onAppStateBackToForeground();
    }

    prevAppState = nextAppState;
  });
};

const onAppStateBackToForeground = async () => {
  info('[AppState] Back to foreground');

  const {userAuth} = store.getState();

  if (userAuth && userAuth.type === 'sampler') {
    // await sessionService.refreshCurrentSession();
  }
};

export default {
  init,
};
