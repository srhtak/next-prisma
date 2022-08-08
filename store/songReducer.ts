import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongState {
  songs: string[];
  activeSong?: string;
}

const initialState: SongState = {
  songs: [],
  activeSong: null,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeActiveSongs: (state, action: PayloadAction<string[]>) => {
      state.songs = action.payload;
    },
    changeActiveSong: (state, action: PayloadAction<object>) => {
      state.activeSong = { ...action.payload };
    },
  },
});

export const { changeActiveSong, changeActiveSongs } = songSlice.actions;

export default songSlice.reducer;
