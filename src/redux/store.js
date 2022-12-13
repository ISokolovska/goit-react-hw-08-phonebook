import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './auth/auth-slice';

const phonebookPersistConfig = {
  key: 'item',
  storage: storage,
  whitelist: ['filter'],
};

const phonebookPersistReducer = persistReducer(
  phonebookPersistConfig,
  contactsReducer
);

const store = configureStore({
  reducer: {
    contactsData: phonebookPersistReducer,
    userData: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
