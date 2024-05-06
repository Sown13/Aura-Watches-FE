import { Link } from "react-router-dom";
import "../../css/components/navigate/HeaderTop.css";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";
import ProductService from "../../service/ProductService";

export default function HeaderTop() {
    const { handleLogout, cookies, removeCookie, isLoggedIn, setIsLoggedIn, cartQuantity } = useContext(UserContext);


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
                    <Link className="nav-link text-light" to={"/cart"}>
                        <i className="fa-solid fa-bag-shopping position-relative">

                            {cartQuantity > 0
                                ? <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                                    style={{
                                        fontSize: "9px",
                                        width: "15px",
                                        height: "15px",
                                        transform: "translate(-50%, -50%)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {cartQuantity}
                                </span>
                                : null}

                        </i>
                    </Link>
                    <Link className="nav-link text-light" aria-current="page" to={"/products/search"}><i className="fa-solid fa-magnifying-glass"></i></Link>

                    {
                        isLoggedIn ?
                            (<div className="dropdown">
                                <Link className="nav-link text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user" style={{ color: "#e8c284" }}></i>
                                </Link>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/user/profile'}>Your Profile</Link ></li>
                                    <li><Link className="dropdown-item" onClick={() => handleLogout()}>Log Out</Link></li>
                                </ul>
                            </div>)
                            : (<Link className="nav-link text-light" to={"/login"}><i className="fa-solid fa-user"></i></Link>)
                    }
                </div>
            </div>
        </nav>
    )
}