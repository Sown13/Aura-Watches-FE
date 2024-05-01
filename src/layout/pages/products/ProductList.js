import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../../service/ProductService';
import ProductCard from '../../../components/parts/ProductCard';
import "../../../css/layout/pages/products/ProductList.css";

export default function ProductList() {
    const { category } = useParams();
    const categoryList = ["all", "men", "women", "premier", "sport", "sales",
        "AURA-WATCH", "FOSSIL", "TOMMY-HILFIGER", "BULOVA", "GUESS", "ANNE-KLEIN", "G-SHOCK", "NINE-WEST", "TIMEX"];
    const [selectedCategory, setSelectedCategory] = useState(category);

    // for display
    const [productList, setProductList] = useState([]);
    const [banner, setBanner] = useState('');

    // for filtering
    const [isActive, setIsActive] = useState(1);
    const [isMen, setIsMen] = useState(0);
    const [isWomen, setIsWomen] = useState(0);
    const [isPremier, setIsPremier] = useState(0);
    const [isSport, setIsSport] = useState(0);
    const [isSale, setIsSale] = useState(0);
    const [sort, setSort] = useState("");
    const [brand, setBrand] = useState("");
    const [currentPageFilter, setCurrentPageFilter] = useState(1);
    const brandList = ["AURA WATCH", "FOSSIL", "TOMMY HILFIGER", "BULOVA", "GUESS", "ANNE KLEIN", "G-SHOCK", "NINE WEST", "TIMEX"];

    // for pagnation
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalPagesFilter, setTotalPagesFilter] = useState(1);
    const [isFiltering, setIsFiltering] = useState(0);


    // for scrolling to top of the div after changing page
    const containerRef = useRef(null);

    const scrollToFirstResultLine = () => {
        // let div = document.getElementById("view-point");
        // // notice: this one is not working if setState() is not done
        // div.scrollIntoView();
        const viewPointElement = document.getElementById('view-point');
        if (viewPointElement) {
            const scrollPosition = viewPointElement.offsetTop - window.innerHeight*0.112;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
            });
        }
    };

    // for pagenation
    const resetPages = () => {
        setCurrentPage(1);
    }

    const handlePageChange = (page) => {
        if (page < 1) { page = 1 };
        if (page > totalPages) { page = totalPages };
        setCurrentPage(page);
    }

    const resetPagesFilter = () => {
        setCurrentPageFilter(1);
    }

    const handlePageFilterChange = (page) => {
        if (page < 1) { page = 1 };
        if (page > totalPagesFilter && totalPagesFilter > 0) { page = totalPagesFilter };
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
            case "sales":
                setIsSale(isSale === 1 ? 0 : 1);
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


    const resetFilter = (category) => {
        setIsMen(0);
        setIsWomen(0);
        setIsPremier(0);
        setIsSport(0);
        setIsSale(0);
        setBrand("");
        // set this for default checkbox
        setFilter(category);
    }


    const getFilterResultFirstTime = () => {
        console.log("brand: " + brand);
        ProductService.getProductListByFilter(isActive, isMen, isWomen, isPremier, isSport, isSale, brand, sort, 1).then((res) => {
            setProductList(res.data);
            const recordCount = res.headers.get('X-Total-Count');
            if (recordCount % 8 === 0) {
                setTotalPagesFilter(recordCount / 8);
            } else setTotalPagesFilter(Math.floor(recordCount / 8) + 1);
            handlePageFilterChange(1);
            setIsFiltering(1);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }

    const getPageFilterResult = (page) => {
        if (page < 1) { page = 1 };
        if (page > totalPagesFilter && totalPagesFilter > 0) { page = totalPagesFilter };
        ProductService.getProductListByFilter(isActive, isMen, isWomen, isPremier, isSport, isSale, brand, sort, page).then((res) => {
            setProductList(res.data);
            handlePageFilterChange(page);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }

    /// for pagenation of category

    const getPage = (page) => {
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        ProductService.getAllProduct(category, page).then((res) => {
            console.log(res.data);
            setProductList(res.data);
            handlePageChange(page);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }
    // get products after change the category
    useEffect(() => {
        ProductService.getAllProduct(category, currentPage).then((res) => {
            setProductList(res.data);
            const recordCount = res.headers.get('X-Total-Count');
            if (recordCount % 20 === 0) {
                setTotalPages(recordCount / 20);
            } else setTotalPages(Math.floor(recordCount / 20) + 1);
            resetFilter(category);
            resetPages();
            resetPagesFilter();
            setIsFiltering(0);
            if (brandList.includes(category.replace(/-/g, " ")) || brandList.includes(category)) {
                if (category !== "G-SHOCK")
                    setBrand(category.replace(/-/g, " "));
                else setBrand(category);
            } else setBrand("");
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



    return (
        <div className='product-list text-light'>

            <h5 className='product-list-title'> HOME/{selectedCategory ? selectedCategory.toLocaleUpperCase() : ''} </h5>
            <div className='product-list-banner'>
                <a href={`/products/${category}`}><img src={banner} alt='BANNER' /></a>
            </div>

            <div className="product-list-filter">

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
                        <label className="form-check-label" htmlFor="sales">
                            Sport
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="sales" checked={isSale === 1} onChange={() => setFilter("sales")} />
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
                        <option value="price&_order=asc">Sort By Price (low to high)</option>
                        <option value="price&_order=desc">Sort By Price (high to low)</option>
                        <option value="sale&_order=asc">Sort By Sale (low to high)</option>
                        <option value="sale&_order=desc">Sort By Sale (high to low)</option>
                        <option value="name">Sort By Name</option>
                        <option value="name_code">Code Name</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#e8c284", borderColor: "#e8c284", color: "black", marginBottom: "20px" }} onClick={() => { getFilterResultFirstTime(); scrollToFirstResultLine() }}><i class="fa-solid fa-filter"></i> FILTER</button>
            </div>

            <div className='d-flex justify-content-center'>
                {!isFiltering &&
                    (<div>
                        <button className='change-page-btn' onClick={() => { getPage(1); scrollToFirstResultLine() }}>&lt;&lt;</button>
                        <button className='change-page-btn' onClick={() => { getPage(currentPage - 1); scrollToFirstResultLine() }}>&lt;</button>
                        <a className={'change-page-btn current'} disabled href='#view-point'  >   {currentPage === totalPages ? "LAST" : currentPage}  </a>
                        <button className='change-page-btn' onClick={() => { getPage(currentPage + 1); scrollToFirstResultLine() }}> &gt;</button>
                        <button className='change-page-btn' onClick={() => { getPage(totalPages); scrollToFirstResultLine() }}> &gt;&gt;</button>
                    </div>)
                }

                {isFiltering ? (
                    <div>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(1); scrollToFirstResultLine() }}>&lt;&lt;</button>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter - 1); scrollToFirstResultLine() }}>&lt;</button>
                        <a className={'change-page-btn current'} disabled href='#view-point'  >   {currentPageFilter === totalPagesFilter ? "LAST" : currentPageFilter}  </a>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter + 1); scrollToFirstResultLine() }}> &gt;</button>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(totalPagesFilter); scrollToFirstResultLine() }}> &gt;&gt;</button>
                    </div>
                ) : null}
            </div>

            <div className='row' ref={containerRef}>
                {productList.map((product, index) => (
                    <div className="product-list-card col-lg-3 col-md-4 col-sm-12" key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>

            <br />
            <div className='d-flex justify-content-center'>
                {!isFiltering &&
                    (<div>
                        <button className='change-page-btn' onClick={() => { getPage(1); scrollToFirstResultLine() }}>&lt;&lt;</button>
                        <button className='change-page-btn' onClick={() => { getPage(currentPage - 1); scrollToFirstResultLine() }}>&lt;</button>
                        <a className={'change-page-btn current'} disabled href='#view-point'  >   {currentPage === totalPages ? "LAST" : currentPage}  </a>
                        <button className='change-page-btn' onClick={() => { getPage(currentPage + 1); scrollToFirstResultLine() }}> &gt;</button>
                        <button className='change-page-btn' onClick={() => { getPage(totalPages); scrollToFirstResultLine() }}> &gt;&gt;</button>
                    </div>)
                }

                {isFiltering ? (
                    <div>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(1); scrollToFirstResultLine() }}>&lt;&lt;</button>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter - 1); scrollToFirstResultLine() }}>&lt;</button>
                        <a className={'change-page-btn current'} disabled href='#view-point'  >   {currentPageFilter === totalPagesFilter ? "LAST" : currentPageFilter}  </a>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(currentPageFilter + 1); scrollToFirstResultLine() }}> &gt;</button>
                        <button className='change-page-btn' onClick={() => { getPageFilterResult(totalPagesFilter); scrollToFirstResultLine() }}> &gt;&gt;</button>
                    </div>
                ) : null}
            </div>
        </div >
    )
}