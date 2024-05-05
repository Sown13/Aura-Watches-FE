import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import TransactionService from "../../../service/TransactionService.";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import PDFTable from "../../../components/parts/PDFTable";

export default function TransactionDetail() {
    const { cookies, isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { paymentHistory, transactionId, total_paid } = location.state || {};
    const [historyDetail, setHistoryDetail] = useState([]);

    //handle redirect user who not logged in
    useEffect(() => {
        if (!cookies.user) {
            navigate("/");
        }
    }, [cookies])


    // Test pdf
    const [showPDF, setShowPDF] = useState(false);

    const handleDownloadPDF = () => {
        if (showPDF) {
            setShowPDF(false);
        } else setShowPDF(true);
    };

    useEffect(() => {
        if (!cookies.user) {
            navigate("/");
        }
    }, [cookies])

    useEffect(() => {
        console.log(paymentHistory);
        if (paymentHistory && transactionId) {
            if (cookies.user && location.state != null) {
                const historyFilter = paymentHistory.find(transaction => transaction.id === transactionId);
                console.log("after filter:" + JSON.stringify(historyFilter));
                console.log(transactionId);
                setHistoryDetail(historyFilter);
            }
        } else navigate("/user/profile/payment-history")
    }, [cookies])

    return (
        <div className="transaction-history">
            <h1 className="text-start text-light">
                <Link className="btn" to={"/user/profile/payment-history"} style={{ textDecoration: "none", color: "white" }}>&lt;</Link>
                Detail for Bill No.{transactionId}
            </h1>
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
                        <th scope="col">View Product In Store</th>
                    </tr>
                </thead>
                <tbody>
                    {historyDetail.products && historyDetail.products.map((product, index) => (
                        <tr className="table-dark" key={index}>
                            <td className="table-dark">{index + 1}</td>
                            <td className="table-dark">{historyDetail.id}</td>
                            <td className="table-dark"> {new Date(historyDetail.date_created).toLocaleString([], {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</td>
                            <td className="table-dark">{product.name_code}</td>
                            <td className="table-dark">{product.price}</td>
                            <td className="table-dark">{product.sale}%</td>
                            <td className="table-dark">{product.quantity}</td>
                            <td className="table-dark"><Link to={"/products/detail/" + product.id}><i className="fa-solid fa-eye" style={{ color: "#e8c284" }}></i></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn text-light" style={{ border: "1px solid" }} onClick={() => { handleDownloadPDF() }}>Download This Bill As PDF</button>
            {showPDF && (
                <PDFViewer style={{ width: '100%', height: '100vh' }}>
                    <PDFTable historyDetail={historyDetail} total_paid={total_paid} />
                </PDFViewer>
            )}
        </div>
    )
}