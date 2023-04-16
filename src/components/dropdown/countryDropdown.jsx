import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/dropdown.sass';
import { fetchCountries } from '../../redux/slices/countrySlice';
import { setCountry } from '../../redux/slices/countrySlice';
import { Field } from 'formik';
// import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';


export const CountryDropdown = ({formikProps}) => {
    const country = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchCountries()); }, [dispatch]);
    
    const handleCountryChange = (e) => {
      formikProps.setFieldValue('country', e.target.value);
      dispatch(setCountry(e.target.value));
    };
    
    return (
      <div className="input">
        <FormControl className="formControl">
          <InputLabel className="label" shrink id="country-select-label">Country of Residence</InputLabel>
            <Field
              className="dropDown"
              as={Select}
              name="country"
              id="country-select"
              value={formikProps.values.country}
              onChange={handleCountryChange}
              labelId="country-select-label">
                    {country.countries.map((country) => (
                        <MenuItem key={country.id} value={country}>
                            {country.name}
                        </MenuItem>
                    ))}
                </Field>
          </FormControl>
      </div>
  );
}

export default CountryDropdown;