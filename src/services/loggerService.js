import {LogBox} from 'react-native';

export const init = () => {
  info('Init loggerService');

  LogBox.ignoreLogs([
    'Overriding previous layout animation with new one before the first began',
    "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
    "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.",
    'Animated.event now requires a second argument for options',
    'Warning: componentWillMount has been renamed, and is not recommended for use.',
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'Cannot record touch end without a touch start.',
  ]);
};

export const info = (...m) => {
  console.info(...m);
  //crashlytics().log(`info - ${m[0]}`);
};

export const warn = (...m) => {
  console.warn(...m);
  //crashlytics().log(`warn - ${m[0]}`);
};

export const error = (...m) => {
  console.error(...m);
  //crashlytics().log(`error - ${m[0]}`);
};

export default {init, info, warn, error};
