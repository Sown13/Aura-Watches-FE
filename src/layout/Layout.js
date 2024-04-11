import { Outlet } from "react-router-dom";
import HeaderBot from "../components/navigate/HeaderBot";
import HeaderTop from "../components/navigate/HeaderTop";
import "../css/layout/Layout.css";
import FooterTop from "../components/navigate/FooterTop";
import FooterBot from "../components/navigate/FooterBot";

export default function Layout() {
    return (
        <div className="layout d-flex justify-content-center flex-column vh-100">
            <div className="header d-flex flex-column">
                <HeaderTop></HeaderTop>
                <HeaderBot></HeaderBot>
            </div>
            <div className="outlet" style={{ minHeight: '70vh' }}>
                <Outlet></Outlet>
            </div>
            <FooterTop></FooterTop>
            <FooterBot></FooterBot>
        </div>
    )
}