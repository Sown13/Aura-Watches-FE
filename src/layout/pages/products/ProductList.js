import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../service/ProductService';
import ProductCard from '../../../components/parts/ProductCard';
import { UserContext } from '../../../context/UserContext';
import "../../../css/layout/pages/products/ProductList.css";

export default function ProductList() {
    const { category } = useParams();

    const [productList, setProductList] = useState([]);
    const { testContext } = useContext(UserContext);

    useEffect(() => {
        ProductService.getAllProduct().then((res) => {
            setProductList(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    return (
        <div className='product-list text-light'>
            <h5 className='product-list-title'> HOME/{category ? category.toLocaleUpperCase() : 'ALL'} </h5>
            TEST: {testContext}
            <div className='row'>
                {productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12">
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    )
}