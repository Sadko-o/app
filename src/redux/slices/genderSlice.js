import { createSlice } from "@reduxjs/toolkit";

export const genderSlice = createSlice({
  name: "gender",
  initialState: {
    genders: ["male", "female", "other"],
    selectedGender: null,
  },
  reducers: {
    addGender: (state, { payload }) => {
      state.genders = [...state.genders, payload];
    },
    removeGender: (state, { payload }) => {
      state.genders = state.genders.filter((gender) => gender !== payload);
    },
    setGender: (state, { payload }) => {
      state.selectedGender = payload;
    },
  },
});

export const { setGender, addGender, removeGender } = genderSlice.actions;

export const selectGenders = (state) => state.gender.genders;

export const selectSelectedGender = (state) => state.gender.selectedGender;

export default genderSlice.reducer;
