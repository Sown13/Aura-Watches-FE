import { Link } from "react-router-dom";
import "../../css/components/navigate/HeaderBot.css";


export default function HeaderBot() {
    return (
        <nav className="navbar navbar-expand header-bot d-flex flex-row">
            <div class="container-fluid">
                <div className="col d-flex flex-row navbar-nav justify-content-center">
                    {/* <Link className="nav-link active text-light" aria-current="page" to={"/"}>Home</Link> */}
                    <Link className="nav-link text-light p-3" to={"/products"}>WATCHES</Link>
                    <Link className="nav-link text-light p-3" to={"/products/men"}>MEN</Link>
                    <Link className="nav-link text-light p-3" to={"/products/women"}>WOMEN</Link>
                    <div className="nav-item dropdown ">
                        <Link className="nav-link dropdown-toggle text-light p-3" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BRANDS
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item p-3" to={"/products/brand-1"}>AURA WATCH</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/brand-2"}>ROLEX</Link></li>
                        </ul>
                    </div>
                    <Link className="nav-link text-light p-3" to={"/products/premier"}>PREMIER</Link>
                    <Link className="nav-link text-light p-3" to={"/products/sport"}>SPORT</Link>
                    <Link className="nav-link text-light p-3" to={"/products/sales"}>SALES</Link>
                </div>
            </div>
        </nav>


    )
}