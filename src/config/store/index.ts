import { configureStore } from '@reduxjs/toolkit';

/** Slices */
import mainReducer from './slices/main';

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
