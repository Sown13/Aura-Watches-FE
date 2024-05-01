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
    const [headerBot, setHeaderBot] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const headerTopHeight = document.querySelector('.layout-header-top ') && document.querySelector('.layout-header-top ').offsetHeight;
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


    // handle scroll to top button
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const scrollingUp = prevScrollPos < currentScrollPos;

            setIsVisible(scrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="layout d-flex justify-content-center flex-column">
            <div className="layout-header-top d-flex flex-column">
                <HeaderTop></HeaderTop>
            </div>
            <div className={headerBot == 1 ? "sticky" : ""}>
                {headerBot == 1 ? <HeaderBotSticky></HeaderBotSticky> : <HeaderBot></HeaderBot>}
            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
            <div className={`go-to-top-button ${isVisible ? '' : 'go-to-top-button-hidden'}`} onClick={scrollToTop}>
                &uarr;
            </div>
            <FooterTop></FooterTop>
            <FooterBot></FooterBot>
        </div>
    )
}