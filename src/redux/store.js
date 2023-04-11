import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
