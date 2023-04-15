import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDragons = createAsyncThunk('getDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await response.json();
  const dragonList = [];
  data.forEach((item) => {
    dragonList.push({
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images[0],
      reserved: false,
    });
  });
  return dragonList;
});

const DragonSlice = createSlice({
  name: 'dragon',
  initialState: [],
  reducers: {
    reserveDragon(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReserve(state, action) {
      return state.map((dragons) => {
        if (dragons.id !== action.payload) {
          return { ...dragons };
        }
        return { ...dragons, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveDragon, cancelReserve } = DragonSlice.actions;
export default DragonSlice.reducer;
