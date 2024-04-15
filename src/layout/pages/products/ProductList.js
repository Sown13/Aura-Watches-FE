import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../service/ProductService';
import ProductCard from '../../../components/parts/ProductCard';
import { UserContext } from '../../../context/UserContext';
import "../../../css/layout/pages/products/ProductList.css";

export default function ProductList() {
    const { category } = useParams();
    const categoryList = ["all", "men", "women", "premier", "sport", "sales", "aura-watch"];
    const [selectedCategory, setSelectedCategory] = useState(category);
    const { testContext } = useContext(UserContext);

    // for display
    const [productList, setProductList] = useState([]);
    const [banner, setBanner] = useState('/img/banner_men.svg');


    // for filtering
    const [isActive, setIsActive] = useState(1);
    const [isMen, setIsMen] = useState(0);
    const [isWomen, setIsWomen] = useState(0);
    const [isPremier, setIsPremier] = useState(0);
    const [isSport, setIsSport] = useState(0);
    const [isSale, setIsSale] = useState(0);
    const [brand, setBrand] = useState("");

    const setFilter = (filter) => {
        switch (filter) {
            case "men":
                setIsMen(isMen === 1 ? 0 : 1);
                break;
            case "women":
                setIsWomen(isWomen === 1 ? 0 : 1);
                break;
            case "premier":
                setIsPremier(isPremier === 1 ? 0 : 1);
                break;
            case "sport":
                setIsSport(isSport === 1 ? 0 : 1);
                break;
            default:
                break;
        }
    }

    const resetFilter = (category) => {
        setIsMen(0);
        setIsWomen(0);
        setIsPremier(0);
        setIsSport(0);
        setBrand("");
        setFilter(category);
    }

    const getFilterResult = () => {
        ProductService.getProductListByFilter(isActive, isMen, isWomen, isPremier, isSport, brand).then((res) => {
            setProductList(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }

    // get products after change the category
    useEffect(() => {
        ProductService.getAllProduct(category).then((res) => {
            setProductList(res.data);
            resetFilter(category);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [category])

    useEffect(() => {
        if (categoryList.includes(category)) { setSelectedCategory(category) }
        else setSelectedCategory("all");
        selectedCategory ? setBanner(`/img/banner_${selectedCategory}.svg`) : setBanner('/img/banner_men.svg');
    }, [category, selectedCategory]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);


    return (
        <div className='product-list text-light'>
            <h5 className='product-list-title'> HOME/{selectedCategory ? selectedCategory.toLocaleUpperCase() : ''} </h5>
            TEST: {testContext}
            <div className='product-list-banner'><img src={banner} alt='BANNER' /></div>
            <div className="product-list-filter">

                <div className="product-list-filter-select bg-black text-white d-flex gap-3 mb-2">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">&#60;$50,000</option>
                        <option value="2">$50,000-$200,000</option>
                        <option value="3">&#60;$200,000</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Date Indicator</option>
                        <option value="1">Digital</option>
                        <option value="2">Number</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Sale</option>
                        <option value="1">&#60;25%</option>
                        <option value="2">25%-&#60;50%</option>
                        <option value="3">50%-&#60;80%</option>
                        <option value="4">&#62;80%</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">Price(low to high)</option>
                        <option value="2">Price(high to low)</option>
                        <option value="3">Name</option>
                        <option value="4">Release Date</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">Price(low to high)</option>
                        <option value="2">Price(high to low)</option>
                        <option value="3">Name</option>
                        <option value="4">Release Date</option>
                    </select>
                </div>

                <div className="product-list-filter-check-catagory  bg-black text-white d-flex gap-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="men" checked={isMen === 1} onChange={() => setFilter("men")} />
                        <label class="form-check-label" for="men">
                            Men
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="women" checked={isWomen === 1} onChange={() => setFilter("women")} />
                        <label class="form-check-label" for="women">
                            Women
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="premier" checked={isPremier === 1} onChange={() => setFilter("premier")} />
                        <label class="form-check-label" for="premier">
                            Premier
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="sport" checked={isSport === 1} onChange={() => setFilter("sport")} />
                        <label class="form-check-label" htmlFor="sales">
                            Sport
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="sales" />
                        <label class="form-check-label" htmlFor="sales">
                            On Sale
                        </label>
                    </div>
                </div>

                <div className="product-list-filter-check-brand  bg-black text-white d-flex gap-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Aura Watch
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Rolex
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Brand 3
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Brand 4
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Brand 5
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Brand 6
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#e8c284", borderColor: "#e8c284", color: "black" }} onClick={() => getFilterResult()}>FILTER</button>
            </div>
            <div className='row'>
                {productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12" key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div >
    )
}