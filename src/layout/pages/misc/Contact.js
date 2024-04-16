import { useEffect } from "react";
import "../../../css/layout/pages/misc/Contact.css";

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="misc-contact text-light">
            <h2>Contact</h2>

            <div class="container">

                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3724.6309863731603!2d105.79061307471382!3d21.0074241885121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1712842871359!5m2!1svi!2s" style={{width:"600px", height:"450px", border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="branch-info">
                    <div class="branch">
                        <h3>Aura Watches</h3>
                        <p>Address: 123 Đường ABC, Quận XYZ, Thành phố HN</p>
                        <p>Hotline: 0123 456 789</p>
                        <p>Email: chinhanh1@example.com</p>
                    </div>

                    <div class="branch">
                        <h3>Aura Watch 1</h3>
                        <p>Address: 456 Đường DEF, Quận UVW, Thành phố HN</p>
                        <p>Hotline: 0987 654 321</p>
                        <p>Email: chinhanh2@example.com</p>
                    </div>
                    <div class="branch">
                        <h3>Aura Watch 2</h3>
                        <p>Address: 678 Đường DEF, Quận UVW, Thành phố HN</p>
                        <p>Hotline: 01345 689 124</p>
                        <p>Email: chinhanh2@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}