import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../../../service/ProductService';

export default function ProductList() {
    const { category } = useParams();

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        ProductService.getAllProduct().then((res) => {
            setProductList(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    return (
        <div>
            {category || 'All'}
            {productList.map(product => (
                <div>
                    <h1> {product.name} </h1>
                    <h1>{product.description}</h1>
                    <h1>{product.price}</h1>
                </div>
            ))}
        </div>
    )
}