import http from "./httpCommon";
import axios from "axios";
import { toast } from 'react-toastify';

const createNewUser = (data, navigate, setUser, formik) => {
    // return http.post("/home", data);
    axios.get('http://localhost:8080/users')
        .then(response => {
            const users = response.data;
            const exists = users.some(u => u.username === data.username || u.email === data.email || u.phone === data.phone);
            if (exists) {
                toast.error('Username or email or phone already exists');
                return;
            }

            axios.post('http://localhost:8080/users', data)
                .then(response => {
                    setUser({
                        id: response.data.id,
                        Fullname: response.data.Fullname,
                        phone: response.data.phone,
                        email: response.data.email,
                        username: response.data.username,
                        password: response.data.password,
                        address: response.data.address
                    });

                    setUser(formik);
                    toast.success("Signup Success!");
                    navigate('/login');
                })
                .catch(e => {
                    console.log(e);
                });

        })

};

const updateUser = (id, data, navigate, setUser, formik, user) => {
    // Add username and password to the data object
    data.username = user.username;
    data.password = user.password;

    return axios.put(`http://localhost:8080/users/${id}`, data)
        .then(response => {
            console.log("Updated");
            setUser({
                id: response.data.id,
                Fullname: response.data.Fullname,
                phone: response.data.phone,
                email: response.data.email,
                address: response.data.address,
                username: user.username,
                password: user.password,
            });
            console.log("Updated 2");
            toast.success("Update Success!");
            navigate('/user/profile');
        })
        .catch(e => {
            console.log(e);
        });
}

const updatePassword = (id, password, navigate, setUser, formik, user) => {
    // Get current user data
    axios.get(`http://localhost:8080/users/${id}`)
        .then(response => {
            // Update password
            const updatedUser = {
                ...response.data,
                password: password,
            };

            // Update user on server
            return axios.put(`http://localhost:8080/users/${id}`, updatedUser);
        })
        .then(response => {
            setUser({
                ...response.data,
                password: password,
            });

            formik.resetForm();
            toast.success("Update Success!");
            navigate('/user/profile');
        })
        .catch(e => {
            console.log(e);
        });
}





const UserDataService = {
    createNewUser,
    updateUser,
    updatePassword
};

export default UserDataService;