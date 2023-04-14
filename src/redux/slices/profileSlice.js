import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    surname: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, { payload }) => {
            state.name = payload;
        },
        setSurname: (state, { payload }) => {
            state.surname = payload;
        },
    },
});

export const { setName, setSurname } = profileSlice.actions;
export default profileSlice.reducer;
