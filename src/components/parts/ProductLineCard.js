import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductLineCard(props) {
    const { product, removeFromCart, decreaseQuantity, increaseQuantity } = props;

    useEffect(() => {
        console.log(product);
    }, [])

    return (
        <div className="product-line-card d-flex" style={{ backgroundColor: "white", marginBottom: "3%", borderRadius: "14px", color: "black" }}>
            <Link to={`/products/detail/${product.id}`} className="d-flex product" style={{ padding: "0", width: "60%", textDecoration: "none", color: "black" }}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "100%", width: "20%" }}>
                    <div style={{ width: "60px", height: "60px", width: "100%" }}>
                        <img src={product.img} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "5px" }} alt="Product Image" />
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center" style={{ width: "80%" }}>
                    <b>{product.name_code}</b>
                    <div className="text-start ">{product.name}</div>
                </div>
            </Link>

            <div className="d-flex justify-content-center align-items-center" style={{ padding: "0", width: "20%" }}>
                <div className="input-group d-flex justify-content-center align-items-center">
                    <div className="btn" type="button" style={{ width: "35%" }} onClick={() => decreaseQuantity(product.carts[0].id, product.carts[0].quantity)}>-</div>
                    <input style={{ width: "30%", border: "0" }} type="text" className="form-control" placeholder={product.carts[0].quantity} />
                    <div className="btn" type="button" style={{ width: "35%" }} onClick={() => increaseQuantity(product.carts[0].id, product.carts[0].quantity)}>+</div>
                </div>
            </div>
            <div className="text-start d-flex align-items-center" style={{ padding: "0", width: "15%" }}>
                ${product.sale > 0 ? (product.price * (100 - product.sale) / 100).toLocaleString() : Number(product.price).toLocaleString()}
            </div>
            <div className="trash-button d-flex align-items-center" style={{ padding: "0", width: "5%" }}>
                <i className="fas fa-trash-alt" onClick={() => { removeFromCart(product.carts[0].id) }}></i>
            </div>
        </div>
    )
}