import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../service/UserService";

export default function UserDetail() {
    const { cookies, setCookie, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const [user, setUser] = useState({});


    //handle redirect user who not logged in
    const navigate = useNavigate();
    useEffect(() => {
        if (!cookies.user) {
            navigate("/");
        } else {
            UserService.getUserInfo(cookies.user.id).then(res => {
                setUser(res.data);
            }).catch(err => { console.error(err); });
        }
    }, [user, cookies, isLoggedIn])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);



    return (
        <div style={{ minHeight: "70vh" }}>
            {isLoggedIn ? <h1 style={{ color: 'white', marginTop: "1%", marginBottom: "3%" }}> Welcome, {user.Fullname}!</h1> : null}
            {isLoggedIn ?
                <div className="d-flex">
                    <table className="table table-dark table-striped-columns table-sm " style={{ marginRight: "2%" }}>
                        <thead>
                            <tr>
                                <th scope="col" colSpan={2}>Your Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row"><i className="fa-solid fa-user"></i></th>
                                <td className="text-start">{user.Fullname}</td>
                            </tr>
                            <tr >
                                <th scope="row"><i className="fa-solid fa-envelope"></i></th>
                                <td className="text-start">{user.email}</td>
                            </tr>
                            <tr>
                                <th scope="row"><i className="fa-solid fa-phone"></i></th>
                                <td className="text-start">{user.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row"><i className="fa-solid fa-address-book"></i></th>
                                <td className="text-start">{user.address}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-dark table-striped-columns table-sm" style={{ marginLeft: "2%", marginTop: "1%" }}>
                        <tbody>
                            <tr>
                                <th className="btn btn-lg w-100" scope="row" style={{ marginBottom: "1%" }}>
                                    <Link className="btn btn-lg w-100" to={"/user/profile/update-info"} style={{ textDecoration: "none", color: "white" }}>Update Profile</Link>
                                </th>
                            </tr>
                            <tr>
                                <th className="btn btn-lg w-100" scope="row" style={{ marginBottom: "1%" }} >
                                    <Link className="btn btn-lg w-100" to={"/user/profile/update-security"} style={{ textDecoration: "none", color: "white" }}>Update Security</Link>
                                </th>
                            </tr>
                            <tr>
                                <th className="btn btn-lg w-100" scope="row" style={{ marginBottom: "1%" }} >
                                    <Link className="btn btn-lg w-100" to={"/user/profile/payment-history"} style={{ textDecoration: "none", color: "white" }}>Your Payment History</Link>
                                </th>
                            </tr>

                        </tbody>
                    </table>

                </div>

                : null
            }

        </div>
    )
}