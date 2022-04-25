import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {NetworkProvider} from 'react-native-offline';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNavigator from '../navigators/RootNavigator/RootNavigator';

// import NetworkAlert from '../others/NetworkAlert/NetworkAlert';

import useController from './App.controller';

import styles from './App.styles';

import {store, persistor} from '../../redux/store';

const theme = {
  ...DefaultTheme,
  dark: true,
};

const App = () => {
  const {isReady} = useController();

  return !isReady ? null : (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaProvider>
        {/*<NetworkProvider>*/}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PaperProvider theme={theme}>
              <RootNavigator />
              {/*<NetworkAlert />*/}
            </PaperProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
