/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/shared/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import CounterScreen from './src/screens/counter';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CounterScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
