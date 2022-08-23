import React from 'react';
import { StyleSheet } from 'react-native';
// import { Mixpanel } from 'mixpanel-react-native';

// Redux
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/redux/reducers/rootReducer';
import reduxPromise from 'redux-promise';

import AppRouter from './src/AppRouter';

// const mixpanelDev = '26c3773271a3720652f26fdfbb6800dd'
// const mixpanelProd = '8a3e26b22af3f2efefaea42a2383fa73'
// const mixpanel = new Mixpanel(window.env === 'prod' ? mixpanelProd : mixpanelDev)
// mixpanel.init();

export default function App() {

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
        blacklist: []
    }
    
    const pReducer = persistReducer(persistConfig, reducers);
    const middleware = applyMiddleware(reduxPromise);
    const theStore = middleware(createStore);
    const theStoreWithMiddlewareAndReducers = theStore(pReducer);
    const persistor = persistStore(theStoreWithMiddlewareAndReducers);

    return (
        <Provider store={theStoreWithMiddlewareAndReducers}>
            <PersistGate loading={<></>} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
