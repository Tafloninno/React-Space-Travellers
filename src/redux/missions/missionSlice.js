import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  missionList: [],
  reservedMissions: [],
  isLoading: true,
};

const API_URL = "https://api.spacexdata.com/v3/missions";

export const getMissions = createAsyncThunk(
  "missions/fetchMissions",
  async (thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("An Error occurred...!");
    }
  }
);

export const reserveMission = (mission) => ({
  type: "missions/addReservedMission",
  payload: mission,
});

export const leaveReservedMission = (mission) => ({
  type: "missions/leaveReservedMission",
  payload: mission,
});

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;
      const mission = state.missionList.find((mission) => mission.id === id);
      mission.reserved = true;
      state.reservedMissions.push(mission);
    },
    cancelMission: (state, action) => {
      const id = action.payload;
      state.reservedMissions = state.reservedMissions.filter(
        (mission) => mission.id !== id
      );
      const mission = state.missionList.find((mission) => mission.id === id);
      if (mission) {
        mission.reserved = false;
      }
    },

    addReservedMission: (state, action) => {
      const mission = action.payload;
      state.reservedMissions.push(mission);
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },

    [getMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missionList = action.payload;
    },

    [getMissions.rejected]: (state) => {
      state.isLoading = false;
    },

    [reserveMission.fulfilled]: (state, action) => {
      state.reservedMissions.push(action.payload);
    },
  },
});

export const { joinMission, cancelMission, addReservedMission } =
  missionSlice.actions;

export default missionSlice.reducer;
