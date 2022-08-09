import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Song {
  name: string;
}

export interface SongState {
  songs: string[];
  activeSong?: Song;
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
    changeActiveSong: (state, action: PayloadAction<Song>) => {
      state.activeSong = action.payload;
    },
  },
});

export const { changeActiveSong, changeActiveSongs } = songSlice.actions;

export default songSlice.reducer;
