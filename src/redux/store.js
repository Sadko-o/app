import { configureStore } from '@reduxjs/toolkit';
import addActivityReducer from './slices/activitySlice'
import genderReducer from './slices/genderSlice';
import countryReducer from './slices/countrySlice'
import cityReducer from './slices/citySlice'
import profileReducer from './slices/profileSlice'
import languageReducer from './slices/languageSlice'

export const store = configureStore({
  reducer: {
    addActivity: addActivityReducer,
    gender: genderReducer,
    country: countryReducer,
    city: cityReducer,
    profile: profileReducer,
    language: languageReducer,
  },
});
