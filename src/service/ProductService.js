import http from "./httpCommon";

const getAllProduct = (category, page) => {
    const resultPerPage = "&_page=" + page + "&_limit=20" + "&_sort=id&_order=desc&isActive=1";
    switch (category) {
        case "all":
            return http.get("/products?" + resultPerPage);
        case "men":
            return http.get("/products?isMen=1" + resultPerPage);
        case "women":
            return http.get("/products?isWomen=1" + resultPerPage);
        case "premier":
            return http.get("/products?isPremier=1" + resultPerPage);
        case "sport":
            return http.get("/products?isSport=1" + resultPerPage);
        case "sales":
            return http.get("/products?sale_gte=0.1" + resultPerPage);
        case "AURA-WATCH":
            return http.get("/products?brand=AURA WATCH" + resultPerPage);
        case "FOSSIL":
            return http.get("/products?brand=FOSSIL" + resultPerPage);
        case "TOMMY-HILFIGER":
            return http.get("/products?brand=TOMMY HILFIGER" + resultPerPage);
        case "BULOVA":
            return http.get("/products?brand=BULOVA" + resultPerPage);
        case "GUESS":
            return http.get("/products?brand=GUESS" + resultPerPage);
        case "ANNE-KLEIN":
            return http.get("/products?brand=ANNE KLEIN" + resultPerPage);
        case "G-SHOCK":
            return http.get("/products?brand=G-SHOCK" + resultPerPage);
        case "NINE-WEST":
            return http.get("/products?brand=NINE WEST" + resultPerPage);
        case "TIMEX":
            return http.get("/products?brand=TIMEX" + resultPerPage);
        default:
            return http.get("/products?" + resultPerPage);
    }
}

const getProductListByFilter = (isActive, isMen, isWomen, isPremier, isSport, isSale, brand, sort, page) => {
    // console.log(`/products?isActive=${isActive}` +
    //     `${isMen === 1 ? `&isMen=${isMen}` : ''}` +
    //     `${isWomen === 1 ? `&isWomen=${isWomen}` : ''}` +
    //     `${isPremier === 1 ? `&isPremier=${isPremier}` : ''}` +
    //     `${isSport === 1 ? `&isSport=${isSport}` : ''}` +
    //     `${brand === "" ? "" : `&brand=${brand}`}` +
    //     `&_page=${page}&_limit=8`);
    return http.get(
        `/products?isActive=${isActive}` +
        `${isMen === 1 ? `&isMen=${isMen}` : ''}` +
        `${isWomen === 1 ? `&isWomen=${isWomen}` : ''}` +
        `${isPremier === 1 ? `&isPremier=${isPremier}` : ''}` +
        `${isSport === 1 ? `&isSport=${isSport}` : ''}` +
        `${brand === "" ? "" : `&brand=${brand}`}` +
        `${isSale === 1 ? `&sale_gte=0.1` : ''}` +
        `${sort === "" ? "" : `&_sort=${sort}`}` +
        `&_page=${page}&_limit=8` +
        `&_sort=id&_order=desc`
    );

}

const getProductById = (id) => {
    // notice for me: this _embed is asynchronous with the /products/id,
    //  so we need to check both products and cart retrieved before using it
    return http.get("/products/" + id + "?_embed=carts");
}

const addProduct = (product) => {
    return http.post("/products", product);
}

const updateProduct = (product) => {
    return http.patch("/products/" + product.id, product);
}

const removeProduct = (id) => {
    return http.delete("/products/" + id);
}

const getProductsByUser = (user) => {
    return http.get("/users/" + user + "/products");
}

const getAllActiveProductsNoPage = () => {
    return http.get("/products?isActive=1");
}

const getAllProductWithCart = () => {
    return http.get("/products?_embed=carts");
}

const getProductForAdmin = (page) => {
    const resultPerPage = "&_page=" + page + "&_limit=6" + "&_sort=id&_order=desc";
    return http.get("/products?" + resultPerPage);
}

const ProductService = {
    getAllProduct,
    getProductListByFilter,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
    getProductsByUser,
    getAllActiveProductsNoPage,
    getAllProductWithCart,
    getProductForAdmin
}

export default ProductService;