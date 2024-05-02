import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDataService from '../../../service/UserService';
import { toast } from 'react-toastify';
import '../../../css/layout/pages/users/updateInfor.css';

const UpdateInfor = ({ user, navigate, setUser, formik }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Get current user info
        if (user && user.id) {
            axios.get(`http://localhost:8080/users/${user.id}`)
                .then(response => {
                    setUserInfo({
                        Fullname: response.data.Fullname,
                        phone: response.data.phone,
                        email: response.data.email,
                        address: response.data.address
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
        await UserDataService.updateUser(user.id, userInfo, navigate, setUser, formik, user);

    };


    // Render form when data is loaded
    return (
        <form onSubmit={handleSubmit} className='update-infor'>
            <label>
                <span>Full Name:</span>
                <input type="text" name="Fullname" value={userInfo.Fullname} onChange={handleChange} />
            </label>
            <label>
                <span>Phone:</span>
                <input type="text" name="phone" value={userInfo.phone} onChange={handleChange} />
            </label>
            <label>
                <span>Email:</span>
                <input type="text" name="email" value={userInfo.email} onChange={handleChange} />
            </label>
            <label>
                <span>Address:</span>
                <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
            </label>
            <input type="submit" value="Update" />
        </form>
    );
};

export default UpdateInfor;
