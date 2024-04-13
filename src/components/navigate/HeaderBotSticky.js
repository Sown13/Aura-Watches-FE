import { Link, useParams } from "react-router-dom";
import "../../css/components/navigate/HeaderBotSticky.css";
import { useEffect, useState } from "react";


export default function HeaderBotSticky() {
    const { category } = useParams();
    const [tabActive, setTabActive] = useState(0);

    const selectTab = (number) => {
        setTabActive(number);
    }


    useEffect(() => {
        switch (category) {
            case "all":
                setTabActive(1);
                break;
            case "men":
                setTabActive(2);
                break;
            case "women":
                setTabActive(3);
                break;
            case "premier":
                setTabActive(4);
                break;
            case "sport":
                setTabActive(5);
                break;
            case "sales":
                setTabActive(6);
                break;
            default:
                setTabActive(0);
                break;
        }
    }, [category])

    return (
        <nav className="navbar navbar-expand header-bot-sticky d-flex flex-row">
            <div className="container-fluid row">
                <a className="logo-aura-watch col navbar-brand" href={"/"}>
                    <img src="/img/logo.svg" alt="logo"></img>
                </a>
                <div className="col d-flex flex-row navbar-nav justify-content-center">
                    <Link className={"nav-link text-light p-3" + (tabActive === 1 ? " active" : "")} onClick={() => selectTab(1)} to={"/products/all"}>WATCHES</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 2 ? " active" : "")} onClick={() => selectTab(2)} to={"/products/men"}>MEN</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 3 ? " active" : "")} onClick={() => selectTab(3)} to={"/products/women"}>WOMEN</Link>
                    <div className="nav-item dropdown ">
                        <Link className="nav-link dropdown-toggle text-light p-3" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BRANDS
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item p-3" to={"/products/brand-1"}>AURA WATCH</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/brand-2"}>ROLEX</Link></li>
                        </ul>
                    </div>
                    <Link className={"nav-link text-light p-3" + (tabActive === 4 ? " active" : "")} onClick={() => selectTab(4)} to={"/products/premier"}>PREMIER</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 5 ? " active" : "")} onClick={() => selectTab(5)} to={"/products/sport"}>SPORT</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 6 ? " active" : "")} onClick={() => selectTab(6)} to={"/products/sales"}>SALES</Link>
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