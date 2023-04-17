import React, { useEffect } from 'react';
import { Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/dropdown.sass';
import { fetchCities } from '../../redux/slices/citySlice';
import { setCity } from '../../redux/slices/citySlice';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
// import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';


const CityDropdown = ({ formikProps }) => {
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.city.cities);
    const selectedCountry = formikProps.values.country;

    useEffect(() => {
        if (selectedCountry) {
        dispatch(fetchCities(selectedCountry));
        }
    }, [dispatch, selectedCountry]);

  const { setFieldValue, values } = formikProps;

  const handleCityChange = (e) => {
    setFieldValue('city', e.target.value);
    dispatch(setCity(e.target.value));
  };


  return (
    <div className="input">
    <FormControl className="formControl">
      <InputLabel className="dropdown-label" shrink id="city-select-label">
        City of Residence
      </InputLabel>
      <Field
        className="dropdown-field"
        as={Select}
        name="city"
        id="city-select"
        value={values.city}
        onChange={handleCityChange}
        labelId="city-select-label"
      >
        cities.length === 0? (
            <MenuItem value="">
                <em>Choose Country</em>
                </MenuItem>
                ) : (
            {cities.map((city) => (
                <MenuItem key={city.id} value={city} className='menu-options'>
                    {city.name}
                </MenuItem>
            ))}
        )
      </Field>
    </FormControl>
    </div>
  );
};

export default CityDropdown;
