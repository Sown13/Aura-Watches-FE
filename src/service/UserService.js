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
                    Fname: response.data.Fname,
                    Lname: response.data.Lname,
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

const UserDataService = {
    createNewUser
};

export default UserDataService;