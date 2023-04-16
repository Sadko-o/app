import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {CITY_API_URL} from "../../api/api";

export const fetchCities = createAsyncThunk('cities/fetchCities', async (selectedCountry) => { 
    const countryId = selectedCountry.id;
    const citiesResponse =  await axios.get(CITY_API_URL, {
        params: {
            country: countryId,
        }
    })
    .then( (response) => response.data.results);
    return {cities: citiesResponse};
});

  
  const initialState =  {
      cities: [],
      loading: false,
      error: null,
      value: ''
  }
  
const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, {payload}) => {
            state.value = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.status = true;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = false;
                state.cities = action.payload.cities;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = false;
                state.error = action.error.message;
            });
    },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;