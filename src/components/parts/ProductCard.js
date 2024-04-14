import { Link } from "react-router-dom";
import "../../css/components/parts/ProductCard.css";
export default function ProductCard({ product }) {
    return (
        <a className="product-card card" href={"/products/detail/" + (product ? product.id : 0)} style={{ textDecoration: "none" }}>
            <div className="product-card-img-container position-relative">
                <img src={product ? product.img : "..."} className="img-fluid card-img-top" alt="Aura-Watch" />
                <div className="product-card-img-badge text-light position-absolute">New</div>
            </div>
            <div className="product-card-body card-body">
                <h5 className="card-title">{product ? product.name : "Aura-Watch"}</h5>
                {/* <p className="card-text">${product ? product.price : 0}</p> */}
                {product.sale > 0 ? (
                    <div className="card-text d-flex justify-content-center">
                        <del className="card-text">{product.price}$</del>
                        <p className="card-tex">
                            &nbsp;  &nbsp; <span style={{ color: "red" }}>{(product.price * (100 - product.sale) / 100).toLocaleString()}</span>$
                        </p>
                    </div>
                ) : (
                    <p className="card-text">{product.price.toLocaleString()}$</p>
                )}
            </div>
        </a>
    )
}