import { useEffect, useState } from "react";
import "../../../css/layout/pages/misc/Contact.css";

export default function Contact() {

    const [storeAddress, setStoreAddress] = useState(1);

    const selectStore = (number, e) => {
        e.preventDefault();
        setStoreAddress(number);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="misc-contact text-light">
            <h2>Our Stores</h2>
            <p>Choose the store to show it's address on the map</p>

            <div class="container">



                <div class="branch-info">
                    <div class="branch">
                        <a onClick={(e) => selectStore(1, e)}><h3>{storeAddress === 1 ? <span><i class="fa-solid fa-play"></i></span> : null} Aura Watches Ha Noi</h3></a>
                        <p>Address: 8a, Ton That Thuyet, My Dinh, Nam Tu Liem, Ha Noi</p>
                        <p>Hotline: 0123 456 789</p>
                        <span>Email: </span><a href="mailto:aurawatch1@gmail.com">aurawatch1@gmail.com</a>
                    </div>

                    <div class="branch">
                        <a onClick={(e) => selectStore(2, e)}><h3>{storeAddress === 2 ?<span><i class="fa-solid fa-play"></i></span> : null} Aura Watches Hoa Lac</h3></a>
                        <p>Address: Tan Xa, Thach That, Ha Noi</p>
                        <p>Hotline: 0987 654 321</p>
                        <span>Email: </span><a href="mailto:aurawatch2@gmail.com">aurawatch2@gmail.com</a>
                    </div>
                    <div class="branch">
                        <a onClick={(e) => selectStore(3, e)}><h3>{storeAddress === 3 ?<span><i class="fa-solid fa-play"></i></span> : null} Aura Watches HCM</h3></a>
                        <p>Address: 391a Nam Ky Khoi Nghia, Vo Thi Sau, Quan 3, Tp.HCM</p>
                        <p>Hotline: 01345 689 124</p>
                        <span>Email: </span><a href="mailto:aurawatch3@gmail.com">aurawatch3@gmail.com</a>
                    </div>
                </div>
                <div class={"map-container " + (storeAddress === 1 ? "" : "store-hidden")}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.7890833379247!2d105.78178795032262!3d21.02888300798916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1sen!2s!4v1714559101493!5m2!1sen!2s"
                        style={{ width: "600px", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class={"map-container " + (storeAddress === 2 ? "" : "store-hidden")}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6263.86788872803!2d105.52611785707587!3d21.011944557506908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bb9d76a7e03%3A0x244a83c591357341!2zRlBUIFNvZnR3YXJlIEjDsmEgTOG6oWM!5e0!3m2!1sen!2s!4v1714582289608!5m2!1sen!2s"
                        style={{ width: "600px", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class={"map-container " + (storeAddress === 3 ? "" : "store-hidden")}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.065553413131!2d106.6631550871582!3d10.790897799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcdf5e6b00b%3A0xed1c6762515e1113!2sFPT%20Aptech%20-%20Game%20Development%20with%20Unity!5e0!3m2!1sen!2s!4v1714582478240!5m2!1sen!2s"
                        style={{ width: "600px", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}