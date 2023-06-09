import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRocket = createAsyncThunk('getRocket', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rocketList = [];
  data.forEach((item) => {
    rocketList.push({
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images[0],
      reserved: false,
    });
  });
  return rocketList;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelReserve(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocket.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
