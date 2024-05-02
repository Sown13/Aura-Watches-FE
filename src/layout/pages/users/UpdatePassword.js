import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDataService from '../../../service/UserService';
import { toast } from 'react-toastify';
import '../../../css/layout/pages/users/updatePassword.css';

const UpdatePassword = ({ user, navigate, setUser, formik }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Get current user info
        if (user && user.id) {
            axios.get(`http://localhost:8080/users/${user.id}`)
                .then(response => {
                    setUserInfo({
                        Password: response.data.password,

                    });
                })

                .catch(e => {
                    console.log(e);
                });
        }
    }, [user]);

    // If userInfo is null, data is still loading
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await UserDataService.updatePassword(user.id, userInfo.Password, navigate, setUser, formik, user);

    };


    // Render form when data is loaded
    return (
        <form onSubmit={handleSubmit} className='update-Password'>
            <label>
                Password:
                <input type="password" name="Password" value={userInfo.password} onChange={handleChange} />
            </label>
            <input type="submit" value="Update" />
        </form>
    );
};

export default UpdatePassword;