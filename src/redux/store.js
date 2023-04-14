import { configureStore } from '@reduxjs/toolkit';
// import addActivityReducer from './slices/ProfileInfo/addActivitySlice';
import genderReducer from './slices/genderSlice';
// import countryOfResidenceReducer from './slices/ProfileInfo/demographics/countryOfResidenceSlice'
// import cityOfResidenceReducer from './slices/ProfileInfo/demographics/cityOfResidenceSlice'
import profileReducer from './slices/profileSlice'
// import languageReducer from './slices/Header/ToggleLanguage/ToggleLanguageSlice'

export const store = configureStore({
  reducer: {
    // addActivity: addActivityReducer,
    gender: genderReducer,
    // countryOfResidence: countryOfResidenceReducer,
    // cityOfResidence: cityOfResidenceReducer,
    profile: profileReducer,
    // language: languageReducer,
  },
});
