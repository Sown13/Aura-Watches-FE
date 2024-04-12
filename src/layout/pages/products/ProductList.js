import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../service/ProductService';
import ProductCard from '../../../components/parts/ProductCard';
import { UserContext } from '../../../context/UserContext';
import "../../../css/layout/pages/products/ProductList.css";

export default function ProductList() {
    const { category } = useParams();
    const { testContext } = useContext(UserContext);

    const [productList, setProductList] = useState([]);
    const [banner, setBanner] = useState('/img/banner_men.svg');


    useEffect(() => {
        ProductService.getAllProduct().then((res) => {
            setProductList(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [category])

    useEffect(() => {
        category ? setBanner(`/img/banner_${category}.svg`) : setBanner('/img/banner_men.svg');
    }, [category]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);


    return (
        <div className='product-list text-light'>
            <h5 className='product-list-title'> HOME/{category ? category.toLocaleUpperCase() : 'ALL'} </h5>
            TEST: {testContext}
            <div className='product-list-banner'><img src={banner} alt='BANNER' /></div>
            <div className='row'>
                {productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12" key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    )
}