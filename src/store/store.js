import { createStore } from 'redux';
import persistedReducer from './reducers'; // Import the root reducer
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
// Create the Redux store with the root reducer
const store = createStore(
  persistedReducer,
  composeWithDevTools(),
  // Uncomment the line below if you are using Redux DevTools
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
