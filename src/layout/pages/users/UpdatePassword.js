import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserService from '../../../service/UserService';
import { toast } from 'react-toastify';
import '../../../css/layout/pages/users/updatePassword.css';
import { useFormik } from 'formik';
import { updatePassword, validatePassword } from '../../../service/UserService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

const UpdatePassword = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [user, setUser] = useState();


    //handle redirect user who not logged in
    const { cookies, isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!cookies.user) {
            navigate("/");
        } else setUser(cookies.user);
    }, [cookies])

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


    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },

        validateOnBlur: true, // Only validate when a field loses focus
        validateOnChange: true, //false: Do not validate when a field's value changes

        validate: (values) => {
            console.log('test');
            let errors = {};
            if (!values.oldPassword) {
                errors.oldPassword = '*Please enter a old password.';
            }

            if (!values.newPassword) {
                errors.newPassword = '*Please enter a password.';
            }

            if (!values.confirmNewPassword) {
                errors.confirmNewPassword = '*Please confirm a password.';
            }

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!values.newPassword || !passwordRegex.test(values.newPassword)) {
                errors.newPassword = '*Password must be at least 8 characters, including at least 1 number, 1 letter and 1 special character.';
            }

            if (!values.confirmNewPassword) {
                errors.confirmNewPassword = '*Please re-enter your password.';
            } else if (values.newPassword !== values.confirmNewPassword) {
                errors.confirmNewPassword = '*Passwords do not match.';
            }
            return errors;
        },
        onSubmit: (values) => {
            UserService.updatePassword(user.id, values.oldPassword, values.newPassword, values.confirmNewPassword, navigate);
        },
    });

    // If userInfo is null, data is still loading
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formik.values.oldPassword, formik.values.newPassword, formik.values.confirmNewPassword);
    //     await UserService.updatePassword(user.id, formik.values.oldPassword, formik.values.newPassword, formik.values.confirmNewPassword, navigate);
    // };



    // Render form when data is loaded
    return (
        <form onSubmit={formik.handleSubmit} className='update-password'>
            <label>
                <span>Old Password:</span>
                <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    required
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange}
                    name="oldPassword"
                    placeholder="Enter your old password"
                />
                {formik.touched.oldPassword && formik.errors.oldPassword && <div className="error">{formik.errors.oldPassword}</div>}
            </label>
            <label>
                <span>New Password:</span>
                <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    required
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    name="newPassword"
                    placeholder="Enter your new password"
                />
                {formik.touched.newPassword && formik.errors.newPassword && <div className="error">{formik.errors.newPassword}</div>}
            </label>
            <label>
                <span>Confirm New Password:</span>
                <input
                    type="password"
                    className="form-control"
                    id="confirmNewPassword"
                    required
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                    name="confirmNewPassword"
                    placeholder="Confirm new password"
                />
                {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && <div className="error">{formik.errors.confirmNewPassword}</div>}
            </label>
            <input type="submit" value="Update" />
        </form>
    );
};

export default UpdatePassword;
