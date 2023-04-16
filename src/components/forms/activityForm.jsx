import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import '../styles/activityForm.sass';
import '../styles/profileForm.sass'
import { addActivity } from '../../redux/slices/activitySlice';


export const ActivityForm = () => {

    const dispatch = useDispatch();
    
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(addActivity(values));
        resetForm();
        alert("ADDED Activity" + JSON.stringify(values, null, 2));
    };
    
    return (
        <div className="activities">
            <h2 className="title">Activities</h2>
            <Formik
                initialValues={{
                    activityType: '',
                    tier: 'exceptional',
                    activityName: '',
                    description: '',
                }}
                onSubmit={handleSubmit}>

                {({ values, handleChange }) => (
                    <Form>
                        <div className="form">
                            <div className="section">
                                <p className="title">Activity type</p>
                                <div className="labels">
                                    <label className="label">
                                        <Field
                                            className="radioButton"
                                            type="radio"
                                            name="activityType"
                                            value="extracurriculars"
                                            checked={values.activityType === 'extracurriculars'}
                                            onChange={handleChange}
                                        />
                                        Extracurriculars
                                    </label>
                                    <label className="label">
                                        <Field
                                            className="radioButton"
                                            type="radio"
                                            name="activityType"
                                            value="honors"
                                            checked={values.activityType === 'honors'}
                                            onChange={handleChange}
                                        />
                                        Honors
                                    </label>
                                </div>
                            </div>

                            <div className="section">
                                <label className="title" htmlFor="tier-select">Tier</label>
                                <Field
                                    className="tierLine"
                                    as="select"
                                    id="tier-select"
                                    name="tier"
                                    value={values.tier}
                                    onChange={handleChange}
                                >
                                    <option className="tierOption" value="1">1 — Exceptional</option>
                                    <option className="tierOption" value="2">2 — Excellent</option>
                                    <option className="tierOption" value="3">3 — Good</option>
                                    <option className="tierOption" value="4">4 — Average</option>
                                    <option className="tierOption" value="5">5 — Below Average</option>
                                </Field>
                            </div>

                            <div className="section">
                                <label className="title" htmlFor="activity-name-input">Activity name</label>
                                <Field
                                    className="activityInput"
                                    id="activity-name-input"
                                    name="activityName"
                                    placeholder="Enter a name of activity"
                                />
                            </div>

                            <div className="section">
                                <label className="title" htmlFor="description-input">Description</label>
                                <Field
                                    className="descriptionInput"
                                    id="description-input"
                                    name="description"
                                    placeholder="Enter a description of activity"
                                />
                            </div>

                            <div className="button">
                                <button type="submit">
                                        <p className="buttonText">+ Add Activity</p> 
                                </button>
                             </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ActivityForm;
                            
