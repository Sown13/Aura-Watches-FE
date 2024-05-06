import { useEffect, useState } from "react";
import ProductService from "../../../../service/ProductService";
import ProductCard from "../../../../components/parts/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductOther() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        ProductService.getAllActiveProductsNoPage().then((res) => {
            let productsMayLike = [];
            if (res.data.length > 4) {
                productsMayLike = res.data.sort(() => 0.5 - Math.random()).slice(0, 4);
            } else productsMayLike = res.data;
            setProductList(productsMayLike);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    return (
        <div className="container text-center">
            <div className="row">
                {productList.map((product) =>
                    <div className="col" key={product.id}> <ProductCard product={product} /></div>

                )}
            </div>
        </div>
    )
}