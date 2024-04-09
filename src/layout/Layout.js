import { Outlet } from "react-router-dom";
import Footer from "../components/navigate/Footer";
import HeaderBot from "../components/navigate/HeaderBot";
import HeaderTop from "../components/navigate/HeaderTop";

export default function Layout() {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <HeaderBot></HeaderBot>
            <div className="outlet" style={{ minHeight: '70vh' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}