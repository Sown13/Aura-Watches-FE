import { useEffect } from "react";
import "../../../css/layout/pages/policies/PolPayment.css";

export default function PolPayment() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="pol-payment text-light">
            <h2>PAYMENT OPTIONS</h2>
            <p>Aura Watch accepts the following credit cards and payments:</p>
            <ul>
                <li><b>Visa</b></li>
                <li><b>Mastercard</b></li>
                <li><b>WeScan</b></li>
                <li><b>Paypal</b></li>
            </ul>
            <p>Orders  are authorized for payment when received and your order will not be charged until it ships from our warehouse.
                Authorizations withhold the dollar amount from your account, in order to ensure that these funds are available when the order ships. </p>
            <p>Please make sure that your billing information submitted to Aura Watch corresponds to the address where your credit card statements are received.
                This address should be the same address that your credit card company has on file. If you are not sure of your correct billing address, please contact your credit card company for details.
                Inaccurate billing and identity information submitted to Aura Watch will delay the shipment of your order. </p>
        </div>
    )
}