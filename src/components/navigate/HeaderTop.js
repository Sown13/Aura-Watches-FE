import { Link } from "react-router-dom";
import "../../css/components/navigate/HeaderTop.css";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";

export default function HeaderTop() {
    const { handleLogout, cookies, removeCookie, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    useEffect(() => {
        console.log("header top: " + isLoggedIn);
        console.log(cookies);
      }, [cookies]);

    return (
        <nav className="navbar navbar-expand header-top d-flex flex-row ">
            <div className="container-fluid">
                <div className="col d-flex flex-row navbar-nav">

                </div>
                <div className="col">
                    <Link className="logo-aura-watch navbar-brand" to={"/"}>
                        <img src="/img/logo.svg" alt="logo"></img>
                    </Link>
                </div>
                <div className="col d-flex flex-row navbar-nav flex-row-reverse">
                    <Link className="nav-link text-light" to={"/#"}><i className="fa-solid fa-bag-shopping"></i></Link>
                    <Link className="nav-link text-light" aria-current="page" to={"/register"}><i className="fa-solid fa-magnifying-glass"></i></Link>

                    {
                        isLoggedIn ?
                            (<div class="dropdown">
                                <Link class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user"></i>
                                </Link>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to={'/user/profile'}>Your Profile</Link ></li>
                                    <li><Link class="dropdown-item" onClick={() => handleLogout()}>Log Out</Link></li>
                                </ul>
                            </div>)
                            : (<Link className="nav-link text-light" to={"/login"}><i className="fa-solid fa-user"></i></Link>)
                    }

                </div>
            </div>
        </nav>
    )
}