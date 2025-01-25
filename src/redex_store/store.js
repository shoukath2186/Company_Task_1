import { configureStore } from '@reduxjs/toolkit';
import AuthStore from './slice_strore';

const store = configureStore({
  reducer: {
    User: AuthStore,
  },
});

export default store;
