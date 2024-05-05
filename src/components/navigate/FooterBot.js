import { Link } from "react-router-dom";
import "../../css//components/navigate/FooterBot.css";

export default function FooterBot() {
    return (
        <div className="footer-bot d-flex justify-content-evenly text-light">
            {/* <Link className="p2" to={"/policy-customers"}>Customer Policy</Link>
            <Link className="p2" to={"/policy-payment"}>Payment Policy</Link>
            <Link className="p2" to={"/policy-refund"}>Refund Policy</Link>
            <Link className="p2" to={"/policy-warranty"}>Warranty Policy</Link>
            <Link className="p2" to={"/policy-security"}>Security Policy</Link> */}
            <div className="footer-bot-logo flex-fill">
                <img src="/img/logo.svg" alt="logo"></img>
                <p>Copyright © {new Date().getFullYear()} Aura <br />all rights reserved.</p>
                <span><Link><img src="/img/logo_facebook.svg"></img></Link></span>
                <span><Link><img src="/img/logo_twitter.svg"></img></Link></span>
                <span><Link><img src="/img/logo_linkedin.svg"></img></Link></span>
            </div>
            <div className="footer-bot-nav d-flex flex-column">
                <h5>Links</h5>
                <br></br>
                <Link className="" to={"/"}>Home</Link>
                <Link className="" to={"/#"}>Espisodes</Link>
                <Link className="" to={"/#"}>Trending</Link>
                <Link className="" to={"/#"}>Category</Link>
                <a className="" href="/files/price-list/aw-price-list.xlsx" download={"AuraWatch_price-list.xslx"}>
                    Price List
                    &nbsp;<i class="fa-solid fa-download"></i></a>
            </div>
            <div className="footer-bot-nav d-flex flex-column">
                <h5>POLICIES</h5>
                <br></br>
                <Link className="" to={"/policy-customers"}>Customer Policy</Link>
                <Link className="" to={"/policy-payment"}>Payment Policy</Link>
                <Link className="" to={"/policy-refund"}>Refund Policy</Link>
                <Link className="" to={"/policy-warranty"}>Warranty Policy</Link>
                <Link className="" to={"/policy-security"}>Security Policy</Link>
            </div>
            <div className="footer-bot-nav d-flex flex-column">
                <h5>ABOUT US</h5>
                <br></br>
                <Link className="nav-link active text-light" aria-current="page" to={"/about-us"}>About Us</Link>
                <Link className="nav-link text-light" to={"/contact-us"}>Contact</Link>
                <Link className="nav-link text-light" to={"/news"}>News</Link>
            </div>
        </div>
    )
}