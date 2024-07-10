import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { myHeaders, payload } from '@/data/apiHeaders';

type dataState = {
    chartData: [];
    isLoading: boolean;
    error: boolean;
};

const initialState: dataState = {
    chartData: [],
    isLoading: false,
    error: false
};

export const fetchChartData = createAsyncThunk('fetchData', async () => {
    const response = await fetch('https://api.livecoinwatch.com/coins/single/history', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload)
    });
    const cData = await response.json();
    return cData;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChartData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchChartData.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.chartData = [...payload['history']];
        });
        builder.addCase(fetchChartData.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = true;
        });
    }
});

export const {} = dataSlice.actions;

export const dataSelector = (state: RootState) => state.dataSlice;

export default dataSlice.reducer;
