import { useContext, useEffect, useRef, useState } from 'react';
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
    const [currentPageFilter, setCurrentPageFilter] = useState(1);

    // for pagnation
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalPagesFilter, setTotalPagesFilter] = useState(1);
    const [isFiltering, setIsFiltering] = useState(0);


    // for scrolling to top of the div after changing page
    const containerRef = useRef(null);

    const scrollToFirstResultLine = () => {
        let div = document.getElementById("view-point");
        div.scrollIntoView();
        // console.log("out sidebutton work but button in the .map is not?")
        // fixed, using <a href="#id">, so wield!!
    };

    // for pagenation
    const resetPages = () => {
        setCurrentPage(1);
    }

    const handlePageChange = (page) => {
        if (page < 1) { page = 1 };
        setCurrentPage(page);
    }

    const resetPagesFilter = () => {
        setCurrentPageFilter(1);
    }

    const handlePageFilterChange = (page) => {
        setCurrentPageFilter(page);
    }
    ////////////////////////////////


    // for pagenation of filter results
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


    const getFilterResultFirstTime = () => {
        ProductService.getProductListByFilter(isActive, isMen, isWomen, isPremier, isSport, brand, 1).then((res) => {
            setProductList(res.data.data);
            setTotalPagesFilter(res.data.last);
            handlePageFilterChange(1);
            setIsFiltering(1);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }

    const getPageFilterResult = (page) => {
        if (page <= 0) { page = 1 };
        ProductService.getProductListByFilter(isActive, isMen, isWomen, isPremier, isSport, brand, page).then((res) => {
            setProductList(res.data.data);
            handlePageFilterChange(page);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }

    /// for pagenation of category

    const getPage = (page) => {
        if (page < 1) page = 1;
        ProductService.getAllProduct(category, page).then((res) => {
            setProductList(res.data.data);
            handlePageChange(page);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }
    // get products after change the category
    useEffect(() => {
        ProductService.getAllProduct(category, currentPage).then((res) => {
            setProductList(res.data.data);
            setTotalPages(res.data.last);
            resetFilter(category);
            resetPages();
            resetPagesFilter();
            setIsFiltering(0);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [category])

    useEffect(() => {
        // Check if user type in invalid category then set back category = "all"
        if (categoryList.includes(category)) { setSelectedCategory(category) }
        else setSelectedCategory("all");
        selectedCategory ? setBanner(`/img/banner_${selectedCategory}.svg`) : setBanner('/img/banner_men.svg');
    }, [category, selectedCategory]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [category]);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if (container) {
    //         container.scrollTop = 0;
    //         console.log("scroll to the top, did not work, need fix");
    //     }
    // }, [currentPage, currentPageFilter]);



    return (
        <div className='product-list text-light'>
            <h5 className='product-list-title'> HOME/{selectedCategory ? selectedCategory.toLocaleUpperCase() : ''} </h5>
            TEST: {testContext}
            <div className='product-list-banner'><img src={banner} alt='BANNER' /></div>
            <div className="product-list-filter">

                <div className="product-list-filter-select bg-black text-white d-flex gap-3 mb-2">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">&#60;$50,000</option>
                        <option value="2">$50,000-$200,000</option>
                        <option value="3">&#60;$200,000</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Date Indicator</option>
                        <option value="1">Digital</option>
                        <option value="2">Number</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Sale</option>
                        <option value="1">&#60;25%</option>
                        <option value="2">25%-&#60;50%</option>
                        <option value="3">50%-&#60;80%</option>
                        <option value="4">&#62;80%</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">Price(low to high)</option>
                        <option value="2">Price(high to low)</option>
                        <option value="3">Name</option>
                        <option value="4">Release Date</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">Price(low to high)</option>
                        <option value="2">Price(high to low)</option>
                        <option value="3">Name</option>
                        <option value="4">Release Date</option>
                    </select>
                </div>

                <div id='view-point' className="product-list-filter-check-catagory  bg-black text-white d-flex gap-3">
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
                        <label className="form-check-label" htmlFor="sales">
                            Sport
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="sales" />
                        <label className="form-check-label" htmlFor="sales">
                            On Sale
                        </label>
                    </div>
                </div>

                <div className="product-list-filter-check-brand  bg-black text-white d-flex gap-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Aura Watch
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Rolex
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand 3
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand 4
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand 5
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand 6
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#e8c284", borderColor: "#e8c284", color: "black" }} onClick={() => getFilterResultFirstTime()}>FILTER</button>
            </div>
            <div className='row' ref={containerRef}>
                {productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12" key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
            <br />
            <div className='d-flex justify-content-end'>
                {!isFiltering &&
                    (<div>
                        {currentPage > 1 && <button className='change-page-btn' onClick={() => { getPage(currentPage - 1); scrollToFirstResultLine() }}>&lt;</button>}
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                            <a
                                className={'change-page-btn ' + (currentPage === pageNumber ? 'current' : '')}
                                key={pageNumber}
                                onClick={() => {
                                    getPage(pageNumber);
                                }}
                                disabled={currentPage === pageNumber}
                                href='#view-point'
                            >
                                {pageNumber}
                            </a>
                        ))}
                        {currentPage < totalPages && <button className='change-page-btn' onClick={() => { getPage(currentPage + 1); scrollToFirstResultLine() }}> &gt;</button>}
                    </div>)
                }

                {isFiltering ? (
                    <div>
                        {currentPageFilter > 1 && <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter - 1); scrollToFirstResultLine() }}>&lt;</button>}
                        {Array.from({ length: totalPagesFilter }, (_, index) => index + 1).map((pageNumber) => (
                            <a
                                className={'change-page-btn ' + (currentPageFilter === pageNumber ? 'current' : '')}
                                href='#view-point'
                                key={pageNumber}
                                onClick={() => {
                                    getPageFilterResult(pageNumber);
                                }}
                                disabled={currentPageFilter === pageNumber}
                            >
                                {pageNumber}
                            </a>
                        ))}
                        {currentPageFilter < totalPagesFilter && <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter + 1); scrollToFirstResultLine() }}> &gt;</button>}
                    </div>
                ) : null}
            </div>
        </div >
    )
}