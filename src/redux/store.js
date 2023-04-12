import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketsSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsSlice,
  },
});

export default store;
