import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDataService from '../../../service/UserService';
import { toast } from 'react-toastify';
import '../../../css/layout/pages/users/updateInfor.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const UpdateInfor = ({ user, navigate, setUser }) => {
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

    return (
        <Formik
            initialValues={userInfo}
            validate={values => {
                const errors = {};
                if (!values.Fullname) {
                    errors.Fullname = '*Please enter a First Name.';
                }
                if (!values.address) {
                    errors.address = '*Please enter an address.';
                }
                const phoneRegex = /^(\+84|0)[3|5|7|8|9][0-9]{8}$/;
                if (!values.phone || !phoneRegex.test(values.phone)) {
                    errors.phone = '*Please enter a valid phone number.';
                }
                const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                if (!values.email || !emailRegex.test(values.email)) {
                    errors.email = '*Please enter a valid email address.';
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                await UserDataService.updateUser(user.id, values, navigate, setUser);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='update-infor'>
                    <label>
                        <span>Full Name:</span>
                        <Field type="text" name="Fullname" />
                        <ErrorMessage name="Fullname" component="div" />
                    </label>
                    <label>
                        <span>Phone:</span>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" />
                    </label>
                    <label>
                        <span>Email:</span>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </label>
                    <label>
                        <span>Address:</span>
                        <Field type="text" name="address" />
                        <ErrorMessage name="address" component="div" />
                    </label>
                    <button type="submit" disabled={isSubmitting} className="submit-button">
                        Update
                    </button>

                </Form>
            )}
        </Formik>
    );
};

export default UpdateInfor;
