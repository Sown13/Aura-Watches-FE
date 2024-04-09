import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                    {productList.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td><Link to={`/products/detail/${product.id}`}>{product.name}</Link></td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}