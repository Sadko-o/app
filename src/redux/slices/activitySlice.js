import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        addActivity: (state, { payload }) => {
            state.push(payload);
        }
    }
});

export const { addActivity } = activitySlice.actions;

export default activitySlice.reducer;
