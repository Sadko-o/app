import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectGenders } from '../../redux/slices/genderSlice'
import '../styles/dropdown.sass'
import { Field } from 'formik';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const GenderDropdown = () => {
  const genders = useSelector(selectGenders);

  const options = useMemo(
    () =>
      genders.map((gender) => ({
        value: gender,
        label: gender,
        key: gender
      })),
    [genders]
  );
  
  return(
    <div className="input">
        <FormControl className="formControl">
            <InputLabel className="dropdown-label" shrink id="gender-select-label">Gender</InputLabel>
            <Field 
                as={Select} 
                labelId="gender-select-label" id="gender-select" name="gender"
                className="dropdown-field">
                    {options.map((option) => (
                        <MenuItem className="menu-options" value={option.value} key={option.key}>
                            {option.label}
                        </MenuItem>)
                        )
                    }
            </Field>
        </FormControl>
    </div>
        //  <Select options={options} onChange={onChange} value={value} className="dropdown "/>
    );
}

export default GenderDropdown;
