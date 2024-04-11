import { Link } from "react-router-dom";
import "../../css/components/parts/ProductCard.css";
export default function ProductCard({ product }) {
    return (
        <div className="product-card card">
            <Link to={"/products/detail/" + (product ? product.id : 0)}>
                <div className="product-card-img-container">
                    <img src={product ? product.img : "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png"} class=" card-img-top" alt="Aura-Watch" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product ? product.name : "Aura-Watch"}</h5>
                    <p className="card-text">${product ? product.price : 0}</p>
                </div>
            </Link>
        </div>
    )
}