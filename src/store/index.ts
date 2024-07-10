import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './slices/sidebarSlice';
import dataSlice from './slices/dataSlice';

export const store = configureStore({
    reducer: {
        sidebarSlice,
        dataSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
