import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './slices/sidebarSlice';

export const store = configureStore({
    reducer: {
        sidebarSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
