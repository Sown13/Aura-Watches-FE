import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../admin/admin_page/css/AdminLayout.css";

export default function AdminLayout() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isAdminLogin') === 'true');
        console.log("admin: " + localStorage.getItem('isAdminLogin'));
    }, []);

    const handleLogout = () => {
        localStorage.setItem('isAdminLogin', false);
        setIsLoggedIn(false);
        navigate("/admin");
        toast.info('Log out success', { containerId: 'toast-admin' });
    }

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAdminLogin', true);
            setIsLoggedIn(true);
            toast.success('Login Success!', { containerId: 'toast-admin' });
        } else {
            toast.error('False username or password', { containerId: 'toast-admin' });
        }
    }

    return (
        <div className=" admin-layout w-100">
            {!isLoggedIn ?
                <form className="login-form" onSubmit={handleLogin}>
                    <div className='row'>
                        <p className='col'>
                            Employee:
                        </p>
                        <input className='col' type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='row'>
                        <p className='col'>
                            Password:
                        </p>
                        <input className='col' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
                :
                <div className="admin-layout w-100 text-light">
                    <nav className="admin-layout-nav navbar navbar-expand navbar-dark">
                        <h1 href="/admin" className="navbar-item">
                            DASH BOARD
                        </h1>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Product List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/admin/add"} className="nav-link">
                                    Add Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/admin/user-list"} className="nav-link">
                                    User List
                                </Link>
                            </li>
                            <button className="btn btn-warning" onClick={handleLogout}>Log out</button>
                        </div>
                    </nav>

                    <Outlet></Outlet>
                </div>
            }
            <ToastContainer containerId="toast-admin" />
        </div>
    )
}