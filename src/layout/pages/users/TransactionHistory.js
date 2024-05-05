import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import TransactionService from "../../../service/TransactionService.";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function TransactionHistory() {
    const { cookies, isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
            return;
        }
        // it seem if i call api using cookie value, the cookie will be set again????
        TransactionService.getTransactionByUser(cookies.user.id)
            .then((res) => {
                setPaymentHistory(res.data);
            })
            .catch((err) => {
                console.error("Cannot get payment history", err);
            });
    }, [cookies, isLoggedIn, navigate]);

    return (
        <div className="transaction-history">
            <h1 className="text-start text-light">Your Payment History</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bill ID</th>
                        <th scope="col">Date</th>
                        <th scope="col" style={{ textAlign: "start" }}>Total Payment</th>
                        <th scope="col" >Option</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((transaction, index) => (
                        <tr className="table-dark" key={index}>
                            <td className="table-dark">{index + 1}</td>
                            <td className="table-dark">{transaction.id}</td>
                            <td className="table-dark">{new Date(transaction.date_created).toLocaleDateString([], {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}</td>
                            <td className="table-dark text-start">${transaction.total_paid.toLocaleString()}</td>
                            <td className="table-dark">
                                <Link to={"/user/profile/payment-detail"}
                                    state={{ paymentHistory: paymentHistory, transactionId: transaction.id, total_paid: transaction.total_paid }}
                                    style={{ textDecoration: "none", color: "white" }}>
                                    Detail
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}