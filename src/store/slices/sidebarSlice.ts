import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type sidebarState = {
    title: string;
    open: boolean;
};

const initialState: sidebarState = {
    title: 'Audience Overview',
    open: true
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        handleTitle(state, { payload }) {
            state.title = payload;
        },
        toggleSidbar(state, { payload }) {
            if (payload === undefined) {
                state.open = !state.open;
            } else {
                state.open = payload;
            }
        }
    }
});

export const { handleTitle, toggleSidbar } = sidebarSlice.actions;

export const sidebarSelector = (state: RootState) => state.sidebarSlice;

export default sidebarSlice.reducer;
