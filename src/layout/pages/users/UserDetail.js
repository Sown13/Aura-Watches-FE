import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";

export default function UserDetail() {
    const { cookies, setCookie, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(cookies.user);
    }, [cookies, isLoggedIn])

    return (
        <div style={{ minHeight: "70vh" }}>
            {isLoggedIn ? <h1 style={{ color: 'white', marginTop: "1%", marginBottom: "3%" }}> Welcome, {cookies.user.Fullname}!</h1> : null}
            <div className="d-flex">
                <table class="table table-dark table-striped-columns table-sm " style={{ marginRight: "2%" }}>
                    <thead>
                        <tr>
                            <th scope="col" colSpan={2}>Your Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row"><i class="fa-solid fa-user"></i></th>
                            <td className="text-start">{user.Fullname}</td>
                        </tr>
                        <tr >
                            <th scope="row"><i class="fa-solid fa-envelope"></i></th>
                            <td className="text-start">{user.email}</td>
                        </tr>
                        <tr>
                            <th scope="row"><i class="fa-solid fa-phone"></i></th>
                            <td className="text-start">{user.phone}</td>
                        </tr>
                        <tr>
                            <th scope="row"><i class="fa-solid fa-address-book"></i></th>
                            <td className="text-start">{user.address}</td>
                        </tr>
                    </tbody>
                </table>

                <table class="table table-dark table-striped-columns table-sm" style={{ marginLeft: "2%", marginTop: "1%" }}>
                    <tbody>
                        <tr>
                            <th className="btn btn-lg w-100" scope="row" >
                                <Link to={"/user/profile/update-info"} style={{ textDecoration: "none", color: "white" }}>Update Profile</Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="btn btn-lg w-100" scope="row" >
                                <Link to={"/user/profile/update-security"} style={{ textDecoration: "none", color: "white" }}>Update Security</Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="btn btn-lg w-100" scope="row" >
                                <Link to={"/user/profile/payment-history"} style={{ textDecoration: "none", color: "white" }}>Your Payment History</Link>
                            </th>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    )
}