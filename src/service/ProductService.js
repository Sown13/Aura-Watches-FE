import http from "./httpCommon";

const getAllProduct = (category, page) => {
    switch (category) {
        case "all":
            return http.get("/products?_page=" + page + "&_per_page=20");
        case "men":
            return http.get("/products?isMen=1&_page=" + page + "&_per_page=20");
        case "women":
            return http.get("/products?isWomen=1&_page=" + page + "&_per_page=20");
        case "premier":
            return http.get("/products?isPremier=1&_page=" + page + "&_per_page=20");
        case "sport":
            return http.get("/products?isSport=1&_page=" + page + "&_per_page=20");
        default:
            return http.get("/products?_page=" + page + "&_per_page=20");
    }
}

const getProductListByFilter = (isActive, isMen, isWomen, isPremier, isSport, brand, page) => {
    // console.log("/products?isActive=" + isActive + "&isMen=" + isMen + "&isWomen=" + isWomen
    //     + "&isPremier=" + isPremier + "&isSport=" + isSport + "&brand=" + brand.replaceAll(" ", "%20") + "&_page=" + page);
    if (brand) {
        brand = brand.replace(/ /g, "%20");
    }
    return http.get(`/products?isActive=${isActive}
    ${isMen === 1 ? `&isMen=${isMen}` : ''}
    ${isWomen === 1 ? `&isWomen=${isWomen}` : ''}
    ${isPremier === 1 ? `&isPremier=${isPremier}` : ''}
    ${isSport === 1 ? `&isSport=${isSport}` : ''}
    &brand=${brand}&_page=${page}&_per_page=8`);
}

const getProductById = (id) => {
    return http.get("/products/" + id);
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

const ProductService = {
    getAllProduct,
    getProductListByFilter,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
    getProductsByUser
}

export default ProductService;