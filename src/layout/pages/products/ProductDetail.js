import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom"
import ProductService from "../../../service/ProductService";
import "../../../css/layout/pages/products/ProductDetail.css";

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [tag, setTag] = useState(["men", "rolex", "premier"]);
    const [tabActive, setTabActive] = useState(1);

    const selectTab = (number) => {
        setTabActive(number);
    }

    useEffect(() => {
        ProductService.getProductById(productId).then((res) => {
            setProduct(res.data);
        }).catch((err) => { console.error("Failed to fetch ", err) });
    }, [])

    return (
        <div className="product-detail container">
            <div className="text-light" style={{ height: "100px", overflow: "hidden" }}>
                {/* <img src="/img/banner_sales.svg" style={{ objectFit: "cover", width: "auto" }} /> */}
                Just put something here so it not to be too empty
            </div>
            <div className="product-detail-content d-flex flex-row text-light">
                {/* <div className="product-detail-img-frame d-flex justify-content-center">
                    <img className="d-block" src={product.img} alt="..." />
                </div> */}


                <div id="carouselExample" class="product-detail-img-frame  carousel slide">
                    <div class="d-flex carousel-inner h-100">
                        <div class="carousel-item active">
                            <img src={product.img} class="d-block" alt="..." />
                        </div>
                        {product.img2 &&
                            <div class="carousel-item">
                                <img src={product.img2} class="d-block" alt="..." />
                            </div>}

                        {product.img3 &&
                            <div class="carousel-item">
                                <img src={product.img3} class="d-block" alt="..." />
                            </div>}

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>



                <div className="product-detail-content-padding"></div>
                <div className="product-detail-option d-flex flex-column">
                    <h1>{product.name}</h1>
                    <h1>${Number(product.price).toLocaleString()}</h1>
                    <h6>{product.summary ? product.summary : product.description}</h6>
                    <div className="button-container ">
                        <button type="button" className="btn btn-dark product-detail-button-1">Buy Now</button>
                        <button type="button" className="btn btn-warning product-detail-button-2">Add To Cart</button>
                    </div>
                    <br />
                    <div>
                        <h5>Detail:</h5>
                        <p>{product.description}</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                        <p>Test content</p>
                    </div>
                    <div className="button-container ">
                        <button type="button" className="btn btn-dark product-detail-button-1">Buy Now</button>
                        <button type="button" className="btn btn-warning product-detail-button-2">Add To Cart</button>
                    </div>
                    <div className="product-detail-tag">
                        {tag.map((tag, index) => (
                            <Link className="badge text-bg-secondary" to={"/products/" + tag} key={index}>{tag}</Link>
                        ))}
                        {/* <span className="badge text-bg-secondary">Men</span>
                        <span className="badge text-bg-secondary">Rolex</span>
                        <span className="badge text-bg-secondary">Premier</span> */}
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <ul className="product-detail-tab nav">
                    <li className="nav-item">
                        <Link className={"nav-link" + (tabActive === 1 ? " active" : "")} aria-current="page" onClick={() => selectTab(1)} to={""}>Products You May Like</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (tabActive === 2 ? " active" : "")} onClick={() => selectTab(2)} to={"store"}>Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (tabActive === 3 ? " active" : "")} onClick={() => selectTab(3)} to={"comment"}>Comment</Link>
                    </li>
                </ul>
            </div>
            <hr className="text-light" />
            <br />
            <div className="product-detail-tab-content text-light">
                <Outlet></Outlet>
            </div>
            <br />
            <hr className="text-light" />
        </div>
    )
}