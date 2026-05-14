import { combineReducers } from 'redux';
import { authReducer } from './auth';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',  // Key for the root reducer
  storage,      // Storage engine to use (default is localStorage)
  // whitelist: ['auth'],  // Only persist the 'auth' reducer
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

