import { Outlet } from "react-router-dom";
import HeaderBot from "../components/navigate/HeaderBot";
import HeaderTop from "../components/navigate/HeaderTop";
import "../css/layout/Layout.css";
import FooterTop from "../components/navigate/FooterTop";
import FooterBot from "../components/navigate/FooterBot";
import { UserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import HeaderBotSticky from "../components/navigate/HeaderBotSticky";

export default function Layout() {
    const testContext = "This one displays mean the context ok";
    const [headerBot, setHeaderBot] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const headerTopHeight = document.querySelector('.layout-header-top ').offsetHeight;
            if (window.scrollY >= headerTopHeight) {
                setHeaderBot(1);
            } else {
                setHeaderBot(0);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerBot]);


    return (
        <div className="layout d-flex justify-content-center flex-column">
            <UserContext.Provider value={{ testContext }}>
                <div className="layout-header-top d-flex flex-column">
                    <HeaderTop></HeaderTop>
                </div>
                <div className={headerBot == 1 ? "sticky" : ""}>
                    {headerBot == 1 ? <HeaderBotSticky></HeaderBotSticky> : <HeaderBot></HeaderBot>}
                </div>
                <div className="outlet">
                    <Outlet></Outlet>
                </div>
                <FooterTop></FooterTop>
                <FooterBot></FooterBot>
            </UserContext.Provider>
        </div>
    )
}