import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import TransactionService from "../../../service/TransactionService.";

export default function TransactionHistory() {
    const { cookies, isLoggedIn } = useContext(UserContext);

    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        TransactionService.getTransactionByUser(cookies.user.id).then((res) => {
            setPaymentHistory(res.data);
        }).catch((err) => { console.error("Cannot get payment history", err); });
    }, [])

    return (
        <div className="transaction-history">
            <h1 className="text-start text-light">Your Payment History</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bill Number</th>
                        <th scope="col">Date</th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((transaction, index) => (
                        <tr className="table-dark" key={index}>
                            <td className="table-dark">{index + 1}</td>
                            <td className="table-dark">{transaction.id}</td>
                            <td className="table-dark">{transaction.date_created}</td>
                            <td className="table-dark">...</td>
                            <td className="table-dark">...</td>
                            <td className="table-dark">...</td>
                            <td className="table-dark">...</td>
                            <td className="table-dark">...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}