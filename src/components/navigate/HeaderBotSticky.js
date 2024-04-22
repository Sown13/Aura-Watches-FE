import { Link, useParams } from "react-router-dom";
import "../../css/components/navigate/HeaderBotSticky.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";


export default function HeaderBotSticky() {
    const { category } = useParams();
    const [tabActive, setTabActive] = useState(0);
    const { handleLogout, cookies, removeCookie, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

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
                            <li><Link className="dropdown-item p-3" to={"/products/AURA-WATCH"}>AURA WATCH</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/FOSSIL"}>FOSSIL</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/TOMMY-HILFIGER"}> TOMMY HILFIGER</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/BULOVA"}>BULOVA</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/GUESS"}>GUESS</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/ANNE-KLEIN"}>ANNE KLEIN</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/G-SHOCK"}>G-SHOCK</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/NINE-WEST"}>NINE WEST</Link></li>
                            <li><Link className="dropdown-item p-3" to={"/products/TIMEX"}>TIMEX</Link></li>
                        </ul>
                    </div>
                    <Link className={"nav-link text-light p-3" + (tabActive === 4 ? " active" : "")} onClick={() => selectTab(4)} to={"/products/premier"}>PREMIER</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 5 ? " active" : "")} onClick={() => selectTab(5)} to={"/products/sport"}>SPORT</Link>
                    <Link className={"nav-link text-light p-3" + (tabActive === 6 ? " active" : "")} onClick={() => selectTab(6)} to={"/products/sales"}>SALES</Link>
                </div>
                <div className="col d-flex flex-row navbar-nav flex-row-reverse">
                    <Link className="nav-link text-light" to={"/#"}><i className="fa-solid fa-bag-shopping"></i></Link>
                    <Link className="nav-link text-light" aria-current="page" to={"/register"}><i className="fa-solid fa-magnifying-glass"></i></Link>
                    {
                        isLoggedIn ?
                            (<div class="dropdown">
                                <Link class="nav-link text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user" style={{ color: "#e8c284" }}></i>
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