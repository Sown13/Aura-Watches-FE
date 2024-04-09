import { Link } from "react-router-dom";


export default function HeaderTop() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Aura Watches</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/about-us"}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact-us"}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/news"}>News</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/register"}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}