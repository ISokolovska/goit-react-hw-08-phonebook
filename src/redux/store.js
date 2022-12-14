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
import { usersReducer } from './users/usersSlice';
import { toFormData } from 'axios';

// const phonebookPersistConfig = {
//   key: 'userData',
//   storage: storage,
//   whitelist: ['token'],
// };

// const authPersistReducer = persistReducer(phonebookPersistConfig, usersReducer);

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    userData: usersReducer,
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
