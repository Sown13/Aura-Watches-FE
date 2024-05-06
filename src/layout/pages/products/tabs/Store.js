import { useEffect, useState } from "react"

export default function Store({ map }) {
    const store1 = {
        name: "Aura Watches Hanoi",
        address: "8a, Ton That Thuyet, My Dinh, Nam Tu Liem, Ha Noi",
        hotline: "0123 456 789",
        email: "aurawatch1@gmail.com",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.7890833379247!2d105.78178795032262!3d21.02888300798916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1sen!2s!4v1714559101493!5m2!1sen!2s"
    }

    const store2 = {
        name: "Aura Watches Hoa Lac",
        address: " Tan Xa, Thach That, Ha Noi",
        hotline: "0987 654 321",
        email: "aurawatch2@gmail.com",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6263.86788872803!2d105.52611785707587!3d21.011944557506908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bb9d76a7e03%3A0x244a83c591357341!2zRlBUIFNvZnR3YXJlIEjDsmEgTOG6oWM!5e0!3m2!1sen!2s!4v1714582289608!5m2!1sen!2s"
    }

    const store3 = {
        name: "Aura Watches HCM",
        address: "391a Nam Ky Khoi Nghia, Vo Thi Sau, Quan 3, Tp.HCM",
        hotline: "01345 689 124",
        email: "aurawatch3@gmail.com",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.065553413131!2d106.6631550871582!3d10.790897799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcdf5e6b00b%3A0xed1c6762515e1113!2sFPT%20Aptech%20-%20Game%20Development%20with%20Unity!5e0!3m2!1sen!2s!4v1714582478240!5m2!1sen!2s"
    }
    const [store, setStore] = useState({ store1 });

    useEffect(() => {
        switch (map) {
            case 1: setStore(store1); break;
            case 2: setStore(store2); break;
            case 3: setStore(store3); break;
            default: setStore(store1); break;
        }
    }, [map]);


    return (
        <div className="d-flex">
            <iframe src={store.map}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "400px", margin: "1%" }}></iframe>
            <div style={{ margin: "1%" }}>
                <h4 style={{color:"#E8c284"}}>{store.name}</h4>
                <h5 > Store Address:</h5>
                <p>{store.address}</p>
                <h5 > Hotline: </h5>
                <p>{store.hotline}</p>
                <h5 > Email: </h5>
                <a href={`mailto:` + store.email}>{store.email}</a>
            </div>
        </div>
    )
}