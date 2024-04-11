import { Outlet } from "react-router-dom";
import HeaderBot from "../components/navigate/HeaderBot";
import HeaderTop from "../components/navigate/HeaderTop";
import "../css/layout/Layout.css";
import FooterTop from "../components/navigate/FooterTop";
import FooterBot from "../components/navigate/FooterBot";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";

export default function Layout() {
    const testContext = "This one displays mean the context ok";


    return (
        <div className="layout d-flex justify-content-center flex-column">
            <UserContext.Provider value={{ testContext }}>
                <div className="header d-flex flex-column">
                    <HeaderTop></HeaderTop>
                    <div className="sticky">
                        <HeaderBot></HeaderBot>
                    </div>
                </div>
                <div className="outlet" style={{ minHeight: '70vh' }}>
                    <Outlet></Outlet>
                </div>
                <FooterTop></FooterTop>
                <FooterBot></FooterBot>
            </UserContext.Provider>
        </div>
    )
}