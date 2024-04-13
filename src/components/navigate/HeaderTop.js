import { Link } from "react-router-dom";
import "../../css/components/navigate/HeaderTop.css";


export default function HeaderTop() {
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
                    <Link className="nav-link active text-light" aria-current="page" to={"/register"}><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link className="nav-link text-light" to={"/login"}><i className="fa-solid fa-user"></i></Link>
                </div>
            </div>
        </nav>
    )
}