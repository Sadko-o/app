import React from 'react'
import '../styles/profileForm.sass'
import { useDispatch, useSelector } from 'react-redux';
import { setName, setSurname } from '../../redux/slices/profileSlice'

const ProfileForm = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.profile.name);
    const surname = useSelector((state) => state.profile.surname);

    const handleNameChange = (e) => {
        dispatch(setName(e.currentTarget.value));
        console.log('Name:', e.currentTarget.value)
    };

    const handleSurnameChange = (e) => {
        dispatch(setSurname(e.currentTarget.value));
        console.log('Surname:', e.currentTarget.value)
    };

  return (
    <div className="profile">
        <h2 className="title">Profile</h2>
        <form className="form">
            <div className="profileInput">
                <label>Name</label>
                <input className="input"
                    id="nameID"
                    placeholder="First Name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <div className="profileInput">
                <label className="label">Surname</label>
                <input className="input"
                    id="surnameID"
                    placeholder="Last Name"
                    name="surname"
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </div>
        </form>
    </div>
  )
}

export default ProfileForm
