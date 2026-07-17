import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Experience {
  dateStart: number;
  dateEnd: number;
  companyName: string;
  position: string;
  projectStack: string[];
}

export interface Social {
  name: string;
  link: string;
}

export interface MainData {
  startExperience: number;
  socials: Social[] | null;
  experiences: Experience[] | null;
  skills: {
    frontend: string[];
    backend: string[];
  };
}

const initialState = {
  startExperience: -1,
  socials: null,
  experiences: null,
  skills: {
    backend: [],
    frontend: [],
  },
} as MainData;

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<MainData>) => (state = action.payload),
  },
});

export const { setInfo } = mainSlice.actions;

export default mainSlice.reducer;
