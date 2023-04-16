import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        activeButton: 'Eng',
    },
    reducers: {
        switchLanguage: (state, action) => {
            state.activeButton = action.payload;
        },
    },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
