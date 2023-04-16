// import axios from 'axios'
import React from 'react'

import ProfileForm from './forms/profileForm'
import DemographyForm from './forms/demographyForm'
import ActivitiesForm from './forms/activityForm'
// import { fetchCountries } from '../api/fetchAPI'

const profilePage = () => {

  return (
    <>
        <ProfileForm/>
        <DemographyForm/>
        <ActivitiesForm/>
        
    </>
  )
}

export default profilePage