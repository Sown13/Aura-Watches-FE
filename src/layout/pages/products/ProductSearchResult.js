import { useEffect, useRef, useState } from "react";
import ProductService from "../../../service/ProductService";
import ProductCard from "../../../components/parts/ProductCard";

export default function ProductSearchResult() {
    // for display
    const [productList, setProductList] = useState([]);

    // for origin query results (use to filter)
    const [originProductList, setOriginProductList] = useState([]);

    // for filtering and searching
    const [isActive, setIsActive] = useState(1);
    const [isMen, setIsMen] = useState(0);
    const [isWomen, setIsWomen] = useState(0);
    const [isPremier, setIsPremier] = useState(0);
    const [isSport, setIsSport] = useState(0);
    const [isOnSale, setIsOnSale] = useState(0);
    const [sort, setSort] = useState("");
    const [brand, setBrand] = useState("");
    const brandList = ["AURA WATCH", "FOSSIL", "TOMMY HILFIGER", "BULOVA", "GUESS", "ANNE KLEIN", "G-SHOCK", "NINE WEST", "TIMEX"];
    const [isFiltering, setIsFiltering] = useState(0);
    const [search, setSearch] = useState("");

    // for scrolling to top of the div after changing page
    const containerRef = useRef(null);

    const scrollToFirstResultLine = () => {
        let div = document.getElementById("view-point");
        // my note: this one is not working if setState() is not done
        div.scrollIntoView();
    };

    // for searching
    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    }

    const getSearchResult = (e) => {
        e.preventDefault();
        resetFilter();
        const tempSearchResult = originProductList
            .filter(product => product.name.toLowerCase().includes(search.toLowerCase())
                || product.name_code.toLowerCase().includes(search.toLowerCase()));
        setProductList(tempSearchResult);
    }

    // for filter results
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
            case "onSale":
                setIsOnSale(isOnSale === 1 ? 0 : 1);
                break;
            default:
                break;
        }
    }

    const handleSelectSort = (e) => {
        setSort(e.target.value);
    }

    const handleSelectBrand = (event) => {
        setBrand(event.target.value);
    }


    const resetFilter = () => {
        setIsMen(0);
        setIsWomen(0);
        setIsPremier(0);
        setIsSport(0);
        setBrand("");
    }

    const getFilterResult = () => {
        let tempFilterResult = [...originProductList];
        tempFilterResult = tempFilterResult.filter(product => product.name.toLowerCase().includes(search.toLowerCase())
            || product.name_code.toLowerCase().includes(search.toLowerCase()));
        if (isMen) {
            tempFilterResult = tempFilterResult.filter(product => product.isMen === isMen);
        }
        if (isWomen) {
            tempFilterResult = tempFilterResult.filter(product => product.isWomen === isWomen);
        }
        if (isPremier) {
            tempFilterResult = tempFilterResult.filter(product => product.isPremier === isPremier);
        }
        if (isSport) {
            tempFilterResult = tempFilterResult.filter(product => product.isSport === isSport);
        }
        if (isOnSale) {
            tempFilterResult = tempFilterResult.filter(product => product.sale > 0);
        }
        if (brand !== "") {
            tempFilterResult = tempFilterResult.filter(product => product.brand === brand);
        }
        switch (sort) {
            case "priceDown":
                tempFilterResult.sort((product1, product2) => product2.price * (100 - product2.sale) / 100 - product1.price * (100 - product1.sale) / 100);
                break;
            case "priceUp":
                tempFilterResult.sort((product1, product2) => product1.price * (100 - product1.sale) / 100 - product2.price * (100 - product2.sale) / 100);
                break;
            case "saleDown":
                tempFilterResult.sort((product1, product2) => product2.sale - product1.sale);
                break;
            case "saleUp":
                tempFilterResult.sort((product1, product2) => product2.sale - product1.sale);
                break;
            default: break;
        }
        setProductList(tempFilterResult);
    }


    // get original products list for filtering and searching
    useEffect(() => {
        resetFilter();
        ProductService.getAllActiveProductsNoPage().then((res) => {
            setOriginProductList(res.data);
            setIsFiltering(0);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="search-page">
            <h5 className="text-light d-flex justify-content-left" style={{ fontWeight: "300", marginBottom: "2%" }}>HOME/SEARCH</h5>
            <div className="product-list-filter">
                <form onSubmit={getSearchResult} className="d-flex form-style" role="search" style={{ marginBottom: "1%" }}>
                    <input className="form-control me-2" type="search" name="search" placeholder="Enter your search" aria-label="Search" style={{ border: "0" }}
                        onChange={handleSearchInput}
                    />
                    <button className="btn search-button text-light" type="submit" ><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div id='view-point' className="product-list-filter-check-catagory bg-black text-white d-flex gap-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="men" checked={isMen === 1} onChange={() => setFilter("men")} />
                        <label className="form-check-label" htmlFor="men">
                            Men
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="women" checked={isWomen === 1} onChange={() => setFilter("women")} />
                        <label className="form-check-label" htmlFor="women">
                            Women
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="premier" checked={isPremier === 1} onChange={() => setFilter("premier")} />
                        <label className="form-check-label" htmlFor="premier">
                            Premier
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="sport" checked={isSport === 1} onChange={() => setFilter("sport")} />
                        <label className="form-check-label" htmlFor="sport">
                            Sport
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="sales" checked={isOnSale === 1} onChange={() => setFilter("onSale")} />
                        <label className="form-check-label" htmlFor="sales">
                            On Sale
                        </label>
                    </div>
                </div>

                <div className="product-list-filter-check-brand  bg-black text-white d-flex gap-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="brand"
                            id="brand-all"
                            value=""
                            checked={brand === ""}
                            onChange={(e) => handleSelectBrand(e)}
                        />
                        <label className="form-check-label" htmlFor="brand-all">
                            All Brand
                        </label>
                    </div>
                    {brandList.map((brandItem) => (
                        <div className="form-check" key={brandItem}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="brand"
                                id={brandItem}
                                value={brandItem}
                                checked={brand === brandItem}
                                onChange={(e) => handleSelectBrand(e)}
                            />
                            <label className="form-check-label" htmlFor={brandItem}>
                                {brandItem}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='d-flex ms-auto text-light'>
                    <select className="form-select text-light" aria-label="Default select example"
                        onChange={(e) => handleSelectSort(e)}
                        style={{ backgroundColor: "black", border: "0" }}>
                        <option value="" >Sort By Newest</option>
                        <option value="priceUp">Sort By Price (low to high)</option>
                        <option value="priceDown">Sort By Price (high to low)</option>
                        <option value="saleUp">Sort By Sale (low to high)</option>
                        <option value="saleDown">Sort By Sale (high to low)</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#e8c284", borderColor: "#e8c284", color: "black", marginBottom: "20px", fontSize: "27px", fontWeight: "500" }}
                    onClick={() => { getFilterResult(); scrollToFirstResultLine() }}>
                    FILTER
                </button>
            </div>
            <div className='row' ref={containerRef} >
                <h2 className="text-light text-start col-12">Search Result for: '{search || "''"}' in Aura Watch</h2>
                {productList.length > 0 ? (productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12" key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))) : <h2 className="text-light text-start col-12">There is no result </h2>}
            </div>
            <br />
        </div>
    )
}