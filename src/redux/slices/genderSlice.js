import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gender: '',
};

const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {
        setGender: (state, { payload }) => {
            state.gender = payload;
        },
    },
});

export const { setGender } = genderSlice.actions;

export default genderSlice.reducer;
