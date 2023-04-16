import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {COUNTRY_API_URL} from "../../api/api";

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    return axios
    .get(COUNTRY_API_URL)
    .then((response) => response.data.results)
})

  
const initialState = {
    loading: false,
    countries: [],
    error: null,
    value: ''
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountry: (state, {payload}) => {
            state.value = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = false;
                state.error = action.error.message;
            });
    },
});

export const { setCountry } = countrySlice.actions;

export default countrySlice.reducer;

