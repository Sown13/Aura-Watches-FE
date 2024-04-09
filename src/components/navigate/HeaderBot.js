import { Link } from "react-router-dom";


export default function HeaderBot() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products"}>AllProduct</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products/men"}>Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products/women"}>Women</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Brands
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/products/brand-1"}>Brand 1</Link></li>
                                    <li><Link className="dropdown-item" to={"/products/brand-2"}>Brand 2</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products/premier"}>Premier</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products/sport"}>Sport</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/products/sales"}>Sales</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>


    )
}