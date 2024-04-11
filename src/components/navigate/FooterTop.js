import { Link } from "react-router-dom";
import "../../css/components/navigate/FooterTop.css";

export default function FooterTop() {
    return (
        <div class="footer-top container text-center" style={{ color: "white" }}>
            <img src="/img/footer_top_banner_1.png" />
            <div class="row">
                <div class="col-4">
                    <h2>Subscribe Our</h2>
                    <h2> Newsletter</h2>
                    <br></br>
                    <p>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</p>
                </div>
                <div className="col-4"></div>
                <div class="d-flex align-items-center col-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary text-light" type="button" id="button-addon2">SUBCRIBE</button>
                    </div>
                </div>

            </div>
        </div>
    )
}