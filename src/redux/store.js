import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketsSlice from './rockets/rocketSlice';
import DragonSlice from './dragons/dragonslice';
const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsSlice,
    dragons: DragonSlice,
  },
});

export default store;
