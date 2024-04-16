import React, { useState } from "react";
import UserService from "../../../service/UserService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import RegisterStyles from "../../../css/layout/pages/auth/RegisterStyles.css";
import Error from '../../../css/layout/pages/auth/Error.css';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";
import facebookLogo from '../../../images/facebook.png';
import googleLogo from '../../../images/google.png';


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        Fullname: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        rePassword: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    const [showRePassword, setShowRePassword] = useState(false);

    const toggleRePasswordVisibility = () => {
        setShowRePassword(showRePassword => !showRePassword);
    };

    const formik = useFormik({
        initialValues: {
            Fullname: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            rePassword: '',
            address: ''
        },

        validateOnBlur: true, // Only validate when a field loses focus
        validateOnChange: true, //false: Do not validate when a field's value changes

        validate: (values) => {
            let errors = {};
            if (!values.Fullname) {
                errors.Fullname = '*Please enter a First Name.';
            }

            if (!values.username) {
                errors.username = '*Please enter a username.';
            } else if (values.username.length < 4) {
                errors.username = '*Username must be at least 4 characters.';
            } else if (!/^[\w]+$/.test(values.username)) {
                errors.username = '*Username must not contain special characters or accents.';
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

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!values.password || !passwordRegex.test(values.password)) {
                errors.password = '*Password must be at least 8 characters, including at least 1 number, 1 letter and 1 special character.';
            }

            if (!values.rePassword) {
                errors.rePassword = '*Please re-enter your password.';
            } else if (values.password !== values.rePassword) {
                errors.rePassword = '*Passwords do not match.';
            }
            return errors;
        },
        onSubmit: (values) => {


            const data = {
                Fullname: values.Fullname,
                phone: values.phone,
                email: values.email,
                username: values.username,
                password: values.password,
                rePassword: values.rePassword,
                address: values.address
            };
            delete data.rePassword;
            UserService.createNewUser(data, navigate, setUser, formik);

        },
    });

    const saveUser = (event) => {
        event.preventDefault();
        formik.handleSubmit(event);
        if (Object.keys(formik.errors).length > 0) {
            return;
        }
        event.preventDefault();
        const data = {
            Fullname: user.Fullname,
            phone: user.phone,
            email: user.email,
            username: user.username,
            password: user.password,
            rePassword: user.rePassword,
            address: user.address
        }

        const validationErrors = formik.validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    }

    return (
        <div className="register-container">
            <a className="logo-aura-watch col navbar-brand" href={"/"}>
                <img src="/img/logo.svg" alt="logo"></img>
            </a>
            <div className="Register">
                <h2>Create Your Account</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Fullname">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Fullname"
                            required
                            value={formik.values.Fullname}
                            onChange={formik.handleChange}
                            name="Fullname"
                            placeholder="Enter your name"
                        />
                        {formik.touched.Fullname && formik.errors.Fullname && <div className="error">{formik.errors.Fullname}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            required
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            name="phone"
                            placeholder="Enter your phone"
                        />
                        {formik.touched.phone && formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            placeholder="Enter your email"
                        />
                        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            name="username"
                            placeholder="Enter your username"
                        />
                        {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                required
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                name="password"
                                placeholder="Enter your password"
                            />
                            <i onClick={togglePasswordVisibility} className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </div>
                        {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="rePassword">Re-enter Password</label>
                        <div className="password-input">
                            <input
                                type={showRePassword ? "text" : "password"}
                                className="form-control"
                                id="rePassword"
                                required
                                value={formik.values.rePassword}
                                onChange={formik.handleChange}
                                name="rePassword"
                                placeholder="Re-enter your password"
                            />
                            <i onClick={toggleRePasswordVisibility} className={`fa ${showRePassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </div>
                        {formik.touched.rePassword && formik.errors.rePassword && <div className="error">{formik.errors.rePassword}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            required
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            name="address"
                            placeholder="Enter your address"
                        />
                        {formik.touched.address && formik.errors.address && <div className="error">{formik.errors.address}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                </form>
                <h6>Already have an account? <Link to="/login">Login</Link></h6>
                <button className="reg-facebook">
                    <img src={facebookLogo} />
                    Sign up with Facebook
                </button>
                <button className="reg-google">
                    <img src={googleLogo} />
                    Sign up with Google
                </button>
            </div>
            <div className="background-image">
            </div>
        </div>
    );
};

export default Register;
