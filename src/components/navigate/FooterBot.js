import { Link } from "react-router-dom";

export default function FooterBot() {
    return (
        <div className="d-flex justify-content-evenly">
            <Link className="p2" to={"/policy-customers"}>Customer Policy</Link>
            <Link className="p2" to={"/policy-payment"}>Payment Policy</Link>
            <Link className="p2" to={"/policy-refund"}>Refund Policy</Link>
            <Link className="p2" to={"/policy-warranty"}>Warranty Policy</Link>
            <Link className="p2" to={"/policy-security"}>Security Policy</Link>
        </div>
    )
}