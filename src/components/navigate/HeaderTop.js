import { Link } from "react-router-dom";
import "../../css/components/navigate/HeaderTop.css";


export default function HeaderTop() {
    return (
        <nav className="navbar navbar-expand header-top d-flex flex-row ">
            <div class="container-fluid">
                <div className="col d-flex flex-row navbar-nav">

                </div>
                <div className="col">
                    <Link className="navbar-brand" to={"/"}>
                        <img src="/img/logo.svg" alt="logo"></img>
                    </Link>
                </div>
                <div className="col d-flex flex-row navbar-nav flex-row-reverse">
                    <Link className="nav-link text-light" to={"/#"}><i class="fa-solid fa-bag-shopping"></i></Link>
                    <Link className="nav-link active text-light" aria-current="page" to={"/register"}><i class="fa-solid fa-magnifying-glass"></i></Link>
                    <Link className="nav-link text-light" to={"/login"}><i class="fa-solid fa-user"></i></Link>
                </div>
            </div>
        </nav>
    )
}