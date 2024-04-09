import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import ProductService from "../../../service/ProductService";

export default function ProductDetail() {
    const { productId } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        ProductService.getProductById(productId).then((res) => {
            setProduct(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    return (
        <div>
            <h4>Product Detail</h4>
            <div>id: {product.id}</div>
            <div>name: {product.name}</div>
        </div>
    )
}