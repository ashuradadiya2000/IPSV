import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<>LOADING...</>}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  // </StrictMode>
);
