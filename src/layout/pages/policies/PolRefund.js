import { useEffect } from "react";
import "../../../css/layout/pages/policies/PolRefund.css";

export default function PolRefund() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="pol-refund text-light">
            <h1>Return Policy</h1>
            <h2>WHAT ITEMS ARE RETURNABLE?</h2>
            <p>You can return your items within 30 days of the original shipment date.</p>
            <ul>
                <li><b>They must be in original condition</b></li>
                <li><b>For watches and straps, it must be completely unworn.</b></li>
                <li><b>In the original packaging, including any plastic covers, tags, or paperwork (varies by product)</b></li>
                <li><b>Mystery watches are non-refundable and only eligible for store credit less a $10 restocking fee.</b></li>
                <li><b>Navidium package protection cannot be returned and is nonrefundable</b></li>
                <li><b>Unfortunately we are not able to accept returns from South Africa.</b></li>

            </ul>
            <h2>HOW DO I RETURN?</h2>
            <ul>
                <li><b>Enter your order number and email address in the fields above and click Start</b></li>
                <li><b>Follow the instructions and select the items you want to return</b></li>
                <li><b>Once the return request is approved (typically within 2 business days)<br />you will get a confirmation email with the shipping guidelines and return address</b></li>
            </ul>
            <h2>ARE THERE ANY CHARGES FOR RETURN?</h2>
            <ul>
                <li><b>There are no restocking fees for returns</b></li>
                <li><b>Original shipping charges are non-refundable</b></li>
                <li><b>You are responsible for the charges of the return shipping</b></li>
                <li><b>*International customers, please be aware that any return shipping duties/taxes <br /> charged to Watches.com will be deducted from the refunded amount.</b></li>
            </ul>
            <h2>HOW SOON WILL I GET MY REFUND?</h2>
            <ul>
                <li><b>Once your return is received and inspected, we will send you an email to notify you that we <br /> have received your returned item. We will also notify you of the approval or rejection of your refund.</b></li>
                <li><b>If you are approved, then your refund will automatically be applied to the original method of <br /> payment, within 10 working days after Watches.com receives your return.</b></li>
            </ul>
            <h2>WILL I GET A REFUND IF I RETURN AN ITEM PURCHASED <br /> AS PART OF A BOGO PROMOTION?</h2>
            <ul>
                <li><b>When purchasing items as part of a Buy One Get One (BOGO) promotion, the promotional discount <br /> is based on the lowest priced item, then applied to each item proportionately.</b></li>
                <li><b>If you choose to return any of the items, a store credit will be issued for the  reduced <br />discounted amount of the item.</b></li>
            </ul>
        </div>
    )
}