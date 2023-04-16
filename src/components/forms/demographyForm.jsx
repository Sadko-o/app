import React from 'react'
import { Formik, Form } from 'formik'
import Gender from '../dropdown/genderDropdown'
import Country from '../dropdown/countryDropdown'
import City from '../dropdown/cityDropdown'
import '../styles/demographyForm.sass'

const demographyForm = () => {
  return (
    <div className='demographics'>
      <h2 className="header">Demographics</h2>
      
      <Formik
                initialValues={{
                    gender: '',
                    country: '',
                    city: ''
                }}>

        {(formikProps) => (
          <Form>
              <div className="form">
                  <Gender formikProps={formikProps}/>
                  <Country formikProps={formikProps}/>
                  <City formikProps={formikProps} /> 
              </div>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default demographyForm