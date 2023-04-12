import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missionList: [],
  reservedMissions: [],
  isLoading: true,
};

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (thunkAPI) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('An Error occurred...!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('An Error occurred...!');
    }
  },
);

export const reserveMission = (mission) => ({
  type: 'missions/addReservedMission',
  payload: mission,
});

export const leaveReservedMission = (mission) => ({
  type: 'missions/leaveReservedMission',
  payload: mission,
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;
      const mission = state.missionList.find((mission) => mission.id === id);
      mission.reserved = true;
      state.reservedMissions.push(mission);
      return { ...state };
    },

    cancelMission: (state, action) => {
      const id = action.payload;
      const reservedMissions = state.reservedMissions.filter(
        (mission) => mission.id !== id,
      );
      const mission = state.missionList.find((mission) => mission.id === id);
      if (mission) {
        mission.reserved = false;
      }
      return { ...state, reservedMissions };
    },

    addReservedMission: (state, action) => {
      const mission = action.payload;
      return {
        ...state,
        reservedMissions: [...state.reservedMissions, mission],
      };
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => ({ ...state, isLoading: true }),

    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      missionList: action.payload,
    }),

    [getMissions.rejected]: (state) => ({ ...state, isLoading: false }),

    [reserveMission.fulfilled]: (state, action) => ({
      ...state,
      reservedMissions: [...state.reservedMissions, action.payload],
    }),
  },
});

export const { joinMission, cancelMission, addReservedMission } = missionSlice.actions;

export default missionSlice.reducer;
